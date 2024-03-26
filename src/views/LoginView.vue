<template>
    <div class="login_c  animate__animated animate__fadeIn">
        <section class="logo_c">
            <img src="../assets/logo.png" alt="" id="logo" class=" animate__animated animate__fadeInDown">  
            <h2 class=" animate__animated animate__fadeInUp">TASKWING</h2>
            <h4 class=" animate__animated animate__fadeInLeft">Turn your ideas into achievements</h4>
        </section>
        <!-- Container derecho -->
        <section class="right_c animate__animated animate__fadeInRight">
            <div class="user_title_c">
                <img src="../assets/user.png" alt="" id="user_img">
                <h1 id="user_title">User login</h1>
            </div>
            <div class="input_main_c">
                <div class="input_c">
                    <i class="fa-solid fa-envelope"></i>
                    <input type="email" name="" id="" placeholder="Email"  class="input" v-model="email" >
                </div>
                <div class="input_c">
                    <i class="fa-solid fa-key"></i>
                    <input type="password" name="" id="" placeholder="Password" class="input" v-model="password">
                </div>
                <div class="forgotp_remember_c">
                    <div id="remember_c">
                        <input type="checkbox">
                        <p id="remember">Remeber me</p>
                    </div>
                    <p id="forgot">Forgot password?</p>
                </div>
            </div>
            
        <div class="btn_c  animate__animated animate__fadeInUp">
            <button id="login_btn" @click="login">Login</button>
            <p>Create account</p>
        </div>
        </section>
    

    </div>
</template>

<script setup>
import {ref,onMounted} from 'vue'
import router from '../router'
import WOW from 'wow.js'
import 'animate.css'

const email = ref('')
const password = ref('')

const emit=defineEmits(['close-login-view'])

const login = () => {
    const url = `http://localhost:8080/api/login?email=${email.value}&password=${password.value}`;
    fetch(url, { method: "POST", credentials: 'include' })
        .then(res => {
            if (!res.ok) {
                throw new Error('Network response was not ok');
            }
            return res;
        })
        .then(data => {
            console.log(`logged ${email.value} ${password.value}`);
            router.push('/index');
        })
        .catch(err => console.error('Error fetching data:', err)); // Captura y maneja los errores
}

onMounted(()=>{
    const wow = new WOW(
        {
            duration:'0.3s'
        }
    )
    wow.init();
})
</script>
``
<style scoped>

.login_c{
    user-select: none;
    display: flex;
    flex-direction: column;
    height: 100vh;
    justify-content: center;
}
.logo_c{
    display: flex;
    flex-direction: column;
/*     border: 1px solid red; */
    align-items: center;
    gap: 8px;
}
h2{
    font-family: var(--font1);
    font-size: 40px;
    font-weight: 300;
    font-style: normal;
    color: #646464;
}
h4{
    font-family: var(--font3);
    font-weight: 200;
    font-size: 22px;
    color: #717171;
    letter-spacing: 3px;
}
#logo{
    width: 100px;
    transform: rotate(10deg);
}
.social_login_c{
/*     border: 1px solid brown; */
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;

}

.container_login{
    width: 309px;
    height: 54px;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    box-shadow: var(--boxshadow);

}

.facebook{
        background-color: #F3BC47;
}
.facebook:active{
        background-color: #ebdec1; 
}
.google{
        background-color: #C32E3B;
        color: white;
}
.google:active{
       background-color: #c58489;  
}
.container_login:hover{
    cursor: pointer;
}
.fa-square-facebook{
    color: #373737;
}
i{
        font-size: 40px;
}
#login_text{
    font-family: var(--font1);
    font-size: 16px;
    font-weight: 200;
}
/* .right_c{
        display: none;
    } */
/* CONTENEDOR DERECHO LOGIN */
.input_c{
    width: 80%;
    height: 55px;
    border: 1px solid #E1E1E1;
    background-color: white;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-top: 30px!important;
}
.input_c i {
    font-size: 18px;
    color: #454545;
}
.input{
    width: 80%;
    height: 50%;
    font-size: 14px;
    border: none;
    font-family: var(--font1);
    font-weight: 200;
    cursor: pointer;
    user-select: none;
}
.input:focus{
    outline: none;
}
.user_title_c{
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
    align-items: center;
    display: none;
}
#user_title{
    font-family: var(--font1);
    font-weight: 200;
    font-size: 45px;
    color: #454545;
}
#user_img{
    width: 107px;
}
.input_main_c{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.forgotp_remember_c{
    display: flex;
    justify-content: space-between;
    width: 76%;
    margin-top: 10px!important;
}
#remember_c{
    display: flex;
    gap: 5px;
    font-family: var(--font1);
    align-items: center;
    font-weight: 300;
    font-size: 12px;
}
#forgot{
    font-family: var(--font1);
    font-style: italic;
    font-weight: 200;
    font-size: 12px;
}
#forgot:hover{
    color: #3f3e3e;
    cursor: pointer;
}
#login_btn{
    width: 30%;
    height: 42px;
    background-color: #C32E3B;
    color: white;
    border: none;
    border-radius: 4px;
    font-size: 16px;
    font-family: var(--font1);
    font-weight: 300;
    margin-top: 20px!important;   
}
#login_btn:active{
   background-color: #c85660; 
}
#login_btn:hover{
 background-color: #c2404b;   
 cursor: pointer;
}
.btn_c{
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 15px;
    align-items: center;
}
.btn_c p{
    font-family: var(--font1);
    font-size: 14px;
    font-weight: 300;
}
.btn_c p:hover{
    color: #474747;
    cursor: pointer;
}
@media (min-width:1000px){
    .login_c{
        flex-direction: row;
        justify-content: space-between;
    }
    .logo_c{
/*         border: 1px solid red; */
        width: 950px;
        align-items: center;
        justify-content: center;
    }
    .right_c{
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        background-color: #F3BC47;
        height: 100vh;
        width: 600px;
    }
    .user_title_c{
    display: flex;
}
.input_c{
    height: 65px;
    border: none;
}
.input{
    font-size: 20px;
}
.input_c i {
    font-size: 25px;
}
#login_btn{
    width: 60%;
    height: 60px;
    background-color: #C32E3B;
    color: white;
    border: none;
    border-radius: 8px;
    font-size: 20px;
    font-family: var(--font1);
    font-weight: 200;
}
#remember_c{
    font-size: 14px;
}
#forgot{

    font-size: 14px;
}
}
</style>