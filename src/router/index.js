import { createRouter, createWebHistory } from 'vue-router'
import PassengerListView from '../views/PassengerListView.vue'
import AboutView from '../views/AboutView.vue'
import PassengerDetail from '../views/PassengerDetailView.vue'
import PassengerLayout from '../views/PassengerLayout.vue'
import AirlineDetail from '../views/AirlineDetailView.vue'
import NotFound from '../views/NotFoundView.vue'
import NetworkError from '../views/NetworkErrorView.vue'
const routes = [
  {
    path: '/',
    name: 'PassengerList',
    component: PassengerListView,
    props: (route) => ({
      page: parseInt(route.query.page) || 1
    })
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/passenger/:id',
    name: 'PassengerLayout',
    component: PassengerLayout,
    children: [
      {
        path: '',
        name: 'PassengerDetail',
        component: PassengerDetail,
        props: true
      },
      {
        path: 'airline',
        name: 'AirlineDetail',
        component: AirlineDetail,
        props: true
      }
    ],
    props: true
  },
  {
    path: '/404/:resource',
    name: '404Resource',
    component: NotFound,
    props: true
  },
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: NotFound
  },
  {
    path: '/network-error',
    name: 'NetworkError',
    component: NetworkError
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
