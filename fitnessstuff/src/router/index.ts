import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Overview",
      meta: { securedRoute: true },
      component: () => import("../views/ExcerciseOverview.vue"),
    },
    {
      path: "/exercise/:id",
      name: "ExercisePage",
      meta: { securedRoute: true },
      component: () => import("../views/ExcercisePage.vue"),
    },
    {
      path: "/cookie-og-privatlivspolitik/",
      name: "CookiePage",
      meta: { securedRoute: true },
      component: () => import("../views/CookiePage.vue"),
    }
  ],
  linkActiveClass: "active",
});
export default router;
