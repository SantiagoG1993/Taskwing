<template>
<div class="main_component_task" >
    <div :class="{finished : props.state == 'FINISHED'}" class="task_container" :style="{ backgroundColor: getColor(props.color) }"  @click="openTaskInfo" @mouseover="subPanelIsOpen = true" @mouseleave="subPanelIsOpen = false" >
        <h3 id="title">{{props.taskName}}</h3>
        <section class="data_c">
                <h3 id="time"><i class="fa-solid fa-clock clock2"></i>{{props.time.slice(0,-3)}}</h3>
                <h3 id="date"><i class="fa-solid fa-calendar"></i>{{props.date.slice(5)}}</h3>
                <h3 id="category"><i class="fa-solid fa-star"></i>Default</h3>
        </section>
    </div>
        <div v-if="subPanelIsOpen == true" class="subpanel" @mouseover="handleMouse (true)" :style="{ backgroundColor: getColor(props.color) }"  >
            <i class="fa-solid fa-pencil" @click="editTaskIsOpen = true"></i>
            <i class="fa-solid fa-flag-checkered" @click="finishTask(props.id)"></i>
            <i class="fa-solid fa-trash" @click="deleteTask(props.id)"></i>
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
import {ref,defineProps,defineEmits} from 'vue'
import TaskInfo from '../components/TaskInfo.vue'
import EditTask from '../components/EditTask.vue'

const emit = defineEmits(['delete-task','finish-task'])

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
      return color.GREY; // Color por defecto en caso de que el valor no coincida con ninguno de los enumerados
  }
}
const props = defineProps(
    {
        state:String,
        taskName:String,
        time:String,
        date:String,
        color:String,
        id:Number
    }
)

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
.finished{
    filter: grayscale(95%);
}
.task_container:active{
       background-color: #ebcd8b; 
}
#title{
    font-family: var(--font1);
    font-weight: 500;
    font-size: 15px;
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