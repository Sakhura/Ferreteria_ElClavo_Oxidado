import { createRouter, createWebHistory } from "vue-router";
 
import LoginUsuario from "@/views/LoginUsuario.vue";
import RegistroUsuario from "@/views/RegistroUsuario.vue";
import ConfirmarUsuario from "@/views/ConfirmarUsuario.vue";
import HomePage from "@/views/HomePage.vue";
import ListadoProductos from "@/views/ListadoProductos.vue";
import DetalleProducto from "@/views/DetalleProducto.vue";
import CartSale from "@/components/CartSale.vue";
 
const routes = [
  {
    path: "/",
    redirect: "/login",
  },
  {
    path: "/home",
    name: "HomePage",
    component: HomePage,
  },
  {
    path: "/login",
    name: "Login",
    component: LoginUsuario,
  },
  {
    path: "/registrousuario",
    name: "RegistroUsuario",
    component: RegistroUsuario,
  },
  {
    path: "/confirmarusuario",
    name: "ConfirmarUsuario",
    component: ConfirmarUsuario,
  },
  {
    path: "/listadoproductos",
    name: "ListadoProductos",
    component: ListadoProductos,
  },
  {
    path: "/detalleproducto/:id",
    name: "DetalleProducto",
    component: DetalleProducto,
    props: true,
  },
  {
    path: "/cart",
    name: "CartSale",
    component: CartSale
  }
];
 
const router = createRouter({
  history: createWebHistory(),
  routes,
});
 
export default router;