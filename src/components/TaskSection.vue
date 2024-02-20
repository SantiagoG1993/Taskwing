<template>
    <div class="main_component"> 
        <div class="filters_c">
            <h3 id="category_selected">All <i class="fa-solid fa-angle-down"></i></h3>
            <h3 id="category_selected">Today <i class="fa-solid fa-angle-down"></i></h3>
        </div>
        <div class="today_c">
            <h2 class="today">Today</h2>
            <Task />
            <Task />
            <Task />
        </div>
        <hr>
        <div class="today_c">
            <h2 class="today">Tomorrow</h2>
            <Task />
            <Task />
            <Task />
        </div>
        <hr>
        <div class="today_c">
            <h2 class="today">Other</h2>
            <Task />
            <Task />
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
    min-height: 200px!important;
    margin-bottom: 10px!important;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
/*     position: relative; */
/*     border: 1px solid red;
 */}
.today{
    font-family: var(--font2);
    font-weight: 200;
    font-size: 16px;
    align-self: flex-start;
    margin-left: 20px!important;
    margin-bottom: 10px!important;
    margin-top: 5px!important;
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
    margin-top: 70px!important;
}
    .today_c{
    flex-direction: row;
    width: 70%;
    height: 200px;
    align-items: center;
    justify-content: center;
    }
}
hr{
    width: 80%;
    color: rgb(255, 255, 255);
}
/* .today{
    font-family: var(--font2);
    font-weight: 300;
    font-size: 16px;
    position: absolute;
    left: -30px;
} */
#category_selected{
    display: none;
}
</style>