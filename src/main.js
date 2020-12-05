import Vue from 'vue'
import App from './App.vue'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import VueRouter from 'vue-router'
import vSelect from "vue-select";
import { DropDownListPlugin } from "@syncfusion/ej2-vue-dropdowns";
Vue.use(DropDownListPlugin);


Vue.component("v-select", vSelect);

Vue.use(VueRouter)
Vue.use(Buefy)


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
