import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '../layout'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Layout,
    redirect: "/home",
    children: [{
      path: '/home',
      name: 'Home',
      component: () => import(/* webpackChunkName: "about" */ '../views/Home.vue')
    }, {
      path: '/category',
      name: 'Category',
      component: () => import(/* webpackChunkName: "about" */ '../views/category/index.vue')
    }, {
      path: '/record',
      name: 'Record',
      component: () => import(/* webpackChunkName: "about" */ '../views/record/index.vue')
    }, {
      path: '/tagboard',
      name: 'Tagboard',
      component: () => import(/* webpackChunkName: "about" */ '../views/tagboard/index.vue')
    }]
  },
]

const router = new VueRouter({
  mode: "history",
  routes
})

export default router
