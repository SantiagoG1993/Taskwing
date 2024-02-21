<template>
    <div class="main_component"> 
            <hr>
        <div class="filters_c">
            <h3 id="category_selected">All <i class="fa-solid fa-angle-down"></i></h3>
            <h3 id="category_selected">Today <i class="fa-solid fa-angle-down"></i></h3>
        </div>
        <h2 class="today">Today</h2>
        <div class="today_c">
            <Task />
            <Task />
            <Task />
            <Task />
            
        </div>
        <hr>
        <h2 class="today">Tomorrow</h2>
        <div class="today_c">
            <Task />
            <Task />
            <Task />
            <Task />
            <Task />
        </div>
        <hr>
        <h2 class="today">Other</h2>
        <div class="today_c">
            <Task />
            
        </div>
        
    </div>
</template>

<script setup>
import Task from '../components/Task.vue'
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
    font-family: var(--font2);
    font-weight: 200;
    font-size: 16px;
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
}

</style>