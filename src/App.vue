<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
// import storage from './storage/index.js'
export default {
  name:'app',
  components:{

  },
  data(){
    return{
    }
  },
  mounted(){
    this.getUser();
    this.getCartCount();
  },
  methods:{
    getUser(){
      this.axios.get('/user').then(()=>{

      })
    },
    getCartCount(){
      this.axios.get('/carts/products/sum').then(()=>{
        
      })
    }
  }
  
}
</script>
<style lang="scss">
    @import './assets/scss/reset.scss';
    @import './assets/scss/config.scss';
    @import './assets/scss/button.scss';
</style>
