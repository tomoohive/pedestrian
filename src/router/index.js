import Vue from 'vue'
import Router from 'vue-router'
import Permanent from '@/components/Permanent'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Permanent',
      component: Permanent
    }
  ]
})
