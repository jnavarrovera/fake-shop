import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import haveAuthGuard from "./authGuard";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: () =>
      import(/* webpackChunkName: "home" */ "../views/HomeView.vue"),
  },
  {
    path: "/products",
    name: "products",
    beforeEnter: [haveAuthGuard],
    component: () =>
      import(
        /* webpackChunkName: "products" */ "../views/ProductsListView.vue"
      ),
  },
  {
    path: "/products/:id",
    name: "product-detail",
    beforeEnter: [haveAuthGuard],
    component: () =>
      import(
        /* webpackChunkName: "product-detail" */ "../views/ProductDetailView.vue"
      ),
    props: (route) => {
      const id = route.params.id;
      return { id };
    },
  },
  {
    path: "/profile",
    name: "profile",
    beforeEnter: [haveAuthGuard],
    component: () =>
      import(/* webpackChunkName: "profile" */ "../views/ProfileView.vue"),
  },
  {
    path: "/login",
    name: "login",
    component: () =>
      import(/* webpackChunkName: "login" */ "../views/LoginView.vue"),
  },
  {
    path: "/:pathMatch(.*)",
    name: 'notFound',
    component: import(/*webpackChunkName: "notFound"*/ "../views/NotFound.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
