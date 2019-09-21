import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import Header from './components/Header'
import Footer from './components/Footer'

Vue.config.productionTip = false

//配置页头 页尾
Vue.component("my-header",Header);
Vue.component("my-footer",Footer);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
