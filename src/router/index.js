import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import playground from '@/components/playground'
import teacher from '@/components/teacher'
import largeSite from '@/components/largeSite'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/playground',
      name: 'playground',
      component: playground
    },
    {
      path: '/teacher',
      name: 'teacher',
      component: teacher
    },
    {
      path: '/largeSite',
      name: 'largeSite',
      component: largeSite
    }
  ]
})
