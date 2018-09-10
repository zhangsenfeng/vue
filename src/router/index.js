import Vue from 'vue'
import Router from 'vue-router'

// 脚手架自带欢迎页
import HelloWorld from '@/common/HelloWorld'
// 主页
import Home from '@/common/Home'
// 内容页
import Main from '@/common/Main'
// 目录
import Catalog from '@/common/Catalog'

// 日期控件
import Calendar from '@/components/Calendar'

Vue.use(Router)

export default new Router({
  routes: [
    // 手脚架自带欢迎页
    {
      path: '/welcome',
      name: 'helloWorld',
      component: HelloWorld
    },
    // 将任意路径重定向至'/home'
    {
      path: '*',
      redirect: '/home'
    },
    // 主页
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    // 重定向到'/home'
    {
      path: '/',
      redirect: '/home'
    },
    // 内容页
    {
      path: '/',
      name: 'main',
      component: Main,
      children: [
        // 目录
        {
          path: 'catalog',
          name: 'catalog',
          component: Catalog
        },
        // 日期控件
        {
          path: '/calendar',
          name: 'calendar',
          component: Calendar
        }
      ]
    }
  ]
})
