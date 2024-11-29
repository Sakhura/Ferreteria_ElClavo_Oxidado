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
      <router-link to="/cart">Carrito</router-link>
    </nav>
  </div>
 
  <div class="title" v-for="(paginaHome, index) in paginaHomes" :key="index">
    <h1>Ferreteria {{ paginaHome.nombre }}</h1>
  </div>
 
  <div class="proveedor">
    <h3>Proveedores</h3>
    <table>
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Email</th>
          <th>Teléfono</th>
          <th>Dirección</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(proveedor, index) in proveedoresActual" :key="index">
          <td>{{ proveedor.nombre }}</td>
          <td>{{ proveedor.contacto }}</td>
          <td>{{ proveedor.telefono }}</td>
          <td>{{ proveedor.direccion }}</td>
        </tr>
      </tbody>
    </table>
  </div>
 
  <div class="promociones">
    <h3>Promociones Activas</h3>
    <div class="promociones-container">
      <div class="card" v-for="(promocion, index) in promociones" :key="index">
        <div class="card-body">
          <h5 class="card-title">Promoción {{ index + 1 }}</h5>
          <p class="card-text">{{ promocion.descripcion }}</p>
          <p class="card-text">
            Válido desde {{ promocion.fechaInicio }} hasta
            {{ promocion.fechaFin }}
          </p>
        </div>
      </div>
    </div>
  </div>
 
  <div class="card listado">
    <div class="card-body">
      <h5 class="card-title">Listado de Productos</h5>
      <router-link to="/listadoproductos">Ver Listado de Productos</router-link>
    </div>
  </div>
 
  <footer>
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
  </footer>
</template>
 
<script>
import axios from "axios";
 
export default {
  name: "HomePage",
  data() {
    return {
      paginaHomes: [],
      proveedoresActual: [],
      promociones: [],
      redSocial: {},
      informacion: {},
    };
  },
  methods: {
    home() {
      axios
        .get(
          "https://raw.githubusercontent.com/shaka0241/ferreteria_Api/main/home.json"
        )
        .then((response) => {
          const data = response.data.paginaHome;
 
          this.paginaHomes = [{ nombre: data.nombre }];
          this.proveedoresActual = data.proveedoresActuales;
          this.promociones = data.promocionesActuales;
          this.redSocial = data.informacionGeneral.redesSociales;
          this.informacion = {
            direccion: data.informacionGeneral.direccion,
            telefono: data.informacionGeneral.telefono,
            correoElectronico: data.informacionGeneral.correoElectronico,
          };
        })
        .catch((error) => {
          console.error("Error al obtener los datos:", error);
        });
    },
 
    ListadoProductos() {
      this.$router.push("/listadoproductos");
    },
  },
  mounted() {
    this.home();
  },
};
</script>

<style>
.general{
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  max-width: 1200px;
  padding: 20px;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}

.nav{
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: darkgreen;
  padding: 15px;
  border-radius: 8px;
}

.nav .imagelogo{
  width: 100px;
  height: auto;
}

.tittle{
  text-align: center;
  margin: 20px 0;
  color: darkgreen;
}

.proveedor {
width: 100%;
max-width: 1200px;
margin: 20px auto; /* Centrar el contenedor */
padding: 15px;
box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); /* Añadir sombra para un diseño moderno */
background-color: #fff; /* Fondo blanco para contraste */
border-radius: 8px; /* Bordes redondeados */
}

/* Tabla */
.proveedor .table {
width: 100%;
border-collapse: collapse; /* Unificar bordes */
margin: 0 auto; /* Centrar la tabla dentro del contenedor */
background-color: #da8e8e;
font-size: 16px;
text-align: left; /* Alineación predeterminada para tablas */
}

/* Encabezados */
.proveedor .table thead th {
background-color: #ddd; /* Fondo gris para encabezados */
color: #333; /* Texto oscuro */
font-weight: bold;
padding: 10px;
border: 1px solid #ccc;
text-align: center; /* Alineación centrada para encabezados */
}

/* Filas y celdas */
.proveedor .table tbody td {
padding: 10px; /* Espaciado interno */
border: 1px solid #ccc; /* Bordes claros entre celdas */
text-align: center; /* Alineación de texto a la izquierda */
}

/* Alternar color de filas */
.proveedor .table tbody tr:nth-child(even) {
background-color: #f2f2f2; /* Color de fondo para filas pares */
}

/* Alinear toda la tabla */
.proveedor .table {
margin: 20px auto; /* Centrar tabla */
}


.promociones-container {
display: flex;
flex-wrap: wrap;
justify-content: center;
gap: 20px;
margin: 20px 0;
}

.card {
border: 1px solid #ccc;
border-radius: 8px;
padding: 15px;
max-width: 300px;
box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.card-title {
font-size: 18px;
font-weight: bold;
}

.listado {
text-align: center;
margin: 20px 0;
}

.footer {
margin-top: 40px;
width: 100%;
text-align: center;
background-color: #f8f9fa;
padding: 20px 0;
border-top: 2px solid #ccc;
}

.footer ul {
list-style: none;
padding: 0;
}

.footer li {
margin: 5px 0;
}

.footer a {
text-decoration: none;
color: #007bff;
}

.footer a:hover {
text-decoration: underline;
}


</style>