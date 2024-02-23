<template>
<div class="main_component_task" >
    <div class="task_container"  @click="openTaskInfo" @mouseover="subPanelIsOpen = true" @mouseleave="subPanelIsOpen = false" >
        <h3 id="title">Estudiar por media hora</h3>
        <section class="data_c">
                <h3 id="time"><i class="fa-solid fa-clock clock2"></i>14:30</h3>
                <h3 id="date"><i class="fa-solid fa-calendar"></i>19/08</h3>
                <h3 id="category"><i class="fa-solid fa-star"></i>Default</h3>
        </section>
    </div>
        <div v-if="subPanelIsOpen == true" class="subpanel" @mouseover="handleMouse (true)"  >
            <i class="fa-solid fa-pencil" @click="editTaskIsOpen = true"></i>
            <i class="fa-solid fa-flag-checkered"></i>
            <i class="fa-solid fa-trash"></i>
        </div>
<div v-if="taskInfoIsOpen == true" class="taskInfo_c" >
    <TaskInfo @close-info="taskInfoIsOpen = false" />
</div>
<div v-if="editTaskIsOpen == true">
    <EditTask @close-edit-task="editTaskIsOpen = false" />
    </div>
</div>
</template>

<script setup>
import {ref} from 'vue'
import TaskInfo from '../components/TaskInfo.vue'
import EditTask from '../components/EditTask.vue'

const editTaskIsOpen = ref(false)
const subPanelIsOpen = ref(false)
const taskInfoIsOpen = ref(false)

const openTaskInfo = ()=>{
    taskInfoIsOpen.value = !taskInfoIsOpen.value
    console.log(taskInfoIsOpen.value)
}
const handleMouse = (boolean) => {
    subPanelIsOpen.value = boolean;
    if (boolean) {
        setTimeout(() => {
            subPanelIsOpen.value = false;
        }, 3000);
    }
}

</script>

<style scoped>
.main_component_task{
    position: relative;
    width: 100%;
    display: flex;
    justify-content: center;
    align-content: center;
}
.task_container{
    margin-bottom: 20px!important;
    width: 80%;
    user-select: none;
    height: 75px;
    background-color: #F3BC47;
    border-radius: 6px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    position: relative;
    box-shadow: var(--boxshadow);
    cursor: pointer;
}
.task_container:active{
       background-color: #ebcd8b; 
}
#title{
    font-family: var(--font1);
    font-weight: 500;
    font-size: 15px;
}
.data_c{
    display: flex;
    width: 90%;
    justify-content: space-around;
}
#time, #date, #category{
    color: white;
    font-family: var(--font1);
    font-size: 14px;
    font-weight: 500;
    display: flex;
    gap: 10px;
}
.taskInfo_c{
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    z-index: 5;
}
.subpanel{
display: none;
}

@media (min-width:1000px){
    .task_container{
        width: 300px;
        height: 114px;
        margin: 0px!important;
        }
    .main_component_task{
    position: relative;
    width: 300px;
    height: 160px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 1px;
    align-content: center;
    }
    .subpanel{
    width: 100%;
    height: 40px;
    border-radius: 3px;
    background-color: var(--color1);
    display: flex;
    align-items: center;
    justify-content: space-around;
}
.subpanel i{
    color: #474747;
    font-size: 22px;

}
.subpanel i:hover{
    color: white;
    cursor: pointer;
}
}


</style>