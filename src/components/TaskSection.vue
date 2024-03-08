<template>
    <div class="main_component"> 
            <hr>
        <div class="filters_c">
            <label for="select_category" id_cat>Category</label>
            <hr>
    <select name="category" id="select_category" v-model="selectedCategory">
        <option value="ALL">All</option>
        <option v-for="category in categories" :key="category" :value="category">{{category}}</option>
    </select>
        </div>
        <h2  @click="handleToday" class="today">Today <i v-if="todayIsOpen == true" class="fa-solid fa-minus plus_minus_i"></i> <i v-if="todayIsOpen == false" class="fa-solid fa-plus plus_minus_i"></i></h2>
        <div class="today_c" v-if="todayIsOpen == true && tasksFromToday.length >0 ">
            <Task v-for="task in tasksFromToday" 
            :key="task.id"
            :category="task.category"
            :state="task.state"
            :id="task.id" 
            :taskName="task.taskName" 
            :time="task.time" 
            :date="task.date" 
            :color="task.color"
            :description="task.description"
            @delete-task="actualizarTaskList(task.id)"
            @finish-task="actualizarTaskListFinished(task.id)"
                        />
            
        </div>
        <hr>
        <h2 @click="handleTomorrow" class="today">Tomorrow <i v-if="tomorrowIsOpen == true" class="fa-solid fa-minus plus_minus_i"></i> <i v-if="tomorrowIsOpen == false" class="fa-solid fa-plus plus_minus_i"></i></h2>
        <div class="today_c" v-if="tomorrowIsOpen == true  && tasksFromTomorrow.length >0">
            <Task v-for="task in tasksFromTomorrow" 
            :key="task.id" 
            :category="task.category"
            :state="task.state"
            :id="task.id" 
            :taskName="task.taskName" 
            :time="task.time" 
            :date="task.date" 
            :color="task.color"
            :description="task.description"
            @delete-task="actualizarTaskList(task.id)"
            @finish-task="actualizarTaskListFinished(task.id)"            
            />
        </div>
        <hr>
        <h2  @click="handleOther" class="today">Other <i v-if="otherIsOpen == true" class="fa-solid fa-minus plus_minus_i"></i> <i v-if="otherIsOpen == false" class="fa-solid fa-plus plus_minus_i"></i></h2>
        <div class="today_c" v-if="otherIsOpen == true && otherTasks.length >0" > 
            <Task v-for="task in otherTasks" 
            :key="task.id"
            :category="task.category"
            :state="task.state" 
            :id="task.id" 
            :taskName="task.taskName" 
            :time="task.time" 
            :date="task.date" 
            :color="task.color"
            :description="task.description"
            @delete-task="actualizarTaskList(task.id)"
            @finish-task="actualizarTaskListFinished(task.id)"
            />           
        </div>
        {{filterData.fromDate}}
    </div>
</template>

<script setup>
import {ref, onMounted,computed} from 'vue'
import ClientService from '../services/ClientService'
import { useStore } from 'vuex';
import Task from '../components/Task.vue'

const todayIsOpen = ref(true)
const tomorrowIsOpen = ref(true)
const otherIsOpen = ref(true)
const clientData = ref(null)
const selectedCategory = ref('ALL')
const clientTaskList =ref([])
const categories = ref([])



const filteredTasks = computed(()=>{
//datos
        const { fromDate, toDate, fromTime, toTime, category, state, color } = filterData.value;

//filtro categoria
    let filteredByCategory = clientTaskList.value;

if(selectedCategory.value == 'ALL'){
    filteredByCategory = clientTaskList.value;

}else{
    filteredByCategory = filteredByCategory.filter(t=>t.category == selectedCategory.value)
}
    const fromDateObj = new Date(fromDate);
    const toDateObj = new Date(toDate);

    const fromTimeFormatted = `${fromTime}:00`;
    const toTimeFormatted = `${toTime}:00`;

//filtro fecha
    let filteredByDate = filteredByCategory.filter(t => {
        if(!fromDate || !toDate){
            return filteredByCategory
        }else{
        const taskDate = new Date(t.date);
        return taskDate >= fromDateObj && taskDate <= toDateObj;
        }
    });
//filtro hora
    let filteredByTime = filteredByDate.filter(t => {
        if(!fromTime && !toTime){
            return filteredByDate
        }else{
            const taskTime = new Date(`2000-01-01T${t.time}`);
            const fromTimeObj = new Date(`2000-01-01T${fromTimeFormatted}`);
            const toTimeObj = new Date(`2000-01-01T${toTimeFormatted}`);
            return taskTime >= fromTimeObj && taskTime <= toTimeObj;
        }
    });
//filtro categoria navbar
let filteredByCategoryNav = filteredByTime.filter(t=>{
    if(!category[0]){
    return filteredByTime
    }else{
        return t.category == category
    }
    
})
//filtro estado
let filteredByState = filteredByCategoryNav.filter(t=>{
    console.log(state[0])
    if(!state[0]){
        return t.state != 'FINISHED'
    }else{
        console.log(state)
    return t.state == state
    }
})
// filtro color
let filteredeByColor = filteredByState.filter(t=>{
    console.log(color)
    if(!color){
        return filteredByState
    }else{
        return t.color == color
    }
})
return filteredeByColor;
}) 



const store = useStore();

const filterData = computed(()=>{
    console.log(store.getters.getData)
    return store.getters.getData
})



const actualizarTaskList = (id)=>{
    clientTaskList.value = clientTaskList.value.filter(task => task.id !== id && !task.deleted);
}
const actualizarTaskListFinished = (taskId) => {

    clientTaskList.value = clientTaskList.value.filter(task => task.id !== taskId);
}







const tasksFromToday = computed(() => {
    const {state} =filterData.value
    if (!clientTaskList.value) return null;
    const dateToday = new Date().toISOString().split('T')[0];
if(state!= 'FINISHED'){
return filteredTasks.value.filter(task => task.date === dateToday && !task.deleted && task.state == 'PENDING' );

}else{
    return filteredTasks.value.filter(task => task.date === dateToday && !task.deleted );

}
});

const tasksFromTomorrow = computed(() => {
    const {state} =filterData.value
    if (!clientTaskList.value) return null;
    const tomorrowDate = new Date();
    tomorrowDate.setDate(tomorrowDate.getDate() + 1);
    const dateTomorrow = tomorrowDate.toISOString().split('T')[0];
if(state != 'FINISHED'){
    return filteredTasks.value.filter(task => task.date === dateTomorrow && !task.deleted  && task.state == 'PENDING');

}else{
return filteredTasks.value.filter(task => task.date === dateTomorrow && !task.deleted);   
}
});

const otherTasks = computed(() => {
    const {state} =filterData.value
    if (!clientTaskList.value) return null;
    const dateToday = new Date().toISOString().split('T')[0];
    const tomorrowDate = new Date();
    tomorrowDate.setDate(tomorrowDate.getDate() + 1);
    const dateTomorrow = tomorrowDate.toISOString().split('T')[0];
    if(state != 'FINISHED'){
        return filteredTasks.value.filter(task => task.date !== dateTomorrow && task.date !== dateToday && !task.deleted && task.state == 'PENDING');
    }else{
        return filteredTasks.value.filter(task => task.date !== dateTomorrow && task.date !== dateToday && !task.deleted);
    }
});


const service = new ClientService()

onMounted( async ()=>{
await service.fetchAll()
.then(()=>{
    clientTaskList.value = service.getClient()._value
    console.log(service.getClient()._value)
    return service.getClient;
})
const url = 'http://localhost:8080/api/categories'
    fetch(url)
    .then(res=>res.json())
    .then(data=>categories.value=data)
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
    align-items: center ;
    font-family: var(--font1);
    padding: 20px 40px 0px 40px!important;
}
.filters_c hr{
    width: 65%;
    color: rgb(255, 255, 255);
}
#select_category{
    border: none;
    background-color: rgb(234, 234, 234);
    width: 200px;
    height: 40px;
    font-family: var(--font1);
    padding-left: 10px!important;
    border-radius: 4px;
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