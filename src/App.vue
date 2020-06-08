<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import storage from './storage/index.js'
export default {
  name:'app',
  components:{

  },
  data(){
    return{
    }
  },
  mounted(){
    // storage.setItem('a',1,'user')
    // storage.clear('a','user');
    console.log(storage.getItem('user'));
  },
  
}
</script>
<style lang="scss">
    @import './assets/scss/reset.scss';
    @import './assets/scss/config.scss';
    @import './assets/scss/button.scss';
</style>
