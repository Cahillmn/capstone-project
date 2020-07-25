import Vue from 'vue'
import VueRouter from 'vue-router'
import breed from '@/views/breed'
import CubeSpinner from '@/components/CubeSpinner'
Vue.use(VueRouter)
  const routes = [
  {
    path: '/',
    name: 'breed',
    component: breed
  },
  
  {
     path: '/:url/Fido',
    name: 'CubeSpinner',
    component: CubeSpinner
  }
]
const router = new VueRouter({
  routes
})
export default router