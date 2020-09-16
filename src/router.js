import Vue from "vue";
import Router from 'vue-router'
// const routerCompent = require.context('../src', true, /\.vue$/)
// console.log(routerCompent.keys());
// var arr = routerCompent.keys().map(item=>{
//     if(item.indexOf('./components'))
//     return {component:()=> import(item)}
// })  
// console.log(arr);
// var obj = [{path:'/',name:'首页'},{path:'/dialog',name:'dialog组件'},{path:'/calendar',name:'日历'},{path:'/input',name:'输入框'},{path:'/loadmore',name:'select懒加载'}]
Vue.use(Router)
const router = new Router({
    mode:'hash',
    routes:[{
        path:'/',
        name:'首页',
        component:() => import('./components/index.vue'),
        // redirect:'/'
    },{
        path:'/dialog',
        name:'dialog组件',
        component:() => import('./components/spy-dialog.vue'),
    },{
        path:'/calendar',
        name:"日历",
        component:() => import('./components/spy-calendar.vue')
    },{
        path:'/input',
        name:'输入框',
        component:() => import('./components/spy-input.vue')
    },{
        path:'/loadmore',
        name:'select懒加载',
        component:() => import('./components/spy-loadmore.vue')
    },{
        path:'/tree',
        name:'tree',
        component:() => import('./views/tree/index.vue')
    }]
})

export default router
