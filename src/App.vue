<template>
  <div>
    <!-- <LoadingView /> -->
    <!-- <LoginView /> -->
    <IndexView />
  </div>
</template>

<script setup>
/* import LoadingView from './views/LoadingView.vue' */
import LoginView from '../src/views/LoginView.vue'
import IndexView from  '../src/views/IndexView.vue'

</script>

<style>
:root{
    --font1 : 'Inter';
    --font2 : 'Jost';
    --boxshadow : 2px 2px 5px 0px rgba(189,189,189,1);
    --color1 :#F3BC47;
} 
*{
  margin: 0px!important;
  padding: 0px!important;
  box-sizing: border-box!important;
}
</style>
