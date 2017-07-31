import Vue from 'vue';
import Vuex from 'vuex';
import lang from 'element-ui/lib/locale/lang/en';
import locale from 'element-ui/lib/locale';
import 'element-ui/lib/theme-default/index.css';

import storeInfo from '@/store/index';
import App from '@/App';
import router from '@/router';

// Assets.
import '@/assets/styles/app.scss';

locale.use(lang);
Vue.use(Vuex);

Vue.config.productionTip = false;

const store = new Vuex.Store(storeInfo);

store.dispatch('bootstrap');

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
  store,
});
