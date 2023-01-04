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

  //  政策宣传详情
  {
    path: '/Article/Info',
    name: 'ArticleInfo',
    component: () => import('@/views/Article/Info')
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
  // 监控
  {
    path: "/alerts",
    name: 'Alerts',
    component: () => import('@/views/Alerts/Alerts')
  },
  // 监控-查看
  {
    path: "/alerts/See",
    name: 'AlertsSee',
    component: () => import('@/views/Alerts/See')
  },
  //  我的 
  {
    path: "/ltsmine",
    name: "ItsMine",
    component: () => import('@/views/ItsMine/ItsMine')
  },
  //  任务-处理 
  {
    path: "/ltsmine/handle",
    name: "handle",
    component: () => import('@/views/ItsMine/handle')
  },

  //  任务-发起
  {
    path: "/ltsmine/launch",
    name: "launch",
    component: () => import('@/views/ItsMine/launch')
  },
  // 预警处理
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
