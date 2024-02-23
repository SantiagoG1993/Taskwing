<template>
    <div  class="main_container_next_task ">
        <h3 id="title"><i class="fa-solid fa-clock clock1"></i>Next task in: <span id="watch">12:50h</span></h3>
        <div class="nextTask_c" @mouseover="subPanelIsOpen = true" @mouseleave="subPanelIsOpen = false">
            <h2 id="taskName">Pasear al perro</h2>
            <section class="data_c">
                <h3 id="time"><i class="fa-solid fa-clock clock2"></i>14:30</h3>
                <h3 id="date"><i class="fa-solid fa-calendar"></i>19/08</h3>
                <h3 id="category"><i class="fa-solid fa-star"></i>Default</h3>
            </section>
        </div>
        <div v-if="subPanelIsOpen == true" class="subpanel" @mouseover="handleMouse(true)">
            <i class="fa-solid fa-pencil" @click="editTaskIsOpen = true"></i>
            <i class="fa-solid fa-flag-checkered"></i>
            <i class="fa-solid fa-trash"></i>
        </div>
        <div v-if="editTaskIsOpen == true">
            <EditTask @close-edit-task="editTaskIsOpen = false" />
        </div>
    </div>
</template>

<script setup>
import {ref} from 'vue';
import EditTask from '../components/EditTask.vue'


const editTaskIsOpen = ref(false)

const subPanelIsOpen = ref(false)
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
.main_container_next_task{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2px;
}
.nextTask_c{
    user-select: none;
    width: 95%;
    height: 60px;
    background-color: #4EAC94 ;
    border-radius: 4px;
    box-shadow: var(--boxshadow);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 6px;
}
.clock2{
    color: white;
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
#taskName{
    font-family: var(--font1);
    color: white;
    font-size: 15px;
    font-weight: 500;
}
#title{
    display: flex;
    gap: 10px;
    font-family: var(--font1);
    font-weight: 200;
    font-size: 15px;
    letter-spacing: 2px;
    align-items: center;
}
#watch{
    font-weight: bold;
    font-size: 22px;
}
.clock1 {
    color: black;
}
@media (min-width:1000px){
    .main_container_next_task{
        margin-top: 30px!important;
        margin-right: 100px!important;
        width: 72%;
        height: 300px;
        align-self: end;

    }
    .nextTask_c{
        height: 50px;
        cursor: pointer;
    }
    hr{
        width: 100%;
        color: rgb(255, 255, 255);
        margin-top: 20px!important;
    }
    .subpanel{
    width: 300px;
    height: 40px;
    border-radius: 3px;
    background-color: #4EAC94;
    display: flex;
    align-self: flex-end;
    margin-right: 30px!important;
    align-items: center;
    
    justify-content: space-around;
}
.subpanel i{
    color: white;
    font-size: 22px;
}
.subpanel i:hover{
    color: #474747;
    cursor: pointer;
}
}
</style>