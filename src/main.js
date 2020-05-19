import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import env from './env'

// axios.defaults.baseURL='/api'; //跨域方式为代理的时候用这种方法 不然则要写全域名
axios.defaults.timeout=8000;
axios.defaults.baseURL=env.baseURL;
console.log(process.env.NODE_ENV)

//接口错误拦截
axios.interceptors.response.use(function(response){
  let res=response.data;
  if(res.status==0){
    return res.data;
  }else if(res.status==10){
    router.push('/#/login');
  }else{
    alert(res.mg)
  }
})
Vue.use(VueAxios,axios)
Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
