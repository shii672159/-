import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home'
import Kantu from '@/components/Kantu'
import Zhuangxiu from '@/components/Zhuangxiu'
import Shop from '@/components/Shop'
import My from '@/components/My'
import My1 from '@/components/My1'
import Shequ from '@/components/Shequ'
import Shejishi from '@/components/Shejishi'
import Zhuanti from '@/components/Zhuanti'
import Huati from '@/components/Huati'
import Zhongcao from '@/components/Zhongcao'
import Wenzhang from '@/components/Wenzhang'
import Yindaoye from '@/components/Yindaoye'
import Zhuce from '@/components/zhuce'
import Shezhimima from '@/components/shezhimima'


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
      redirect: '/my1',
      component: My,
      children: [
        {
          path: '/my1',
          component: My1
        }
      ]
    },
    {
      path: '/shequ',
      redirect: '/zhongcao',
      component: Shequ,
      children: [
        {
          path: '/zhongcao',
          component: Zhongcao
        },
        {
          path: '/wenzhang',
          component: Wenzhang
        }
      ]
    },
    {
      path: '/shejishi',
      component: Shejishi,
    },
    {
      path: '/zhuanti',
      component: Zhuanti,
    },
    {
      path: '/huati',
      component: Huati,
    },
    {
      path:'/Yindaoye',
      component:Yindaoye
    },
    {
      path:'/zhuce',
      component:Zhuce
     },
    {
      path:'/shezhimima',
      component:Shezhimima
    },
  ]
})
