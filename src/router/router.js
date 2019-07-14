import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'index',
      component: () => import('../views/index/index')
    },
    {
      path: '/search',
      name: 'search',
      component: () => import('../views/index/search')
    },
    {
      path: '/detail',
      name: 'detail',
      component: () => import('../views/index/detail')
    }
  ]
})
