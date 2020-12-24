import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      path: '/home',
      component: Home
    },
    {
      path: '/sort',
      component: () => import('@/views/sort/Sort')
    },
    {
      path: '/shop',
      component: () => import('@/views/shop/Shop')
    },
    {
      path: '/profile',
      component: () => import('@/views/profile/Profile')
    }
  ]
})

export default router
