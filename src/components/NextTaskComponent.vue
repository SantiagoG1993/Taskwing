<template>
    <div  class="main_container_next_task ">
        <h3 id="title"><i class="fa-solid fa-clock clock1"></i>Next task in: <span id="watch">{{props.remaining}}</span></h3>
        <div class="nextTask_c" :style="{backgroundColor : getColor(props.color)}" @mouseover="subPanelIsOpen = true" @mouseleave="subPanelIsOpen = false" @click="openTaskInfo" >
            <h2 id="taskName">{{props.taskName}}</h2>
            <section class="data_c">
                <h3 id="time"><i class="fa-solid fa-clock clock2"></i>{{props.time}}</h3>
                <h3 id="date"><i class="fa-solid fa-calendar"></i>{{props.date}}</h3>
                <h3 id="category"><i class="fa-solid fa-star"></i>Default</h3>
            </section>
        </div>
        <div v-if="subPanelIsOpen == true" class="subpanel" :style="{backgroundColor : getColor(props.color)}" @mouseover="handleMouse(true)">
            <i class="fa-solid fa-pencil" @click="editTaskIsOpen = true"></i>
            <i class="fa-solid fa-flag-checkered" @click="finishTask(props.id)"></i>
            <i class="fa-solid fa-trash" @click="deleteTask(props.id)"></i>
        </div>
        <div v-if="taskInfoIsOpen == true" class="taskInfo_c" >
            <TaskInfo
            :taskName="props.taskName"
            :date="props.date"
            :time="props.time"
            :description="props.description"
            :category="props.category" 
            :color="props.color"
            @close-info="taskInfoIsOpen = false" />
        </div>
        <div v-if="editTaskIsOpen == true">
            <EditTask @close-edit-task="editTaskIsOpen = false" />
        </div>
    </div>
</template>

<script setup>
import {ref,defineEmits,defineProps} from 'vue';
import EditTask from '../components/EditTask.vue'
import TaskInfo from '../components/TaskInfo.vue'


const emit = defineEmits(['delete-task','finish-task'])
const taskInfoIsOpen = ref(false)

const props = defineProps({
id:Number,
taskName:String,
time:String,
date:String,
remaining:String,
description:String,
category:String,
color:String
})

const editTaskIsOpen = ref(false)
const subPanelIsOpen = ref(false)

const color ={
    RED:'#C32E3B',
    ORANGE:'#E78231',
    GREEN:'#4EAC94',
    YELLOW:'#F3BC47',
    GREY:'#514D4D'
}

const getColor = (colorValue) => {
  switch (colorValue) {
    case 'RED':
      return color.RED;
    case 'ORANGE':
      return color.ORANGE;
    case 'GREEN':
      return color.GREEN;
    case 'YELLOW':
      return color.YELLOW;
    case 'GREY':
      return color.GREY;
    default:
      return color.GREY;
  }
}
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



const deleteTask = (id) => {
    alertify.confirm(
        "Eliminar tarea",
        "¿Estás seguro de que quieres eliminar esta tarea?",
        () => { 
            const url = `http://localhost:8080/api/task/delete?id=${id}`;
            const options = {
                method: 'PUT',
            };
            fetch(url, options)
                .then(res => {
                    console.log(res);
                    emit('delete-task',props.id)
                    console.log('prueba')
                })
                .catch(err => console.log(err));
        },
        () => { 
        }
    )
    .set('labels', {ok:'Eliminar', cancel:'Cancelar'})
    .set('transition', 'fade')
    .set('modal', true)
    .set('closable', true)
    .set('movable', false)
    .set('onshow', function() {
        this.elements.dialog.style.top = '50%';
        this.elements.dialog.style.left = '50%';
        this.elements.dialog.style.transform = 'translate(-50%, -50%)';
    });
};
const finishTask = (id)=>{
    alertify.confirm(
        "Finalizar tarea?",
        "Esta seguro que desa finalizar esta tarea?",
        ()=>{
    const url=`http://localhost:8080/api/task/finish?id=${id}`;
    const options = {method:'PUT'}
    fetch(url,options)
    .then(res=>console.log(res))
    .then(data=>emit('finish-task'))
    .catch(err=>console.log(err))
        },
        ()=>{

        })
    
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
.taskInfo_c{
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    z-index: 5;
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