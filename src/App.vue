<template> 
    <div class="header home">
      <div class="topnav">
        <router-link :to='item.url' v-for="(item,i) in menuData" :key="i + 't'">
          <div :class="{active:$route.path == item.url}" class="spy-menu-title">{{item.name}}</div>
        </router-link>
      </div>

      <div class="row">
        <div class="column left">
             <ul class="menu">
               <li v-for="(item,i) in menuData" :key="i + 'r'"  @click="routerJump(item.url,$event)">
                 <div :class="{active:$route.path == item.url}" class="spy-menu-title">{{item.name}}</div>
               </li>
             </ul>
        </div>
        
        <div class="column right">
              <!-- <Spy-input :placeholder='请输入' :type='text' :disabled = 'false' v-model="userName"></Spy-input>
            <Spy-dialog :visible.sync='visible' width="54%"  :value="news">
              {{a.b}}
              {{a.age}}
            <button @click="vue()">test</button>
            <input v-model="news" />
            </Spy-dialog> -->
                    <!-- <Spy-tree ref="bigTree" :tree="tree" :defaultExpand="true" >
          <template v-slot="{ item }">
            <div>{{ item.label }}</div>
          </template>
        </Spy-tree> -->
            <keep-alive include="calendar">
               <router-view></router-view>
            </keep-alive>
        </div>
        

      </div>
    </div>
</template>

<script>
// import func from '../vue-temp/vue-editor-bridge';

export default {
  data(){
    return{
      firstVisible:true,
      visible:false,
      a:{
        b:1
      },
      tree:[],
      news:'2',
      name:'1',
      userName:'',
    }
  },
  provide:{
    new:function(){
      console.log(this);
      console.log(this.$data);
      return this.$data
    }
  },
  computed:{
    menuData(){
      return this.$store.state.menuList
    }
  },
  watch:{
    name: [
            'sayName1',
            function(newVal, oldVal) {
              console.log(newVal, oldVal);
              
                this.sayName2()
            },

            {
                handler: 'sayName3',
                immaediate: true
            }
        ]
  },
  created(){
    console.log(this.$router.options.routes);
    for (let index = 0; index < 50000; index++) {
          this.tree.push({
                label: `${this.number_chinese(index)}级 ${this.number_chinese(index)}`,
                children: [{
                    label: `${this.number_chinese(index + 1)}级 ${this.number_chinese(index + 1)}-${this.number_chinese(index + 1)}`,
                    children: [{
                    label: `${this.number_chinese(index + 2)}级${this.number_chinese(index + 2)}-${this.number_chinese(index + 2)}-${this.number_chinese(index + 2)}`
                    }]
                }]
          })
      }
    this.a = Object.assign({}, this.a, {
  age: 27,
  favoriteColor: 'Vue Green'
})
      let that = this
    this.$watch('a',(oldValue,newValue)=>{
        console.log('触发watch',this,that.a);
        console.log('触发watch1',oldValue,newValue);
    })
    
  },
  mounted(){
    console.log(this.$template);
    //call
    Function.prototype.call_ = function (params) {
      var args = [];
      // 注意i从1开始
      for (var i = 1, len = arguments.length; i < len; i++) {
          args.push(arguments[i]);
      }
      console.log(params);
      params.name = this
      // params.name(arguments)
      eval("params.name(" + args + ")")//eval方法执行字符串中的表达式
      delete params.name
    }
    //apply
    Function.prototype.apply_ = function (params){
      params.name = this 
      params.name(...Array.prototype.slice.call(arguments)[1])
      delete params.name
    }
    // 调用call_
    function name(params) {
      console.log(this.b);
      console.log('params',params);
      console.log('arguments',arguments);
    }
    name.call_(this.a,'12')
    // 调用 apply_
    name.apply_(this.a,['12','1233213',7])
  },
  methods:{
        number_chinese(str) {
                    var num = parseFloat(str);
                    var strOutput = "";
                    num += "";
                    var intPos = num.indexOf('.');  
                    if (intPos >= 0){
                        num = num.substring(0, intPos) + num.substr(intPos + 1, 2);
                    }
                    for (var i=0; i < num.length; i++){
                        strOutput += '零壹贰叁肆伍陆柒捌玖'.substr(num.substr(i,1),1)
                    }
                    return strOutput

    },
    vue(){

      this.a.age =1
      this.name = '2'
      // Object.assign(this.$data, this.$options.data());
      console.log(this.a);
    },
    sayName1() {
        console.log('sayName1==>', this.name)
    },
    sayName2() {
        console.log('sayName2==>', this.name)
    },
    sayName3() {
        console.log('sayName3==>', this.name)
    },
    routerJump(url){
      this.$router.push(url)
    }
  }
}
</script>

<style lang='scss' scoped>
@media screen and (max-width: 1000px) {
    .left {
        display: none;
    }
}
</style>
