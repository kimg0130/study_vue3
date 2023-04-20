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
        path: "/lifeCycle",
        name: "lifeCycle",
        component: () => import(/* webpackChunkName: "basic" */ '@/views/basic/LifeCycle.vue'),
      },
      {
        path: "/piniaTest",
        name: "piniaTest",
        component: () => import(/* webpackChunkName: "basic" */ '@/views/basic/PiniaTest.vue'),
      },
      {
        path: "/twoWayBinding",
        name: "twoWayBinding",
        component: () => import(/* webpackChunkName: "basic" */ '@/views/basic/TwoWayBinding.vue'),
      },
    ],
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
