import Vue from 'vue'
import Router from 'vue-router'
import indexlayer from '@/components/index/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'indexlayer',
      component: indexlayer,
      redirect: 'index',
      children: [
        {
          path: 'index',
          component: () => import('@/pages/index/index')
        },
        {
          path: 'searcher',
          component: () => import('@/pages/index/search/index')
        },
        {
          path: 'bill',
          component: () => import('@/pages/bill/index')
        },
        {
          path: 'my',
          component: () => import('@/pages/my/index')
        }
      ]
    }
  ]
})
