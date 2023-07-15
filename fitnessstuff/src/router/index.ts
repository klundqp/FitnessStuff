import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Overview",
      meta: { securedRoute: true },
      component: () => import("../Views/ExcerciseOverview.vue"),
    },
    {
      path: "/exercise/:id",
      name: "ExercisePage",
      meta: { securedRoute: true },
      component: () => import("../Views/ExcercisePage.vue"),
    }
  ],
  linkActiveClass: "active",
});
export default router;
