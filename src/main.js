import './less/index.less'
import Vue from 'vue'
import App from './App.vue'
import router from './router.js';
import store from './store.js';
import _ from 'lodash';
import moment from 'moment';
import flag from './flag'

if(flag.isDev()){
  window._ = _;
  window.moment = moment;
}

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app');