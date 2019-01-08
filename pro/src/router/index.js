import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home'
import Kantu from '@/components/Kantu'
import Zhuangxiu from '@/components/Zhuangxiu'
import Shop from '@/components/Shop'
import My from '@/components/My'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      redirect: '/home',
      component: HelloWorld,
      children: [
        {
          path: '/home',
          component: Home
        },
        {
          path: '/kantu',
          component: Kantu
        },
        {
          path: '/zhuangxiu',
          component: Zhuangxiu
        },
        {
          path: '/shop',
          component: Shop
        }
      ]
    },
    {
      path: '/my',
      component: My
    }
  ]
})
