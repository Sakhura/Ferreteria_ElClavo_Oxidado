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