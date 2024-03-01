import { ref } from 'vue';

class ClientService {
    client;

    constructor(){
        this.client = ref([])
    }

    getClient(){
        return this.client
    }


    fetchAll(){
        const url = 'http://localhost:8080/api/clients'
        fetch(url)
        .then(res=>res.json())
        .then(data=> {
            client = data[0]
        }
)
.catch(err=>console.log(err))
    }

}
export default ClientService