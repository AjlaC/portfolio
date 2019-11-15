import Vue from "vue";
import Router from "vue-router";

import Main from "../components/Main.vue";
import About from "../components/About.vue";

import Portfolio from "../components/Portfolio.vue";
import Shareit from "../components/Share-it.vue";
import StatusTable from "../components/Statustable.vue";
import EasyCube from "../components/Easycube.vue";
import Cybersketch from "../components/Cybersketch.vue";
import Muffin from "../components/Muffin.vue";

import Contact from "../components/Contact.vue";
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
      path: "/about",
      component: About
    },
    {
      path: "/portfolio",
      component: Portfolio
    },
    {
      path: "/portfolio/share-it",
      component: Shareit
    },
    {
      path: "/portfolio/muffin-or-chihuahua",
      component: Muffin
    },
    {
      path: "/portfolio/tork-easycube",
      component: EasyCube
    },
    {
      path: "/portfolio/cybersketch",
      component: Cybersketch
    },
    {
      path: "/portfolio/statustable",
      component: StatusTable
    },
    {
      path: "/portfolio/formloupe",
      component: Shareit
    },
    {
      path: "/contact",
      component: Contact
    }
  ]
});

export default router;
