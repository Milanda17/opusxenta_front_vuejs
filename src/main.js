import Vue from 'vue'
import App from './App.vue'
import Router from "./routes";
import {Vuelidate} from 'vuelidate';
import VueResource from 'vue-resource';


Vue.config.productionTip = false
Vue.use(VueResource)
Vue.use(Vuelidate)


new Vue({
  render: h => h(App),
  router:Router
}).$mount('#app')
