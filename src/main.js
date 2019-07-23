import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import fastClick from 'fastclick'

fastClick.attach(document.body)

import '@/assets/style/normalize.css';
// import 'vant/lib/index.css';

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
