import Vue from 'vue'
import Router from 'vue-router'
import Permanent from '@/components/Permanent'
import Twinkling from '@/components/Twinkling'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Permanent',
      component: Permanent
    },
    {
      path: '/twinkling/:id',
      name: 'Twinkling',
      component: Twinkling,
      props: true
    }
  ]
})
