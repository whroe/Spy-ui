<template>
<div>
  <!-- <el-select
    placeholder="请选择"
    filterable
    multiple
    
  >
    <el-option
      
     
      :label="item.label"
      :value="item.id">
    </el-option>
  </el-select> -->
    
  <select v-model="value" v-el-select-loadmore="loadmore">
      <option v-for="item in userItems"  :key="item.id">{{item.label}}</option>
  </select>
  </div>
</template>
 <script>
export default {
  directives: {
    'el-select-loadmore': {
      bind(el, binding) {
        // 获取element-ui定义好的scroll盒子
        console.log(el);
        
        // const SELECTWRAP_DOM = el.querySelector('select');
        el.addEventListener('scroll', function () {
          /**
          * scrollHeight 获取元素内容高度(只读)
          * scrollTop 获取或者设置元素的偏移值,常用于, 计算滚动条的位置, 当一个元素的容器没有产生垂直方向的滚动条, 那它的scrollTop的值默认为0.
          * clientHeight 读取元素的可见高度(只读)
          * 如果元素滚动到底, 下面等式返回true, 没有则返回false:
          * ele.scrollHeight - ele.scrollTop === ele.clientHeight;
          */

         

         if(this.getBoundingClientRect().top <= window.innerHeight){
            binding.value();
         }
        //   const condition = this.scrollHeight - this.scrollTop <= this.clientHeight;
        //   if (condition) {
        //     binding.value();
        //   }
        });
      }
    }
  },
  created(){
    for (let index = 0; index < 100000; index++) {
        this.options.push({label:index+'index',id:index})
    }
    console.log(this.options);
    
  },
  data() {
    return {
      value: '',
      options: [],
      formData: {
        pageIndex: 1,
        pageSize: 100,
      },
      userItems:[]
    };
  },
  mounted() {
    this.getUsers(this.formData);
  },
  methods: {
   loadmore() {
      this.formData.pageIndex++;
      this.getUsers(this.formData);
    },
 
 getUsers(v) {
     console.log(v);
     
      let num = ~~this.formData.pageIndex * ~~this.formData.pageSize;
      this.userItems = this.options.filter((item, index) => {
        return index < num;
      });
    },
  }
};
 </script>
