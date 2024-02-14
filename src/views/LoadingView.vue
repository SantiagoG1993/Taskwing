<template>
    <div class="loading_c">
        <img src="../assets/logo.png" alt="" id="logo">    
        <div class="loader"></div> 

</div>
</template>

<script setup>

</script>

<style scoped>
.loading_c{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    gap: 30px;
}
#logo{
    width: 131px;
    transform: rotate(-11deg);

}
.loader {
  width: 100px;
  height: 15px;
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