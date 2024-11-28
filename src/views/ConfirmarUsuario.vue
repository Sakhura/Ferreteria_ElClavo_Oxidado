<template>
    <div class="container mt-5">
    <div class="card mx-auto" style="max-width: 400px;">
      <div class="card-body">
        <div class="card-header alert alert-primary">Confirmación</div>
        <h4 class="card-title text-center">{{ message }}</h4>
       
      <router-link to='/' class="btn btn-primary w-100">Regresar al Login</router-link>
      </div>
     
    </div>
  </div>
 
</template>
 
<script>
import axios from 'axios';
export default{
    name: 'ConfirmacionUsuario',
    data (){
        return{
        message:'',
        status:''
        }
    },
    methods:{
        confirmar(){
            axios.get('https://raw.githubusercontent.com/shaka0241/ferreteria_Api/main/registroresp.json')
            .then(response => {
                this.message = response.data.respuestaRegistro.mensaje,
                this.status = response.data.respuestaRegistro.status,
                console.log(this.status)
})
.catch(error => {
    console.error('error en la solicitud', error);
    })
},
    },
    mounted() {
        this.confirmar();
    }
}
 
</script>