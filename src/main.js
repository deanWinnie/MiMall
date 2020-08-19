import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueLazyLoad from 'vue-lazyload'
import VueCookie from 'vue-cookie'
import { Message } from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// import env from './env'

axios.defaults.baseURL='/api'; //跨域方式为代理的时候用这种方法 不然则要写全域名
axios.defaults.timeout=8000;
// axios.defaults.baseURL=env.baseURL;
console.log(process.env.NODE_ENV)

//接口错误拦截
axios.interceptors.response.use(function(response){
  let res=response.data;
  let path=location.hash;
  if(res.status==0){
    return res.data;
  }else if(res.status==10){
    if(path !='#/index'){
      window.location.href='/#/login';
    }
    return Promise.reject();
  }else{
    Message.warning(res.msg)
    return Promise.reject();
  }
},(error)=>{
  let res=error.response;
  Message.error(res.data.message);
  return Promise.reject(error);
});
Vue.use(VueAxios,axios)
Vue.use(VueCookie)
Vue.prototype.$message = Message
Vue.use(VueLazyLoad,{
  loading:'/imgs/loading-svg/loading-bars.svg'
})
Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
