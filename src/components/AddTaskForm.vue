<template>
    <div class="addTask_main_container">
         <section class="upper_menu">
                <i class="fa-solid fa-arrow-left" @click = 'handleClick' ></i>
                <h2 id="info_title"> Add new task </h2>
        </section>  
        <form action="" class="addtask_form">
            <label for="title">What is to be done?</label>
                <input type="text" placeholder="Enter task here" class="input_text">
            <label for="title">Due date</label>
                <input type="date" placeholder="Enter date here" class="input_text">
            <label for="title">Time</label>
                <input type="time" placeholder="Enter time here" class="input_text">
                <input type="text" placeholder="Description" id="input_description">
                <label for="category" id="category">Category</label>
                <select name="category" id="select_category">
                    <option value="">Default</option>
                    <option value="">Call</option>
                    <option value="">Meeting</option>
                </select>
        </form>
        <section class="color_select_c">
            <h2 id="color_title">Color</h2>
            <div class="color_option color1"></div>
            <div class="color_option color2"></div>
            <div class="color_option color3"></div>
            <div class="color_option color4"></div>
            <div class="color_option color5"></div>
        </section>
        <div class="ok_btn">
            <i class="fa-solid fa-check"></i>
        </div>
    </div>
</template>

<script setup>
import {defineEmits} from 'vue';


const emit = defineEmits(['close-add-task'])

const handleClick  = ()=>{
    emit('close-add-task')
}


</script>

<style scoped>
.addTask_main_container{
    width: 100%;
    height: 100vh;
    z-index: 1000;
    background-color: var(--color1);
    position: fixed;
    top: 0px;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.upper_menu{
    height: 60px;
    width: 100%;
background-color: #E78231;
    display: flex;
    color: #820F0F;
    align-items: center;
}
.fa-arrow-left{
    font-size: 35px;
    margin-left: 20px!important;
}
.fa-arrow-left:active{
    color: #FBD990;
}
#info_title{
    font-family: var(--font2);
    font-weight: 400;
    font-size: 18px;
    margin-left: 25px!important;
}
/* Form */

.addtask_form{
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 10px;
    padding: 30px 0px 30px 20px!important;
}
.input_text{
    border: none;
    background-color: transparent;
    border-bottom: 2px solid #C32E3B;
    padding: 10px!important;
    width: 80%;
}
.input_text:focus{
    outline: none;
    background-color: #E78231;
    cursor: pointer;
}
label{
    font-family: var(--font2);
    color: #C32E3B;
}
#input_description{
    width: 80%;
    height: 75PX;
    border: none;
    padding-left: 15px!important;
    font-family: var(--font2);
    background-color: #FBD990;
    margin-top: 20px!important;
    border-radius: 3px;
}
#input_description:focus{
    outline: none;
}
#select_category{
    border: none;
    width: 80px;
    background-color: transparent;
    font-family: var(--font2);
    margin-left: 10px!important;
    color: #474747;
    font-weight: 300;
}
.color_select_c{
    border-radius: 3px;
    width: 340px;
    height: 49px;
    background-color: #93212E;
    box-shadow: var(--boxshadow);
    display: flex;
    align-items: center;
    justify-content: space-around;
}
#color_title{
    font-family: var(--font2);
    color: white;
    font-weight: 400;
    font-size: 20px;
}
.color_option{
    width: 35px;
    height: 70%;
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
.ok_btn{
    border-radius: 50%;
    width: 60px;
    height: 60px;
    background-color: #C32E3B;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: var(--boxshadow);
    position: absolute;
    right: 20px;
    bottom: 20px;
}
.ok_btn:active{
    background-color: #c85c65;
}
.ok_btn i {
    font-size: 30px;
}
@media (min-width:1000px){
    .addTask_main_container{
    width: 70%;
    border: 2px solid #F3BC47;
    background-color: #ffffff;
    height: 300px;
    align-items: start;
    position: fixed;
    top: 5%;
    left: 20%;
    box-shadow: var(--boxshadow);
}
.upper_menu{
    display: none;
}
.addtask_form{
    width: 50%;
}
form{
    position: relative;
}
#category{
position: absolute;
top: 20%;
left: 90%;
}
#select_category{
position: absolute;
top: 28%;
left: 88%;
}
#input_description{
    position: absolute;
    background-color: #ededed;
    top: 60%;
    left: 90%;
}
.color_select_c{
    position: absolute;
    top: 45%;
    right: 7%;
}
.ok_btn:hover{
    background-color: #9f5050;
    cursor: pointer;
}
}
</style>