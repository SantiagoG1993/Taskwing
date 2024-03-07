<template>
    <div class="task_info_c">
        <section class="upper_menu" :style="{backgroundColor : getColor(props.color)}">
                <i class="fa-solid fa-arrow-left" @click = 'handleClick' ></i>
                <h2 id="info_title">{{props.taskName}}</h2>
        </section>   
        <div class="task_description_c">
            <p id="text_description">{{props.description}}</p>
        </div>
        <section class="info_data_c">
            <h3 id="date"><i class="fa-solid fa-calendar"></i>{{props.date}}</h3>
            <h3 id="time"><i class="fa-solid fa-clock clock2"></i>{{props.time}}</h3>
            <h3 id="category"><i class="fa-solid fa-star"></i>{{props.category}}</h3>
        </section>
        <div class="edit_task_btn" @click="editTaskIsOpen = true">
            <i class="fa-solid fa-pencil"></i>
        </div>
        <div v-if="editTaskIsOpen == true">
            <EditTask @close-edit-task="editTaskIsOpen = false" />
        </div>
    </div>
</template>

<script setup>
import {defineEmits, ref,defineProps} from 'vue';
import EditTask from '../components/EditTask.vue';

const editTaskIsOpen = ref(false)

const emit = defineEmits(['close-info'])

const props = defineProps(
    {
        taskName:String,
        description:String,
        date:String,
        color:String,
        time:String,
        category:String
    }
)

const handleClick = ()=>{
    emit('close-info')
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
      return color.GREY;
  }
}
</script>

<style scoped>
.task_info_c{
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0px;
    background-color: #F3BC47;
    display: flex;
    position: relative;
    flex-direction: column;
    align-items: center;
    z-index: 3;
}
.upper_menu{
    height: 60px;
    width: 100%;
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
.task_description_c{
    width: 80%;
    min-height: 200px;
    background-color: #FBD990;
    border-radius: 8px;
    margin-top: 50px!important;
    display: flex;
    justify-content: center;
    padding-top: 20px!important;
}
#text_description{
    font-family: var(--font2);
    font-weight: 300;
    text-align: center;
}
/* INFO TIME DATE CATEGORY */
.info_data_c{
    width: 80%;
    height: 220px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    color: white;
    font-family: var(--font2);
    margin-top: 20px!important;
}
#time, #date, #category{
    display: flex;
    align-items: center;
    gap: 20px;
    font-size: 30px;
    font-weight: 300;
}
.info_data_c i {
    font-size: 40px;
}


/* BTN ADD TASK */


.edit_task_btn{
    background-color: #C32E3B;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    bottom: 30px;
    right: 30px;
    box-shadow: 2px 2px 5px 0px rgb(86, 86, 86);
}
.edit_task_btn:active{
        background-color: #c6565f; 
}
.fa-pencil
    {
    color: white;
    font-size: 25px;
    }   
    @media (min-width:1000px){
        .task_info_c{
            width: 81%;
            margin-left: 19%!important;
            background-color: white;
        }
        .info_data_c{
            flex-direction: row;
        }
        .info_data_c h3{
            color: black;
        }
        .fa-arrow-left:hover{
            cursor: pointer;
            color: white;
        }
        .edit_task_btn{
            display: none;
        }
    }
</style>