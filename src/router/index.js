import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/pages/Home';
import People from '@/components/pages/People';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/home',
      redirect: '/',
    },
    {
      path: '/people',
      name: 'people',
      component: People,
    },
  ],
});
