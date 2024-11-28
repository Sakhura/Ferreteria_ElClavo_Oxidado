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
      <h2>Detalle de Producto</h2>
      <router-link to="/listadoproductos">
        <button class="back-button">Regresar al Listado de Productos</button>
      </router-link>
   
      <!-- Mostrar solo un producto -->
      <div v-if="producto" class="product-detail">
        <h2>{{ producto.nombre }}</h2>
        <p><strong>Categoría:</strong> {{ producto.categoria }}</p>
        <p><strong>Descripción:</strong> {{ producto.descripcion }}</p>
        <p><strong>Precio:</strong> {{ producto.precio }}</p>
        <p><strong>Stock:</strong> {{ producto.stock }}</p>
      </div>
      <div v-else>
        <p>Cargando detalles del producto...</p>
      </div>
    </div>
  </template>
   
  <script>
  import axios from "axios";
   
  export default {
    name: "DetalleProducto",
    props: ["id"],
    data() {
      return {
        producto: null, // Inicializamos en null
      };
    },
    methods: {
      obtenerDetalleProducto() {
        // Hacemos una solicitud a la API para obtener todos los productos
        axios
          .get(
            "https://raw.githubusercontent.com/shaka0241/ferreteria_Api/main/productos.json"
          )
          .then((response) => {
            // Buscamos el producto que tiene el 'id' que fue pasado en la URL
            this.producto = response.data.productos.find(
              (producto) => producto.id === parseInt(this.id)
            );
          })
          .catch((error) => {
            console.error("Error al obtener los detalles del producto:", error);
          });
      },
    },
   
    mounted() {
      this.obtenerDetalleProducto();
    },
  };
  </script>