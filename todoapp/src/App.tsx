import React , { ChangeEvent, FC, useState} from 'react';
import './App.css';
import { Itask } from './interface';
import TodoTask from './todoTask/TodoTask';

const App:FC=()=> {

 const [task , setTask] =useState<string>("")
 const [deadline , setDeadline] =useState<number>(0)
 const [ todolist , setTodoList]=useState<Itask[]>([])
 const handleChange =(event:ChangeEvent<HTMLInputElement>)=>{
  if (event.target.name === "task" ){
 setTask(event.target.value)

  
  }
  else{
    setDeadline(Number(event.target.value))
  }
 }

function addTask(){

  
  const newTask = {taskName:task , Deadline:deadline}
  setTodoList([...todolist,newTask]);
  setTask("");
  setDeadline(0)


}

const copmleteTask=(taskNametodelete:string):void=>{
  setTodoList(todolist.filter((task)=>{
    return task.taskName !== taskNametodelete
  }))

}
  return (
    <div className="App ">
      <div className="container w-50 pt-5 p-3">
      <div className="header ">
<input type="text" className='form-control mb-2' value={task} name='task' placeholder='task..' onChange={handleChange} />
<input type="number" className='form-control' onChange={handleChange} value={deadline} name='deadline' placeholder='Deadline (In Days)..' />
</div>
<button className='btn btn-info mt-2' onClick={addTask}> Add Task</button>
      </div>
 <div className="todolist">
  {todolist.map((task:Itask ,key:number)=>{
    return <TodoTask key={key}  completeTask={copmleteTask} task={task}/>

  })}
 </div>
    </div>
  );
}

export default App;
