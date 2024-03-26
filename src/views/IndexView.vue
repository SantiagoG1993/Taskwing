<template>
    <div class="index_c"> 
        <section class="next_task_c">
            <i class="fa-solid fa-bars" @click="toggleNavBar"></i>
            <NextTaskComponent
                v-if="nextTask"
            :taskName="nextTask.taskName ?? 'No task available'" 
            :remaining="remainingTime ?? 'Not available'"
            :description="nextTask.description ?? 'No description available'"
            :category="nextTask.category ?? 'No category available'"
            :time="nextTask.time ?? 'No time available'"
            :date="nextTask.date ?? 'No date available'"
            :id="nextTask.id ?? 'No id available'"
            :color="nextTask.color ?? 'No color avalaible'"
            :userName="authClient.name ?? 'No username avalaible'"
            @logout="logout"
            />
        </section>
        <TaskSection />
        <section class="add_task_c">
        <i class="fa-solid fa-trash-can"></i>
            <div id="add_task_btn" @click="toggleAddTask">
                <p id="add_text">Add new task</p>
            <i class="fa-solid fa-plus"></i>    
            </div>
        </section>
        <div v-if="addtaskIsOpen == true" ref="addTaskContainer" >
            <AddTaskForm @close-add-task = 'addtaskIsOpen = false'
            @update-list="loadData"/>
        </div>
        <div v-if="navBarIsOpen == true">
            <NavBarComponent  
            @close-navbar="toggleNavBar"
            @logout="logout"/>  
        </div>
        <div class="logo_social_c wow animate__animated animate__fadeInUp">
            <img src="../assets/logo.png" alt="">
            <p id="taskwing_logo">TASKWING</p>
            <p id="slogan">Turn your ideas into achievements</p>
            <hr>
            <div class="social">
                <p>Follow us on:</p>
                <i class="fa-brands fa-instagram"></i>
                <i class="fa-brands fa-facebook"></i>
                <i class="fa-brands fa-x-twitter"></i>
            </div>

        </div>
    </div>
</template>

<script setup>
import {ref,onMounted} from 'vue';
import {onClickOutside} from '@vueuse/core'
import Swal from 'sweetalert2'
import router from '../router'
import NextTaskComponent from '../components/NextTaskComponent.vue'
import TaskSection from '../components/TaskSection.vue'
import AddTaskForm from '../components/AddTaskForm.vue'
import NavBarComponent from '../components/NavBarComponent.vue'
import WOW from 'wow.js'

const addtaskIsOpen = ref(false);
const navBarIsOpen = ref(true);
const addTaskContainer = ref(null)
const remainingTime = ref('')
const authClient=ref([])

const nextTask = ref(null)


const loadData = () => {
    const url = 'http://localhost:8080/api/client/auth';
    fetch(url,{method:"GET",credentials: 'include'})
        .then(res => {
            if(res.ok){
                return res.json()
            }
        })
        .then(data => {
            authClient.value=data
            console.log("auth "+ data)
            const now = new Date();
            let closestTask = null;
            let closestTimeDifference = Infinity;
            let taskList = data.taskList.filter(t=>t.state == 'PENDING')

            for (const task of taskList) {
                const taskDateTime = new Date(`${task.date}T${task.time}`);
                const timeDifference = taskDateTime - now;

                if (timeDifference > 0 && timeDifference < closestTimeDifference) {
                    closestTask = task;
                    closestTimeDifference = timeDifference;
                }
            }
            if (closestTask) {
                nextTask.value = closestTask;
                setInterval(() => {
        const now = new Date();
        const taskDateTime = new Date(`${nextTask.value.date}T${nextTask.value.time}`);
        const timeDifference = taskDateTime - now;
        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
        remainingTime.value = `${days}d, ${hours}h, ${minutes}m, ${seconds}s`;
    }, 100); // Actualizar cada segundo
                
            } else {
                console.log("No hay tareas futuras.");
            }
        })
        .catch(error => {
            console.error("Error al cargar los datos:", error);
        });
}
const logout =()=>{
    Swal.fire(
        {
            title:'Logout',
            showConfirmButton:true,
            showDenyButton:true,
            icon:'question'
        },    
    )
    .then(result=>{
        if(result.isConfirmed){
        const url='http://localhost:8080/api/logout'
        fetch(url,{method:'POST',credentials:'include'})
        .then(res=>{
        if(res.ok){
            router.push('/')
            return res
        }else{
            throw new Error('logout error')
        }
    })
    .then(data=>console.log(data))
    .catch(err=>console.log(err))
        }
    })

}
onMounted(()=>{
    const wow = new WOW(
        {
            duration:'0.3s'
        }
    )
    wow.init();
    loadData();
})

const handleResize = () => {
    navBarIsOpen.value = window.innerWidth > 1000;
}
handleResize();

const toggleNavBar = ()=> {
    if (window.innerWidth <= 1000) {
        navBarIsOpen.value = !navBarIsOpen.value;
    }
}
window.addEventListener('resize', handleResize);

const toggleAddTask = ()=>{
document.documentElement.style.overflow="hidden"   
addtaskIsOpen.value = true
}
onClickOutside(addTaskContainer, ()=>{
document.documentElement.style.overflow=""   
addtaskIsOpen.value = false
})


</script>

<style scoped>
#add_text{
    display: none;
}
    .logo_social_c{
        display: none;
    }
.index_c{
    height: 100%;
    position: relative;

}
.next_task_c{
    height: 20vh;
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 5px;
}
.fa-bars{
    font-size: 30px;
    color: #474747;
    align-self: end;
    margin-right: 20px!important;
    margin-top: 20px!important;

    
}
.fa-bars:active{
    color: #F3BC47;
}
.add_task_c{
    height: 90px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 30px!important;
/*     position: absolute;
    width: 100%;
    bottom: 20px; */
}
#add_task_btn{
    background-color: #F3BC47;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    box-shadow: var(--boxshadow);
    display: flex;
    justify-content: center;
    align-items: center;
}
#add_task_btn:active{
    background-color: #474747;
    cursor: pointer;
}
.fa-plus{
    color: white;
    font-size: 30px;
}
.fa-trash-can{
    color: rgb(67, 67, 67);
    font-size: 35px;
}
.fa-trash-can:active{
    color: #F3BC47;  
}
@media (min-width:1000px){
    .fa-bars{
        display: none;
    }
    .index_c{
        display: flex;
        flex-direction: column;
    }
    #add_task_btn{
        border-radius: 5px;
        width: 250px;
        height: 55px;
        background-color: #C32E3B;
        position: fixed;
        bottom: 30px;
        right: 120px;
        gap: 15px;
    }
    #add_task_btn:hover{
    background-color: #cb5f68; 
    cursor: pointer;
    }
    #add_text{
        display: unset;
        font-family: var(--font1);
        color: white;
        font-weight: 300;
    }

    /* LOGO FOOTER *************************************/
    .logo_social_c{
        user-select: none;
        display: unset;
        align-self: center;
        width: 400px;
        min-height: 250px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin-left: 150px!important;
        margin-bottom: 30px!important;
    }
    .logo_social_c img{
        width: 100px;
    }
    #taskwing_logo{
        font-size: 40px;
        font-family: var(--font1);
        color: #474747;
    }
    #slogan{
        font-family: var(--font3);
        font-size: 22px;
        letter-spacing: 4px;
        color: #717171;
    }
    .logo_social_c hr{
        width: 100%;
        color: white;
        margin-top: 10px!important;
    }
    .social{
        margin-top: 3px!important;
        display: flex;
        align-items: center;
        gap: 10px;
    }
    .social p{
        font-family: var(--font1);
        font-size: 14px;
    }
    .social i{
        font-size: 26px;
        color: #717171;
    }
    .social i:hover{
        cursor: pointer;
        color: #474747
    }
    
}

</style>