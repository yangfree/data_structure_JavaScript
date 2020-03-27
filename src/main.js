import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import $http from '@/api/axios';

import 'normalize.css';
import '@/common/style/common.less';
import '@/common/style/transition.less';
import '@/common/iconFonts/iconfont.css';

Vue.config.productionTip = false

new Vue({
  $http,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
