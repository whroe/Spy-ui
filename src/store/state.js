import router from '../router'
console.log(router);
export default {
    keepList: [],
    menuList: router.options.routes.map(item=>{
        return {name:item.name,url:item.path}
    }),
  }
  