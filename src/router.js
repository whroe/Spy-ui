import Vue from "vue";
import Router from 'vue-router'

Vue.use(Router)
const router = new Router({
    mode:'hash',
    base: process.env.BASE_URL,
    routes:[{
        path:'/',
        name:'首页',
        component:() => import('./components/spy-input.vue'),
        // redirect:'/'
    },{
        path:'/dialog',
        name:'dialog组件',
        component:() => import('./components/spy-dialog.vue'),
    }]
})

export default router
