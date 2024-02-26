<template>
    <div class="main_component"> 
            <hr>
        <div class="filters_c">
            <h3 id="category_selected"> Category <i class="fa-solid fa-angle-down"></i></h3>
        </div>
        <h2  @click="handleToday" class="today">Today <i v-if="todayIsOpen == true" class="fa-solid fa-minus plus_minus_i"></i> <i v-if="todayIsOpen == false" class="fa-solid fa-plus plus_minus_i"></i></h2>
        <div class="today_c" v-if="todayIsOpen == true">
            <Task v-for="task in tasksFromToday" 
            :key="task.id"
            :id="task.id" 
            :taskName="task.taskName" 
            :time="task.time" 
            :date="task.date" 
            :color="task.color"
            @delete-task="actualizarTaskList"
            />
            
        </div>
        <hr>
        <h2 @click="handleTomorrow" class="today">Tomorrow <i v-if="tomorrowIsOpen == true" class="fa-solid fa-minus plus_minus_i"></i> <i v-if="tomorrowIsOpen == false" class="fa-solid fa-plus plus_minus_i"></i></h2>
        <div class="today_c" v-if="tomorrowIsOpen == true">
            <Task v-for="task in tasksFromTomorrow" 
            :key="task.id" 
            :id="task.id" 
            :taskName="task.taskName" 
            :time="task.time" 
            :date="task.date" 
            :color="task.color"
            @delete-task="actualizarTaskList"
            
            />
        </div>
        <hr>
        <h2  @click="handleOther" class="today">Other <i v-if="otherIsOpen == true" class="fa-solid fa-minus plus_minus_i"></i> <i v-if="otherIsOpen == false" class="fa-solid fa-plus plus_minus_i"></i></h2>
        <div class="today_c" v-if="otherIsOpen == true">
            <Task v-for="task in otherTasks" 
            :key="task.id" 
            :id="task.id" 
            :taskName="task.taskName" 
            :time="task.time" 
            :date="task.date" 
            :color="task.color"
            @delete-task="actualizarTaskList(task.id)"
            />           
        </div>
        
    </div>
</template>

<script setup>
import {ref, onMounted,computed} from 'vue'
import Task from '../components/Task.vue'

const todayIsOpen = ref(true)
const tomorrowIsOpen = ref(true)
const otherIsOpen = ref(true)
const clientData = ref(null)


const actualizarTaskList = (id)=>{
    clientTaskList.value = clientTaskList.value.filter(task => task.id !== id && !task.deleted);
}

const clientTaskList = ref(null)

const tasksFromToday = computed(() => {
    if (!clientTaskList.value) return null;
    const dateToday = new Date().toISOString().split('T')[0];
    return clientTaskList.value.filter(task => task.date === dateToday && !task.deleted);
});

const tasksFromTomorrow = computed(() => {
    if (!clientTaskList.value) return null;
    const tomorrowDate = new Date();
    tomorrowDate.setDate(tomorrowDate.getDate() + 1);
    const dateTomorrow = tomorrowDate.toISOString().split('T')[0];
    return clientTaskList.value.filter(task => task.date === dateTomorrow && !task.deleted);
});

const otherTasks = computed(() => {
    if (!clientTaskList.value) return null;
    const dateToday = new Date().toISOString().split('T')[0];
    const tomorrowDate = new Date();
    tomorrowDate.setDate(tomorrowDate.getDate() + 1);
    const dateTomorrow = tomorrowDate.toISOString().split('T')[0];
    return clientTaskList.value.filter(task => task.date !== dateTomorrow && task.date !== dateToday && !task.deleted);
});

onMounted(()=>{
const url = 'http://localhost:8080/api/clients'
fetch(url)
.then(res=>res.json())
.then(data=> {
    clientData.value=data[0].taskList;
    clientTaskList.value = data[0].taskList

/* 
    const date = new Date()
    const dateToday = date.toISOString().split('T')[0];

const year = date.getFullYear();
const month = String(date.getMonth() + 1).padStart(2, '0'); // Sumamos 1 al mes y aseguramos que tenga 2 dígitos
const day = String(date.getDate() + 1).padStart(2, '0'); 

    const dateTomorrow = `${year}-${month}-${day}`
    console.log(data)
    tasksFromToday.value=data[0].taskList.filter(t=>t.date == dateToday && t.deleted == false)
    tasksFromTomorrow.value=data[0].taskList.filter(t=>t.date == dateTomorrow && t.deleted == false )
    otherTasks.value = data[0].taskList.filter(t=>t.date != dateTomorrow && t.date != dateToday && t.deleted == false ) */
}
)
.catch(err=>console.log(err))
})

const handleToday = ()=>{
    todayIsOpen.value = !todayIsOpen.value
}
const handleTomorrow = ()=>{
    tomorrowIsOpen.value = !tomorrowIsOpen.value
}
const handleOther = ()=>{
    otherIsOpen.value = !otherIsOpen.value
}

</script>

<style scoped>
.main_component{
/* background-color: rgb(234, 234, 234); */
    min-height: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px!important;
}
.today_c{
    width: 100%;
    min-height: 150px!important;
    margin-bottom: 10px!important;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;}
.today{
    width: 90%;
    justify-content: space-between;
        margin: 10px 0px 20px 0px!important;
    font-family: var(--font2);
    display: flex;
    align-items: center;
    gap: 8px;
    font-weight: 200;
    font-size: 16px;
        cursor: pointer;
}

hr{
    display: none;
}
#category_selected{
    font-family: var(--font1);
    align-self: flex-start;
    font-weight: 300;
    font-size: 20px;
    display: flex;
    align-items: center;
    gap: 12px;
}
.fa-angle-down{
    font-size: 15px;
    padding-top: 5px!important;
}
.fa-angle-down:hover{
    color: grey;
    cursor: pointer;
}
.filters_c{
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 20px 40px 0px 40px!important;
}
@media (min-width: 1000px){

.main_component{
    width: 65%;
    align-self: flex-end;
    margin-right: 100px!important;
}
.today{
    align-self: flex-start;
    font-weight: 400;
    margin-top: 20px!important;
    font-size: 18px;
}
    .today_c{
    flex-direction: row;
    width: 100%;
/*     border: 1px solid red; */
    min-height: 200px;
    align-items: center;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: start;
    }

    hr{
        display: unset;
    width: 100%;
    color: rgb(255, 255, 255);
}
#category_selected{
    display: unset;
}
.today{
    width: 100px;
    justify-content: space-between;
}
.plus_minus_i:hover{
    color: #C32E3B;
    cursor: pointer;
}
}

</style>