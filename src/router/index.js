import Vue from 'vue';
import Router from 'vue-router';

import Main from '../components/Main.vue';
import Test from '../components/Test.vue';
import Shareit from '../components/Share-it.vue';

Vue.use(Router);

let router = new Router({
  mode: 'history',
  routes: [{
      path: '',
      component: Main
    },
    {
      path: '*',
      component: Main
    },
    {
      path: '/test',
      component: Test
    },
    {
      path: '/share-it',
      component: Shareit
    }
  ]
});

export default router;