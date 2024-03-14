import { ref } from 'vue';

class ClientService {
    client;

    constructor(){
        this.client = ref([])
    }

    getClient(){
        return this.client
    }


    async fetchAll(){
        try{
            const url = 'http://localhost:8080/api/client/auth'
        await fetch(url,{method:"GET",credentials: 'include'})
        .then(res=>res.json())
        .then(data=> {
            this.client.value = data.taskList
        }
)
        }catch(error){
            console.log(error)
        }

    }

}
export default ClientService