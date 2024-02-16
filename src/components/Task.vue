<template>
    <div class="main_component">
        <i class="fa-solid fa-pencil"></i>
        <h3 id="title">Estudiar por media hora</h3>
        <section class="data_c">
                <h3 id="time"><i class="fa-solid fa-clock clock2"></i>14:30</h3>
                <h3 id="date"><i class="fa-solid fa-calendar"></i>19/08</h3>
                <h3 id="category"><i class="fa-solid fa-star"></i>Default</h3>
            </section>
    </div>
</template>

<script setup>

</script>

<style scoped>
.main_component{
    width: 80%;
    user-select: none;
    height: 94px;
    background-color: #F3BC47;
    border-radius: 6px;
    justify-content: space-around;
    position: relative;
    box-shadow: var(--boxshadow);
}
#title{
    font-family: var(--font1);
    font-weight: 500;
    font-size: 17px;
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
.fa-pencil{
    color: white;
    position: absolute;
    right: 14px;
    top: 16px;
    cursor: pointer;
    font-size: 18px;
}
.fa-pencil:active{
    color: #474747;
}
</style>