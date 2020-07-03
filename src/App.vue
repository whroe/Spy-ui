<template> 
    <div class="header home">
      <div class="topnav">
        <router-link to='/'>首页</router-link>
        <router-link to='/dialog'>dialog</router-link>
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
      news:'2',
      name:'1',
      userName:'',
      menuData:[{
        name:'首页',
        url:'/'     
      },{
        name:'dialog组件',
        url:'/dialog'
      },{
        name:'日历',
        url:'/calendar',
        children:[
          {
            name:'日历-1',
            url:''
          }
        ]
      }]
      
    }
  },
  provide:{
    new:function(){
      console.log(this);
      console.log(this.$data);
      return this.$data
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

</style>
