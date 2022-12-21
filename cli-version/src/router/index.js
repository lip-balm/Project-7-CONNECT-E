import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import store from '../store'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/forum',
    name: 'forum',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/ForumView.vue'),  
  },
  {
    path: '/profile',
    name: 'profile',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/ProfileView.vue'),
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

// original
// router.beforeEach((to, from, next) => {
//   console.log('router token check', store.state);
//   if ((to.name !== 'home' && !store.state.token)) {
//       next('/');
//   }
//   else next()
// });

// test
router.beforeEach((to, from, next) => {
  console.log('router token check', store.state);
  if ((to.name !== 'home' && !store.state.token)) {
      next('/');
  }
  else next()
});

export default router
