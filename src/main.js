import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueGtag from "vue-gtag"

Vue.use(VueGtag, {
  config: { id: 'UA-176086324-1'}}
,router); 


new Vue({
  router,
  render: h => h(App)
}).$mount("#app");



