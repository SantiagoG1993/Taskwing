<template>
    <div  class="main_container">
        <h3 id="title"><i class="fa-solid fa-clock clock1"></i>Next task in: <span id="watch">12:50h</span></h3>
        <div class="nextTask_c">
            <h2 id="taskName">Pasear al perro</h2>
            <section class="data_c">
                <h3 id="time"><i class="fa-solid fa-clock clock2"></i>14:30</h3>
                <h3 id="date"><i class="fa-solid fa-calendar"></i>19/08</h3>
                <h3 id="category"><i class="fa-solid fa-star"></i>Default</h3>
            </section>
        </div>
    
    </div>
</template>

<script setup>

</script>

<style scoped>
.main_container{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
}
.nextTask_c{
    user-select: none;
    width: 95%;
    height: 50px;
    background-color: #4EAC94 ;
    border-radius: 4px;
    box-shadow: var(--boxshadow);
    display: flex;
    flex-direction: column;
    align-items: center;
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
</style>