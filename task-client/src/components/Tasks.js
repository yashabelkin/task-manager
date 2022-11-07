import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios';



const Tasks = () => {
    const URL = 'http://localhost:8000/api/v1/lists'
    const [tasks, setTasks] = useState("")

    async function getTasks(id) {
        await axios.get(`${URL}/${id}`).then((response) => {
                  console.log(response.data.lists);
                  setTasks(response.data.lists);
                  console.log(tasks)
       
                })
   }

   
   useEffect(() => {
    getTasks()
   }, [])
    return (
    <div>Tasks</div>
  )
}

export default Tasks