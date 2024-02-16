<template>
    <div class="main_component">
<Task />
    </div>
</template>

<script setup>
import Task from '../components/Task.vue'
</script>

<style scoped>
.main_component{
/*     border: 3px solid yellow; */
    height: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;
}
</style>