import Vue from 'vue'
import VueRouter from 'vue-router'
import Fido from '@/views/Fido'
import CubeSpinner from '@/components/CubeSpinner'
Vue.use(VueRouter)
  const routes = [
  {
    path: '/',
    name: 'Breeds',
    component: Fido
  },
  
  {
    path: '/:url/house',
    name: 'CubeSpinner',
    component: CubeSpinner
  }
]
const router = new VueRouter({
  routes
})
export default router