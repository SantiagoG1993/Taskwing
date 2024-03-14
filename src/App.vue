<template>
  <div>
    <router-view/>
  </div>
</template>

<script setup>
import {onMounted,ref} from 'vue';
import router from './router'

const authClient=ref([])

const fetchAuth = () => {
  const url = "http://localhost:8080/api/client/auth";
  const options = { method: "GET", credentials: "include" };

  fetch(url, options)
    .then((res) => {
      if (res.ok) {
        return res.json();
      } else if (res.status === 403) {
        // Si la respuesta es 403, permanece en la página de inicio de sesión
        return Promise.reject(new Error("Forbidden"));
      } else {
        throw new Error('fetch auth error');
      }
    })
    .then((data) => {
      // Si la autenticación es exitosa, redirige al usuario a /index
    router.push('/index')
    })
    .catch((err) => {
      if (err.message === "Forbidden") {
        // Manejar el caso de Forbidden (403), puedes mostrar un mensaje o realizar otras acciones aquí
        console.error("Forbidden: No tienes permiso para acceder a este recurso");
      } else {
        // Otros errores
        console.error('Error fetching authentication data:', err.message);
      }
    });
};


onMounted(()=>{
  fetchAuth()

})

</script>

<style>
:root{
    --font1 : 'Inter';
    --font2 : 'Jost';
    --font3 : 'Just Me Again Down Here';
    --boxshadow : 2px 2px 5px 0px rgba(189,189,189,1);
    --color1 :#F3BC47;
} 
*{
  margin: 0px;
  padding: 0px;
  box-sizing: border-box!important;
}

</style>
