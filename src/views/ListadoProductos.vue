<template>
    <div class="general">
      <!-- Menú de navegación -->
      <nav class="nav" style="background-color: darkseagreen; padding: 15px">
        <a href="/"
          ><img
            class="imagelogo"
            :src="require('@/assets/logo_ferreteria.jpg')"
            alt="Logo"
          />
        </a>
        <router-link class="nav-link" to="/login">Login |</router-link>
      </nav>
    </div>
   
    <div class="container">
      <h2>Listado de Productos</h2>
      <router-link to="/home">
        <button class="back-button" @click="HomePage">
          Regresar al Home
        </button></router-link
      >
      <div
        class="product-grid"
        v-for="(productos, index) in producto"
        :key="index"
      >
        <router-link
          :to="`/detalleproducto/${productos.id}`"
          class="product-card-link"
        >
          <div class="product-card">
            <p class="category">{{ productos.categoria }}</p>
            <p class="product-name">{{ productos.nombre }}</p>
          </div>
        </router-link>
      </div>
    </div>
   
    <!-- <footer>
      <h4>Redes Sociales</h4>
      <ul>
        <li><a :href="redSocial.facebook" target="_blank">Facebook</a></li>
        <li><a :href="redSocial.twitter" target="_blank">Twitter</a></li>
        <li><a :href="redSocial.instagram" target="_blank">Instagram</a></li>
      </ul>
   
      <div>
        <h4>Contacto</h4>
        <ul>
          <li>Email: {{ informacion.correoElectronico }}</li>
          <li>Teléfono: {{ informacion.telefono }}</li>
          <li>Dirección: {{ informacion.direccion }}</li>
        </ul>
      </div>
    </footer> -->
  </template>
   
  <script>
  import axios from "axios";
   
  export default {
    name: "ListadoProductos",
    data() {
      return {
        producto: [],
      };
    },
    methods: {
      listarProductos() {
        axios
          .get(
            "https://raw.githubusercontent.com/shaka0241/ferreteria_Api/main/productos.json"
          )
          .then((response) => {
            this.producto = response.data.productos;
          })
          .catch((error) => {
            console.error("Error al obtener los datos:", error);
          });
      },
    },
    mounted() {
      this.listarProductos();
    },
  };
  </script>