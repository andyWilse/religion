import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vant from 'vant';
import 'vant/lib/index.css';
import VueAMap from 'vue-amap'
import '@/style/index.css'

Vue.use(Vant)
Vue.use(VueAMap)

import { Toast , ImagePreview } from "vant";
Vue.use(Toast); 

Vue.prototype.$ImagePreview = ImagePreview

// import Utils from '@/utils/utils';
// Vue.use(Utils)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
