import Vue from 'vue'
import App from './App.vue'
// import spyUi from "./spy-ui";
Vue.config.productionTip = false
import compents from "./compents";
// Vue.use(spyUi)
// Vue.use(compents)
console.log(Vue.config);
window.Vue = Vue
new Vue({
  render: h => h(App),
}).$mount('#app')
