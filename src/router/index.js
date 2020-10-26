import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/views/login/Login'
import Home from '@/views/Home.vue'
// import User from '@/views/user/index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    children: [
      {
        path: '',
        name: 'list',
        component: () => import('../views/content/Content.vue')
      }
    ]
  },
  {
    path: '/user',
    name: 'user',
    component: Home,
    children: [
      {
        path: 'list',
        name: 'list',
        component: () => import('../views/user/index.vue')
      },
      {
        path: 'addUser',
        name: 'list',
        component: () => import('../views/user/addUser.vue')
      },
      {
        path: 'updateUser',
        name: 'list',
        component: () => import('../views/user/updateUser.vue')
      },
      {
        path: 'auth',
        name: 'auth',
        component: () => import('../views/user/auth.vue')
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

// 全局导航守卫，验证是否登录

router.beforeEach((to, from, next) => {
  const user = sessionStorage.getItem('user')
  if (to.name !== 'Login') {
    if (!user) {
      next({ name: 'Login' })
    } else {
      next()
    }
  } else {
    if (user) {
      sessionStorage.removeItem('user')
    }
    next()
  }
})

export default router
