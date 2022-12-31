import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [
  // 首页
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/Home/Home')
  },

  //  预警上报
  {
    path: '/reporting',
    name: 'Reporting',
    component: () => import('@/views/Reporting/Reporting')
  },
  // 场所地图 Venue
  {
    path: '/themap',
    name: 'Themap',
    component: () => import('@/views/Themap/Themap.vue')
  },
  // 监控预警
  {
    path: "/alerts",
    name: 'Alerts',
    component: () => import('@/views/Alerts/Alerts')
  },
  //  我的 
  {
    path: "/ltsmine",
    name: "ItsMine",
    component: () => import('@/views/ItsMine/ItsMine')
  },
  // 火灾预警页面
  {
    path: "/fire",
    name: "Fire",
    component: () => import('@/views/Fire/Fire')
  },
  //巡查上报
  {
    path: '/patrol',
    name: 'Patrol',
    component: () => import('@/views/Patrol/Patrol')
  }
]

const router = new VueRouter({
  routes
})

export default router
