import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home'
import Body from '@/components/Body'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    // 将任意路径重定向至'/home'
    {
      path: '*',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
      children: [
        {
          path: 'body',
          component: Body
        }
      ]
    }
  ]
})
