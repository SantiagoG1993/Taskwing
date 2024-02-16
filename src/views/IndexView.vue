<template>
    <div class="index_c">
        <section class="next_task_c">
            <i class="fa-solid fa-bars"></i>
            
            <NextTaskComponent />
            <TaskSection />
        </section>

    </div>
</template>

<script setup>
import NextTaskComponent from '../components/NextTaskComponent.vue'
import TaskSection from '../components/TaskSection.vue'

</script>

<style scoped>
.index_c{
    border: 1px solid red;
    height: 100vh;
}
.next_task_c{
    height: 20vh;
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 5px;

}
.fa-bars{
    font-size: 30px;
    color: #474747;
    align-self: end;
    margin-right: 20px!important;
    margin-top: 20px!important;

    
}
.fa-bars:active{
    color: #F3BC47;
}

</style>