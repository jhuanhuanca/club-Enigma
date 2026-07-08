import { createRouter, createWebHistory } from 'vue-router'
import { buildSubRoutes } from '../config/navLinks'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(),
  scrollBehavior() {
    return { top: 0 }
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/habitaciones-privadas',
      redirect: '/habitaciones-privadas/habitacion-privada',
    },
    {
      path: '/habitaciones-privadas/habitacion-privada',
      name: 'habitacion-privada',
      component: () => import('../views/HabitacionPrivadaView.vue'),
    },
    {
      path: '/habitaciones-privadas/ocasiones',
      name: 'habitaciones-ocasiones',
      component: () => import('../views/OcasionesView.vue'),
    },
    {
      path: '/habitaciones-privadas/recorrido-3d',
      name: 'habitaciones-recorrido',
      component: () => import('../views/Recorrido3dView.vue'),
    },
    {
      path: '/servicios-comidas-y-botellas',
      name: 'servicios-comidas-y-botellas',
      component: () => import('../views/ServiciosComidasView.vue'),
    },
    {
      path: '/servicios-comidas-y-botellas/menu-restaurante',
      name: 'servicios-menu',
      component: () => import('../views/MenuRestauranteView.vue'),
    },
    {
      path: '/servicios-comidas-y-botellas/licores-y-bebidas',
      name: 'servicios-licores',
      component: () => import('../views/LicoresBebidasView.vue'),
    },
    {
      path: '/servicios-comidas-y-botellas/ofertas-principiantes',
      name: 'servicios-ofertas-principiantes',
      component: () => import('../views/OfertasPrincipiantesView.vue'),
    },
    {
      path: '/confirmar-asistencia',
      name: 'confirmar-asistencia',
      component: () => import('../views/ConfirmarAsistenciaView.vue'),
    },
    {
      path: '/sobre-nosotros',
      name: 'sobre-nosotros',
      component: () => import('../views/SobreNosotrosView.vue'),
    },
    {
      path: '/contactanos',
      name: 'contactanos',
      component: () => import('../views/ContactanosView.vue'),
    },
    {
      path: '/blogs',
      name: 'blogs',
      component: () => import('../views/BlogsView.vue'),
    },
    {
      path: '/reserva-ahora',
      name: 'reserva-ahora',
      component: () => import('../views/ReservaAhoraView.vue'),
    },
    ...buildSubRoutes(),
  ],
})

export default router
