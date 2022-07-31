import { createRouter, createWebHistory } from 'vue-router'
import EventListView from '../views/EventListView.vue'
import AboutView from '../views/AboutView.vue'
import EventDetails from '../views/event/EventDetailView.vue'
import EventRegister from '../views/event/EventRegisterView.vue'
import EventEdit from '../views/event/EventEditView.vue'
import EventLayout from '../views/event/EventLayoutView.vue'
import NotFound from '../views/NotFoundView.vue'
import NetworkError from '../views/NetworkErrorView.vue'
const routes = [
  {
    path: '/',
    name: 'EventList',
    component: EventListView,
    props: (route) => ({
      page: parseInt(route.query.page) || 1,
      perPage: parseInt(route.query.perPage) || 2
    })
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/events/:id',
    name: 'EventLayout',
    component: EventLayout,
    children: [
      {
        path: '',
        name: 'EventDetails',
        component: EventDetails,
        props: true
      },
      {
        path: 'register',
        name: 'EventRegister',
        component: EventRegister,
        props: true
      },
      {
        path: 'edit',
        name: 'EventEdit',
        component: EventEdit,
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
