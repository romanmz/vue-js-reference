import Vue from 'vue'
import Router from 'vue-router'
import Basics from '@/components/Basics'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Vue.js Basics',
      component: Basics
    }
  ]
})
