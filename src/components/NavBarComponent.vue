<template>
    <div class="nav_main_container" ref="main_container">
        <img src="../assets/logo.png" alt="" id="logo">
        <h1 id="taskwing_title">TASKWING</h1>
        <h2 id="filters_title">Filters</h2>
        <div class="filter_container">
            <h3>Filter by date</h3>
            <hr>
            <h4 class="from_to">From <i class="fa-solid fa-calendar"></i> 19/08</h4>
            <h4 class="from_to">To <i class="fa-solid fa-calendar"></i>19/08</h4>
        </div>
        <div class="filter_container">
            <h3>Filter by time</h3>
            <hr>
            <h4 class="from_to">From <i class="fa-solid fa-clock"></i>09:30</h4>
            <h4 class="from_to">To<i class="fa-solid fa-clock"></i>09:30</h4>
        </div>
        <div class="filter_container">
            <h3>Filter by category</h3>
            <hr>
            <form action="">
                <label for="">
                    <input type="checkbox">Default
                </label>
                <label for="">
                    <input type="checkbox">Call
                </label>
                <label for="">
                    <input type="checkbox">Meeting
                </label>
                <label for="">
                    <input type="checkbox">Home
                </label>
            </form>
        </div>
        <div class="filter_container">
            <h3>Filter by State</h3>
            <hr>
            <form action="">
                <label for="">
                    <input type="checkbox">Pending
                </label>
                <label for="">
                    <input type="checkbox">Finished
                </label>
                <label for="">
                    <input type="checkbox">Deleted
                </label>
            </form>
        </div>
    </div>
</template>

<script setup>
import {ref, defineEmits} from 'vue';
import {onClickOutside} from '@vueuse/core';

const emit = defineEmits(['close-navbar'])

const main_container = ref(null);

onClickOutside(main_container,()=>{
emit('close-navbar')
console.log('click afuera')
})

</script>

<style scoped>
#logo,#taskwing_title{
    display: none;
}
.nav_main_container{
    user-select: none;
    position: fixed;
    top: 0px;
    width: 190px;
    height: 90vh;
    border-radius: 0px 10px 10px 0px ;
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
    width: 130px;
    display: flex;
    justify-content: space-between;
    margin-top: 10px!important;
    margin-left: 20px!important;
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
}

</style>