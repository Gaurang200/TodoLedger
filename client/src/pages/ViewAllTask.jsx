import React, { useEffect, useState } from 'react'
import Navigation from './Navigation';


const ViewAllTask = () => {

  const [taskList , setTaskList] = useState([]);


    useEffect(()=>{
        const allTask = async () =>{
            try{
                const res = await fetch("http://localhost:5000/api/ethereum/view-all-task", {
                    method:"GET",
                    headers:{
                        "content-type":"application/json"
                    }
                })
                const data = await res.json()
                console.log(data);
                if(data.status ===200){
                    console.log(data.taskList);
                    setTaskList(data.taskList)
                }

            }catch(err){
                console.log(err);
            }
        }

        allTask()
    },[])


  return<>
      <Navigation/>
      <div className="view_all_tasks">
      {taskList.map((task)=>{
        return(
            <div 
            className="view_all_tasks_card"
            key={task.id}
            style={task.id!=="" && task.name!=="" && task.date!=="" ? {} : {display:"none"}}
            >   
                <p>{task.taskId}</p>
                <p>{task.name}</p>
                <p>{task.date}</p>
            </div>
        )
      })}
      </div>
    </> 
}

export default ViewAllTask