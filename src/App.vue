<template>
  <div>
    <!-- <LoadingView /> -->
    <LoginView />
  </div>
</template>

<script setup>
/* import LoadingView from './views/LoadingView.vue' */
import LoginView from '../src/views/LoginView.vue'

</script>

<style>
:root{
    --font1 : 'Inter';
    --boxshadow : 2px 2px 5px 0px rgba(189,189,189,1);
}
*{
  margin: 0px!important;
  padding: 0px!important;
  box-sizing: border-box!important;
}
</style>
