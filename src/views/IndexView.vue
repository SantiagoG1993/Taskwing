<template>
    <div class="index_c">
        <section class="next_task_c">
            <i class="fa-solid fa-bars" @click="navBarIsOpen = !navBarIsOpen"></i>
            <NextTaskComponent />
        </section>
        <TaskSection />
        <section class="add_task_c">
        <i class="fa-solid fa-trash-can"></i>
            <div id="add_task_btn" @click="addtaskIsOpen = true">
            <i class="fa-solid fa-plus"></i>    
            </div>
        </section>
        <div v-if="addtaskIsOpen == true">
            <AddTaskForm @close-add-task = 'addtaskIsOpen = false' />
        </div>
        <div v-if="navBarIsOpen == true">
            <NavBarComponent  @close-navbar="navBarIsOpen = false"/>  
        </div>
    </div>
</template>

<script setup>
import {ref} from 'vue';
import NextTaskComponent from '../components/NextTaskComponent.vue'
import TaskSection from '../components/TaskSection.vue'
import AddTaskForm from '../components/AddTaskForm.vue'
import NavBarComponent from '../components/NavBarComponent.vue'

const addtaskIsOpen = ref(false);
const navBarIsOpen = ref(true);

</script>

<style scoped>
.index_c{
    height: 100vh;
    position: relative;

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
.add_task_c{
    height: 90px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 30px!important;
/*     position: absolute;
    width: 100%;
    bottom: 20px; */
}
#add_task_btn{
    background-color: #F3BC47;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    box-shadow: var(--boxshadow);
    display: flex;
    justify-content: center;
    align-items: center;
}
#add_task_btn:active{
    background-color: #474747;
    cursor: pointer;
}
.fa-plus{
    color: white;
    font-size: 30px;
}
.fa-trash-can{
    color: rgb(67, 67, 67);
    font-size: 35px;
}
.fa-trash-can:active{
    color: #F3BC47;  
}
@media (min-width:1000px){
    .fa-bars{
        display: none;
    }
}

</style>