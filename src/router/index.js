import { createRouter, createWebHistory } from "vue-router";
import About from "../pages/About";
import Home from "../pages/Home";

// ||| In Vue.js, routes are defined as an array of objects
const routes = [
     {
          path: "/about",
          name: "About",
          component: About,
     },
     {
          path: "/",
          name: "Home",
          component: Home,
     },
];

const router = createRouter({
     history: createWebHistory(process.env.BASE_URL),
     routes,
});

export default router;
