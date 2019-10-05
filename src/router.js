import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Drugs from "./views/Drugs.vue";



Vue.use(Router);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/drugs",
    name: "drugs",
    component: Drugs
  }
];

const router = new Router({
  routes,
  scrollBehavior: function (to) {
    if (to.hash) {
      return {
        selector: to.hash
      }
    }
    else{
      return { x: 0, y: 0, };
    }
  } 
});

export default router;