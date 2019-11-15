import Vue from "vue";
import Router from "vue-router";

import Main from "../components/Main.vue";
import Test from "../components/Test.vue";
import Shareit from "../components/Share-it.vue";
import Portfolio from "../components/Portfolio.vue";

Vue.use(Router);

let router = new Router({
  mode: "history",
  routes: [
    {
      path: "",
      component: Main
    },
    {
      path: "*",
      component: Main
    },
    {
      path: "/test",
      component: Test
    },
    {
      path: "/portfolio",
      component: Portfolio
    },
    {
      path: "/share-it",
      component: Shareit
    },
    {
      path: "/portfolio/share-it",
      component: Shareit
    },
    {
      path: "/portfolio/muffin",
      component: Shareit
    },
    {
      path: "/portfolio/easycube",
      component: Shareit
    },
    {
      path: "/portfolio/cybersketch",
      component: Shareit
    },
    {
      path: "/portfolio/statustable",
      component: Shareit
    },
    {
      path: "/portfolio/formloupe",
      component: Shareit
    }
  ]
});

export default router;
