const API_URL = 'http://localhost:8080/api/'
import router from '../router'
import Swal from 'sweetalert2';

const AuthServices = {

    registerClient(email,password,confirmPassword){
    if(password != confirmPassword){
            Swal.fire('Paswword incorrect','','error')
    } if(email == ''){
            Swal.fire('Please enter your email','','error')
    } if(password == ''){
        Swal.fire('Please enter your password','','error')
    }if(confirmPassword == ''){
        Swal.fire('Pleas confirm your password','','error')
    }else{
        fetch(`${API_URL}client/register?email=${email}&password=${password}`,{method:'POST',credentials:'include'})
        .then(res=>{
            if(!res.ok){
                throw new Error('error trying to register')
            }else return res
        })
        .then(data=>{
            console.log(data)
            this.login(email,password)
            router.push('/index')
        })
        .catch(err=>console.log(err))
    }
},

    login(email,password){
        fetch(`${API_URL}login?email=${email}&password=${password}`,{method:'POST',credentials:'include'})
        .then(res=>{
            if(!res.ok){
                throw new Error('Error login client')
            }else return res
        })
        .then(data=>{console.log(data)
        router.push('/index')
    })
        .catch(err=>console.log(err))
    },

    logout(){
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
            fetch(`${API_URL}logout`,{method:'POST',credentials:'include'})
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
}
export default AuthServices;