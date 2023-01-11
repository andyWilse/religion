import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [
  // 首页
  {
    path: '/',
    name: 'userHome',
    component: () => import('@/views/Home/userHome')
  },
  // 待定
  {
    path: '/home',
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
  // 监控-截图
  {
    path: "/monitor/video",
    name: 'MonitorVideo',
    component: () => import('@/views/Monitor/video')
  },
  // 监控-截图
  {
    path: "/monitor/screenshot",
    name: 'MonitorScreenshot',
    component: () => import('@/views/Monitor/Screenshot')
  },
  // 监控-录屏
  {
    path: "/monitor/recordrtc",
    name: 'MonitorRecordrtc',
    component: () => import('@/views/Monitor/Recordrtc')
  },
  // 监控
  {
    path: "/monitor",
    name: 'Monitor',
    component: () => import('@/views/Monitor/Index')
  },
  // 监控-搜索
  {
    path: "/monitor/search",
    name: 'Search',
    component: () => import('@/views/Monitor/Search')
  },
  // 监控-保修
  {
    path: "/alerts",
    name: 'Alerts',
    component: () => import('@/views/Alerts/Alerts')
  },
  // 监控-查看
  {
    path: "/alerts/see",
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

]

const router = new VueRouter({
  routes
})

export default router
