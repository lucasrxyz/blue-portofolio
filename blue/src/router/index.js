import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: { title: 'Accueil' }
  },
  {
    path: '/about',
    name: 'about',
    component: function () {
      return import('@/views/AboutView.vue')
    },
    meta: { title: 'A propos' }
  },
  {
    path: '/projects',
    name: 'projects',
    component: function () {
      return import('@/views/ProjectsView.vue')
    },
    meta: { title: 'Projets' }
  },
  {
    path: '/contact',
    name: 'contact',
    component: function () {
      return import('@/views/ContactView.vue')
    },
    meta: { title: 'Contact' }
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: function () {
      return import('@/views/NotFoundView.vue')
    },
    meta: { title: 'Page introuvable' }
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior: function (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }
    return { top: 0, behavior: 'smooth' }
  }
})

router.afterEach(function (to) {
  const title = to.meta.title
  document.title = title
    ? 'Lucas Deudon | ' + title
    : 'Lucas Deudon | D&eacute;veloppeur Full-Stack'
})

export default router
