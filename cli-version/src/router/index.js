import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import store from '../store'
const token = store.getters.getToken;

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    // meta: {
    //   requiresAuth: false
    // }
  },
  {
    path: '/forum',
    name: 'forum',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/ForumView.vue'),  

    // beforeEach: (to, from, next) => { 
    //   if (!token) {
    //     return { name: 'home'};
    //   } next ()
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

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  console.log('router token check', store.getters.getToken);
  if (to.name !== 'home' & !token) {
      next('/');
  }
  else next()
});


export default router
