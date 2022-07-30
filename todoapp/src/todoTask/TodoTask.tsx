import React from 'react'
import { Itask } from '../interface'

interface props {
    task:Itask;
    completeTask(taskNametodelete:string) :void
}
export default function TodoTask({task , completeTask}:props) {
  return (
    <div className="container w-50"> 
  
    <div className='bg-white rounded-2 '>
        <div className="row mb-2 align-items-center" >
          <div className="col-md-4 ">   
           {task?.taskName}
            </div>
          <div className="col-md-4">   
          {task?.Deadline}
          </div>
          <div className="col-md-4">   
          <button onClick={()=> 
            completeTask(task.taskName)
            } className='btn btn-danger w-100'>Delete</button>
          </div>
            </div>
       
            </div>
        </div>
    
  
 
 
  )
}
