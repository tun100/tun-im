import './less/index.less'
import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import Vuex from 'vuex';
import routes from './router.js';

Vue.use(Vuex);
Vue.config.productionTip = false

const router = new VueRouter({
  routes 
});

new Vue({
  render: h => h(App),
  router,
}).$mount('#app');