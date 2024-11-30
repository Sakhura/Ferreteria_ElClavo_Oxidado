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
.container{
  max-width: 1000px;
  margin: 20px auto;
  padding: 20px;
  background-color: #ffffff;
  border-radius: 15px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  display: grid;;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); /* Responsivo */
  gap: 20px;
  align-items: start;
}

.container h2{
  text-align: center;
  font-size: 1.8rem;
  font-weight: bold;
  color: #007bff;
  margin-bottom: 20px;
}
.back-button {
  display: inline-block;
  margin-bottom: 20px;
  padding: 10px 20px;
  font-size: 1rem;
  font-weight: bold;
  color: #ffffff;
  background-color: #28a745;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;
}
.back-button:hover {
  background-color: #218838;
  transform: translateY(-2px);
}

.product-detail{
  display: grid;
  padding: 10px 0;
  font-size: 1rem;
  color: #333;
  line-height: 1.6;
}

.product-detail > div{
  background-color: #f9f9f9;
  padding: 15px;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  text-align: left;
}

.product-detail > div h2 {
  font-size: 1.2rem;
  color: #007bff;
  margin-bottom: 10px;
}

.product-detail > div p {
  margin: 5px 0;
}

.product-detail button {
  display: inline-block;
  margin-top: 20px;
  padding: 10px 20px;
  font-size: 1rem;
  font-weight: bold;
  color: #ffffff;
  background-color: #007bff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out, transform 0.2s;
}

.product-detail button:hover {
  background-color: #0056b3;
  transform: translateY(-2px);
}

.container p {
  text-align: center;
  font-size: 1.2rem;
  color: #555;
}

</style>