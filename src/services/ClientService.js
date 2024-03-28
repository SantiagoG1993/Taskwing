import { ref } from 'vue'

const API_URL = 'http://localhost:8080/api/'

    const ClientService = {
    authClient:ref([]),
    categories:ref([]),

    getAuthClient(){
        fetch(`${API_URL}client/auth`,{method:'GET',credentials:'include'})
        .then(res=>{
            if(!res.ok){
                throw new Error('error fetchin auth client')
            }else return res.json()
        })
        .then(data=>{
            console.log(data)
            this.authClient.value=data;
        })
    },

    getCategories(){
        fetch(`${API_URL}categories`,{method:'GET',credentials:'include'})
        .then(res=>{
            if(!res.ok){
                throw new Error('error fetching categories')
            }else return res.json()
        })
        .then(data=>{   
            console.log(data)
            this.categories.value = data
        })
    }
}
export default ClientService