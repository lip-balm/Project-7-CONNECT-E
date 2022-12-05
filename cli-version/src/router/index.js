import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/forum',
    name: 'forum',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/ForumView.vue'),
    // meta: {
    //   requiresAuth: true
    // }
  },
  {
    path: '/profile',
    name: 'profile',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/ProfileView.vue'),
    // meta: {
    //   requiresAuth: true
    // }
  }
]

// router.beforeEach((to, from, next) => {
//   if (to.name === 'home') {
//     next() // login route is always  okay (we could use the requires auth flag below). prevent a redirect loop
//   } else if (to.meta && to.meta.requiresAuth === false) {
//     next() // requires auth is explicitly set to false
//   } else if (store.getters.isLoggedIn) {
//     next() // i'm logged in. carry on
//   } else {
//     next({ name: 'home' }) // always put your redirect as the default case
//   }
// })

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
