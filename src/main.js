import Vue from 'vue';
import BootstrapVue from "bootstrap-vue";
import App from './App.vue';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import router from './router';
import LightTimeline from 'vue-light-timeline';
import VModal from 'vue-js-modal';

Vue.use(VModal, { dialog: true })

Vue.use(LightTimeline);

Vue.use(BootstrapVue);

Vue.config.productionTip = false;

new Vue({
  el: '#app',
  template: '<App/>',
  components: {
    App
  },
  router
});