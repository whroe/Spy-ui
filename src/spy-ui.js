import spyDialog from "./components/spy-dialog";
import locale from "./components/locale";
const components = [
    spyDialog
]

const install = function(Vue, opts = {}) {
    locale.use(opts.locale);
    locale.i18n(opts.i18n);
  
    components.forEach(component => {
      Vue.component(component.name, component);
    });
  
    // Vue.use(InfiniteScroll);
    // Vue.use(Loading.directive);
  
    Vue.prototype.$ELEMENT = {
      size: opts.size || '',
      zIndex: opts.zIndex || 2000
    };
  
    // Vue.prototype.$loading = Loading.service;
    // Vue.prototype.$msgbox = MessageBox;
    // Vue.prototype.$alert = MessageBox.alert;
    // Vue.prototype.$confirm = MessageBox.confirm;
    // Vue.prototype.$prompt = MessageBox.prompt;
    // Vue.prototype.$notify = Notification;
    // Vue.prototype.$message = Message;
  
  };

  if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
  }
  export default{
    version: '2.13.0',
    locale: locale.use,
    i18n: locale.i18n,
    install,
    spyDialog
  }
  