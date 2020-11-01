import Vue from 'vue'
import App from './App.vue'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import VueTimers from 'vue-timers'



Vue.use(Buefy)
Vue.use(VueTimers)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
