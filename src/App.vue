<template>
  <div>   
        <LoadingView :isVisible = showLoader />
  <!--       <LoginView :isVisible = showLogin /> -->
        <IndexView :isVisible = showIndex />
  </div>
</template>

<script setup>
import {ref,onMounted} from 'vue';
import LoadingView from './views/LoadingView.vue'
import LoginView from '../src/views/LoginView.vue'
import IndexView from  '../src/views/IndexView.vue'

const showLoader = ref(true)
const showIndex = ref(false)
const showLogin = ref(false)
const clientData = ref(null)


onMounted(()=>{
/* const url = 'http://localhost:8080/api/clients'
fetch(url)
.then(res=>res.json())
.then(data=> {
  clientData.value=data;
  console.log(data.map(client => client.taskList))
}
)
.catch(err=>console.log(err)) */

          showIndex.value = true
      document.documentElement.style.overflow='hidden'
      setTimeout(() => {
        showLoader.value = false
        showLogin.value = true
        document.documentElement.style.overflow=''
    }, 750);
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
  margin: 0px!important;
  padding: 0px!important;
  box-sizing: border-box!important;
}
</style>
