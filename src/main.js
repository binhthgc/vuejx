import Vue from 'vue'
import Vuetify from 'vuetify'
import App from './App'
import router from './router'
import 'font-awesome/css/font-awesome.css'

Vue.use(Vuetify)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
