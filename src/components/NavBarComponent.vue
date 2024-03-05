<template>
    <div class="nav_main_container" ref="main_container">
        <button @click="handleClick">prueba</button>
        <img src="../assets/logo.png" alt="" id="logo">
        <h1 id="taskwing_title">TASKWING</h1>
        <h2 id="filters_title">Filters</h2>
        <div class="filter_container">
            <h3>Filter by date</h3>
            <hr>
            <h4 class="from_to">From: <input type="date" class="date" v-model="fromDate" @change="handleFromDate"></h4>
            <h4 class="from_to">To:<input type="date" class="date" v-model="toDate"  @change="handleToDate"></h4>
        </div>
        <div class="filter_container">
            <h3>Filter by time</h3>
            <hr>
            <h4 class="from_to">From: <input type="time" class="time" v-model="fromTime"  @change="handleFromTime"></h4>
            <h4 class="from_to">To:<input type="time" class="time" v-model="toTime"  @change="handleToTime"></h4>
        </div>
        <div class="filter_container">
            <h3>Filter by category</h3>
            <hr>
            <label v-for="category in categories" :key="category">
                    <input type="checkbox" v-model="selectedCategories" :value="category.toUpperCase()" @change="handleCategories"> {{ category }}
                </label>
        </div>
        <div class="filter_container">
            <h3>Filter by state</h3>
            <hr>
        <label v-for="state in states" :key="state">
                    <input type="checkbox" v-model="selectedState" :value="state.toUpperCase()" @change="handleState"> {{ state }}
            </label>
        </div>
        <div class="filter_container">
            <h3>Filter by color</h3>
            <hr>
        <section class="color_select_c" ref="color_c">
            <div class="color_option color1" @click="handleColor('RED','color1')"></div>
            <div class="color_option color2" @click="handleColor('ORANGE','color2')"></div>
            <div class="color_option color3" @click="handleColor('GREEN','color3')"></div>
            <div class="color_option color4" @click="handleColor('YELLOW','color4')"></div>
            <div class="color_option color5" @click="handleColor('GREY','color5')"></div>
        </section>
        </div>
    </div>
</template>

<script setup>
import {ref, defineEmits} from 'vue';
import {onClickOutside} from '@vueuse/core';
import {useStore} from 'vuex';

const fromDate = ref('')
const toDate = ref('')
const fromTime = ref('')
const toTime = ref('')
const selectedCategories = ref([])
const selectedState = ref([])
const color_c = ref(null)

const store = useStore();

const categories = ['Default', 'Personal', 'Meeting', 'Urgent'];
const states = ['Pending','Finished','Deleted']

const handleClick = ()=>{
    console.log(fromDate.value+ " "+toDate.value +" " + fromTime.value + " " + toTime.value + " " + selectedCategories.value + " " +selectedState.value )
}
const emit = defineEmits(['close-navbar'])

const main_container = ref(null);

const handleFromDate = ()=>{
    store.commit('setFromDate',fromDate.value)
}
const handleToDate = ()=>{
    store.commit('setToDate',toDate.value)
}
const handleFromTime = ()=>{
    store.commit('setFromTime',fromTime.value)
}
const handleToTime = ()=>{
    store.commit('setToTime',toTime.value)
}
const handleCategories = ()=>{
    store.commit('setCategory',selectedCategories.value)
}
const handleState = ()=>{
    store.commit('setState',selectedState.value)
}

const handleColor = (colorName,c)=>{
store.commit('setColor',colorName)

const allColors =document.querySelectorAll('.color_option')
allColors.forEach(c => c.classList.remove('selected-color'))

const e = document.querySelector(`.${c}`)
e.classList.add("selected-color")
}
onClickOutside(main_container,()=>{
emit('close-navbar')
console.log('click afuera')
})
onClickOutside(color_c,()=>{
    store.commit('setColor','')
    const allColors =document.querySelectorAll('.color_option')
    allColors.forEach(c => c.classList.remove('selected-color'))   
})
</script>

<style scoped>
.color_select_c{
    margin-top: 20px!important;
    border-radius: 3px;
    width: 90%;
    height: 49px;
    background-color: #93212E;
    box-shadow: var(--boxshadow);
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-left: 4%!important;
}
#color_title{
    font-family: var(--font2);
    color: white;
    font-weight: 400;
    font-size: 20px;
}
.color_option{
    width: 25px;
    height: 50%;
    border-radius: 3px;
}
.color_option:hover{
    border: 1px solid white;
    cursor: pointer;
}
.color1{
        background-color: #C32E3B;
}
.color2{
        background-color: #E78231;
}
.color3{
        background-color: #4EAC94;
}
.color4{
        background-color: #F3BC47;
}
.color5{
        background-color: #514D4D;
}
#logo,#taskwing_title{
    display: none;
}
.selected-color{
    border: 1px solid white;
}
.nav_main_container{
    user-select: none;
    position: fixed;
    top: 0px;
    width: 235px;
    height: 90vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: var(--color1);
}
#filters_title{
    margin-top: 20px!important;
    font-family: var(--font1);
    font-weight: 400;
    letter-spacing: 5px;
    text-align: center;
    font-size: 16px;
}
.filter_container{
    width: 100%;
    min-height: 50px;
        font-family: var(--font1);
        margin-top: 30px!important;
}
.filter_container h3{
    font-weight: 200;
    font-size: 14px;
    padding-left: 10px!important;
    padding-bottom: 5px!important;
}
.filter_container h4{
    font-weight: 300;
    font-size: 12px;
}
.filter_container hr{
    width: 90%;
}
.from_to{
/*     border: 1px solid black; */
    width: 80%;
    display: flex;
    justify-content: space-between;
    margin-top: 10px!important;
    margin-left: 20px!important;
}
.date, .time{
    background-color: transparent;
    border: none;
    cursor: pointer;
}

form{
    margin-top: 10px!important;

}
label{
    display: flex;
    margin-left: 20px!important;
    margin-top: 5px!important;
    font-weight: 200;
    font-size: 14px;

}
input{
    margin-right: 8px!important;
}

@media (min-width:1000px){
    .nav_main_container{
    position: absolute;
    top: 0px;
    width: 19%;
    height: 100%;
    border-radius: 0px 0px 0px 0px ;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: var(--color1);
}
.filter_container{
    min-height: 120px;
}
.filter_container h3{
    font-weight: 200;
    font-size: 18px;
    padding-bottom: 10px!important;
}
.filter_container h4{
    font-weight: 300;
    font-size: 14px;
}
.filter_container hr{
    color: rgb(0, 0, 0);
}
#filters_title{
    margin-top: 20px!important;
    font-weight: 400;
    letter-spacing: 5px;
    text-align: center;
    font-size: 24px;
}
#logo{
    display: unset;
    width: 60px;
    margin-top: 30px!important;
}
#taskwing_title{
    display: unset;
    font-family: var(--font1);
    font-weight: 200;
    font-size: 26px;
    color: #474747;
}
#logo:hover{
    filter: grayscale(50%);
    cursor: pointer;
    transition: .5s all ease-in-out;
}

}

</style>