import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vant from 'vant';
import 'vant/lib/index.css';
import VueAMap from 'vue-amap'
import '@/style/index.css'
Vue.use(Vant)
Vue.use(VueAMap)

// // 引入高德api 
// VueAMap.initAMapApiLoader({
//   key: '021090ed7f49fe6a940aaef5b0fbedb6',// 高德的key
//   // 插件集合
//   plugin: [
//     'AMap.CircleEditor',// 圆形编辑器插件
//     "AMap.Geolocation", // 定位控件，用来获取和展示用户主机所在的经纬度位置
//     "AMap.Geocoder", // 地理编码与逆地理编码服务，用于地址描述与坐标间的相互转换
//     "AMap.Autocomplete",
//     "AMap.PlaceSearch",
//     "AMap.CitySearch",
//     "AMap.AutoComplete",
//     "AMap.Geocoder",
//     "AMap.Scale",
//     "AMap.OverView",
//     "AMap.ToolBar",
//     "AMap.MapType",
//     "AMap.PolyEditor",
//     "AMap.CircleEditor",
//   ],
//   // 高德 sdk 版本，默认为 1.4.4
// v: '1.4.4'
// }),
//   //高德的安全密钥
// window._AMapSecurityConfig = {
//   securityJsCode: 'eaff27aa124cfae67ff0d2f7493f2bb6',
// }
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
