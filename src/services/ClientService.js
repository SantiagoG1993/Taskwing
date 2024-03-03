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
            const url = 'http://localhost:8080/api/clients'
        await fetch(url)
        .then(res=>res.json())
        .then(data=> {
            this.client.value = data[0].taskList
        }
)
        }catch(error){
            console.log(error)
        }

    }

}
export default ClientService