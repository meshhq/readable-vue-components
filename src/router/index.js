import Vue from 'vue'
import Router from 'vue-router'
import Checklist from '@/components/Checklist/Checklist'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Checklist',
      component: Checklist
    }
  ]
})
