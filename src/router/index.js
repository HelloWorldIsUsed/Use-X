import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import XleftNavCon from '@/components/XleftNavCon'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/leftNav',
      name: 'XleftNavCon',
      component: XleftNavCon
    }
  ]
})
