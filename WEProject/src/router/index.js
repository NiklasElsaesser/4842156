import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import unregViewVue from "../views/unregView.vue";
import RegisterViewVue from "../views/RegisterView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/2",
      name: "home",
      component: HomeView,
    }
    ,{
      path: "/",
      name: "unreg",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/unregView.vue"),
    }
    ,{
      path: "/register",
      name: "Register",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/RegisterView.vue"),
    }
    ,{
      path: "/Wetter",
      name: "Wetter",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/WetterView.vue"),
    }
    ,{
      path: "/GC",
      name: "Group Chat",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/GCView.vue"),
    },
    {
      path: "/test",
      name: "test",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/testView.vue"),
    },
    {
      path: "/js2",
      name: "JS2",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/JS2View.vue"),
    },
    {
      path: "/terms",
      name: "Terms and Conditions",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/termsView.vue"),
    },
    {
      path: "/login",
      name: "Login",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/loginView.vue"),
    }
  ],
});

export default router;
