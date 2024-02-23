<template>
    <div class="loading_c" v-if="isVisible == true">
        <img src="../assets/logo.png" alt="" id="logo">    
        <div class="loader"></div> 
</div>
</template>

<script setup>
import {ref, defineProps} from 'vue'

const props =defineProps ({
    isVisible:Boolean
})

</script>

<style scoped>
.loading_c{
    background-color: white;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    gap: 30px;
    position: absolute;
    align-self: center;
    z-index: 500000;
}
#logo{
    width: 100px;
    transform: rotate(15deg);

}
.loader {
  width: 90px;
  height: 13px;
  -webkit-mask:linear-gradient(90deg,#000 70%,#0000 0) 0/20%;
  background:
   linear-gradient(#000 0 0) 0/0% no-repeat
   #ddd;
  animation: l4 2s infinite steps(6);
}
@keyframes l4 {
    100% {background-size:120%}
}
</style>