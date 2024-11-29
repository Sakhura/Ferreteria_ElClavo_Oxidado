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
body {
  margin: 0;
  padding: 0;
  font-family: Arial, sans-serif;
  background: url('https://static.vecteezy.com/system/resources/previews/007/702/335/non_2x/abstract-under-construction-background-with-black-and-yellow-stripes-ilustration-free-vector.jpg') 
              no-repeat center center fixed;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}

.container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}


.card {
  background-color: rgba(255, 255, 255, 0.9); /* Fondo semitransparente */
  border-radius: 15px;
  box-shadow: 0px 6px 15px rgba(0, 0, 0, 0.2);
  padding: 2rem;
}
.card-title {
  font-size: 1.5rem;
  font-weight: bold;
  color: #007bff;
  margin-bottom: 1rem;
}
.form-label {
  font-weight: bold;
  color: #333;
}
.form-control {
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 0.8rem;
  font-size: 1rem;
  box-shadow: inset 0px 1px 3px rgba(0, 0, 0, 0.1);
  transition: all 0.2s ease-in-out;
}

.form-control:focus {
  border-color: #007bff;
  box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
}

.btn-primary {
  background-color: #007bff;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  font-weight: bold;
  padding: 0.8rem;
  transition: background-color 0.3s ease-in-out, transform 0.2s;
}

.btn-primary:hover {
  background-color: #0056b3;
  transform: translateY(-2px);
}

hr {
  margin: 1.5rem 0;
  border: 0;
  height: 1px;
  background-color: #ccc;
  opacity: 0.7;
}


</style>