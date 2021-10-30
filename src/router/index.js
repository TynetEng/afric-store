import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Phone from '../views/Phone.vue'
import Elect from '../views/Elect.vue'
import Laptop from '../views/Laptop.vue'
import Product from '../views/Product.vue'
import Cart from '../views/Cart.vue'
import CheckOut from '../views/CheckOut.vue'
import NotFound from '../views/NotFound.vue'

const routes = [
  {path:"/", name:Home, component:Home},
  {path:"/phone", name:Phone, component:Phone},
  {path:"/elect", name:Elect, component:Elect},
  {path:"/phone/:id", name:Product, component:Product, props: true},
  {path:"/laptop/:id", name:Product, component:Product, props: true},
  {path:"/cart/:id", name:Cart, component:Cart},
  {path:"/check_out/:id", name:CheckOut, component: CheckOut},
  {path:"/laptop", name:Laptop, component:Laptop},
  {path:"/:catchAll(.*)", component:NotFound},
  // {
  //   path: '/',
  //   name: 'Home',
  //   component: Home
  // },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
export default router
