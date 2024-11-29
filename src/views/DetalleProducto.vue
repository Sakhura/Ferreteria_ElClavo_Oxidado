<template>
  <div class="general">
    <!-- Menú de navegación -->
    <nav class="nav" style="background-color: darkseagreen; padding: 15px">
      <a href="/">
        <img
          class="imagelogo"
          :src="require('@/assets/logo_ferreteria.jpg')"
          alt="Logo"
        />
      </a>
      <router-link to="/cart">Carrito</router-link>
      <router-link class="nav-link" to="/login">Login |</router-link>
    </nav>
  </div>
 
  <div class="container">
    <h2>Detalle de Producto</h2>
    <router-link to="/listadoproductos">
      <button class="back-button">Regresar al Listado de Productos</button>
    </router-link>
 
    <!-- Mostrar solo un producto -->
    <div v-if="products" class="product-detail">
      <h2>{{ products.nombre }}</h2>
      <p><strong>Categoría:</strong> {{ products.categoria }}</p>
      <p><strong>Descripción:</strong> {{ products.descripcion }}</p>
      <p><strong>Precio:</strong> ${{ products.precio }}</p>
      <p><strong>Stock:</strong> {{ products.stock }}</p>
      <button @click="addToCart(products)">Agregar</button>
    </div>
 
    <div v-else>
      <p>Cargando detalles del producto...</p>
    </div>
  </div>
</template>
 
<script>
import axios from "axios";
import { cartState } from "../cartState";
 
export default {
  name: "DetalleProducto",
  props: {
    id: {
      type: [String, Number], // Acepta string o número
      required: true,
    },
  },
  data() {
    return {
      products: null, // Inicializamos en null
    };
  },
  methods: {
    addToCart(product) {
      cartState.addItem(product);
      alert(`${product.nombre} fue agregado al carrito.`); // Mensaje opcional
    },
    obtenerDetalleProducto() {
      axios
        .get(
          "https://raw.githubusercontent.com/shaka0241/ferreteria_Api/main/productos.json"
        )
        .then((response) => {
          // Buscamos el producto que tiene el 'id' que fue pasado como prop
          this.products = response.data.productos.find(
            (producto) => producto.id === Number(this.id)
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
 
<style>
/* Estilos adicionales opcionales */
.container {
  margin: 20px;
}
.product-detail {
  border: 1px solid #ccc;
  padding: 20px;
  border-radius: 5px;
}
.back-button {
  margin-bottom: 20px;
  padding: 10px;
  background-color: darkseagreen;
  border: none;
  color: white;
  cursor: pointer;
  border-radius: 5px;
}
.back-button:hover {
  background-color: #3a8b58;
}
</style>