// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue'),
      },
      {
        path: "/basic",
        name: "basic",
        component: () => import(/* webpackChunkName: "basic" */ '@/views/basic/Basic.vue'),
      },
      {
        path: "/menu2",
        name: "menu2",
        component: () => import(/* webpackChunkName: "basic" */ '@/views/basic/Menu2.vue'),
      },
    ],
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
