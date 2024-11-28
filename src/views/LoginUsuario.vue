<template>
    <div class="container mt-5">
    <div class="card mx-auto" style="max-width: 400px;">
      <div class="card-body">
        <h5 class="card-title text-center">Iniciar Sesión</h5>
        <form @submit.prevent="login">
          <div class="mb-3">
            <label for="email" class="form-label">Email:</label>
            <input type="email" id="email" class="form-control" v-model="user.email" placeholder="email@email.com" />
          </div>
          <div class="mb-3">
            <label for="password" class="form-label">Contraseña:</label>
            <input type="password" id="password" class="form-control" v-model="user.password" />
          </div>
         
          <button type="button" class="btn btn-primary w-100" @click="login()">Iniciar Sesión</button>
        </form>
        <hr>
      <router-link to='/Registrousuario' class="btn btn-primary w-100">Registrarse</router-link>
      </div>
     
    </div>
  </div>
 
   
 
</template>
 
<script>
import axios from 'axios'
export default {
    name: "loginUser",
    data() {
        return {
            user: {
                email: '',
                password: '',
            }
        }
    },
    methods: {
        login() {
            if (!this.user.email || !this.user.password) {
                alert('Debes llenar todos los campos')
            }
            else {
                axios.get(`https://raw.githubusercontent.com/shaka0241/ferreteria_Api/main/login.json`)
                    .then((resp) => {
                        if (this.user.email === resp.data.login.correoElectronico && this.user.password === resp.data.login.contrasena) {
                            alert('logueado'),
                            localStorage.setItem('token', 'tu_token_aqui'),
                            this.$router.push({ name: 'HomePage' })
                        } else {
                            alert('no logueado')
                        }
                    })
                    .catch((error) => {
                        console.log("error en la solicitud", error)
                    })
            }
        },
 
    },
}
</script>
 
<style>
.card {
  border: 1px solid #ddd;
  border-radius: 10px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
}
</style>