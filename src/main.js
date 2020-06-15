import Vue from 'vue'
import App from './App.vue'
// import spyUi from "./spy-ui";
Vue.config.productionTip = false
import compents from "./compents";
import "./components/styles/home.scss";
// Vue.use(spyUi)
console.log(compents);
import router from "./router";
// Vue.use(compents)
console.log(Vue.config);
window.Vue = Vue
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
