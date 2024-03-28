const API_URL = 'http://localhost:8080/api/'
import Swal from 'sweetalert2'
import router from '../router'

const TaskServices = {


    addTask (taskName,description,category,date,time,color) {

        if (!taskName.trim() || !description.trim() || !time.trim() || !date.trim() || !color.trim() || !category.trim()) {
            Swal.fire("All fields are required", "", "warning");
            return;
        }
        Swal.fire({
            title: "Do you want add this task?",
            icon:"question",
            showDenyButton: true,
            confirmButtonText: "Ok",
            denyButtonText: `Cancel`,

        }).then((result) => {
            if (result.isConfirmed) {
                const datos = {
                    taskName:taskName,
                    description:description,
                    category:category,
                    date:date,
                    time:time,
                    color:color
                }

                const options = {
                    method: 'POST',
                    credentials:'include',
                    headers:{
                        'Content-Type':'application/json'
                    },
                    body:JSON.stringify(datos)
                };
                fetch(`${API_URL}task`, options)
                    .then(res => {
                    if(!res.ok){
                        throw new Error('error creating task')
                    }else return res
                    })
                    .then(data => {
                        console.log(data)
                        window.location.reload();
                    })
                    .catch(err => console.log(err));
            } else if (result.isDenied) {
                Swal.fire("Cancelled", "", "info");
            }
        });
    },
    finishTask(id){
        Swal.fire(
            {
                title:'Finish this task?',
                icon:'question',
                showDenyButton:true,
                showConfirmButton:true,
                denyButtonText:'Cancel'
            }
        )
        .then(
            (result)=>{
                if(result.isConfirmed){
                    const url=`${API_URL}task/finish?id=${id}`;
                    const options = {method:'PUT'}
                        fetch(url,options)
                        .then(res=>console.log(res))
                        .then(data=>{console.log(data)
                            router.push('/index')})
                        .catch(err=>console.log(err))
                    Swal.fire('Task finished','','success')
                }else if(result.isDenied){
                    Swal.fire('Cancelled','','info')
                }
            }
        )
        
    },
    deleteTask (id){
        Swal.fire(
            {
                title:"Delete task?",
                showConfirmButton:true,
                showDenyButton:true,
                denyButtonText:'Cancel',
                icon:'question'
            }
        )
        .then(
            (result)=>{
                if(result.isConfirmed){
                    const options = {
                        method: 'PUT',
                    };
                    fetch(`${API_URL}task/delete?id=${id}`, options)
                        .then(res => {
                            console.log(res);
                        })
                    .catch(err => console.log(err));
                    Swal.fire("Successfully deleted","","success")
                }else if(result.isDenied){
                Swal.fire("Cancelled","","info")  
                }
            }
        )
                
            }  
        


}
export default TaskServices