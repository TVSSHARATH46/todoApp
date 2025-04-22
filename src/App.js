import './App.css'
import { useState } from 'react'
import TodoItem from './components/TodoItem'
import { IoMdAddCircleOutline } from "react-icons/io";
const App = () => {
  const [name, setName] = useState('')
  const [taskList, addTask] = useState([])
  const onChangeName = event => {
    setName(event.target.value)
  }
  const onAddTask = event => {
    event.preventDefault()
      if(name.trim() !== ''){
        const newTask = {
          id: Date.now(),
          name: name,
          isCompleted: false
        }
        addTask([...taskList, newTask])
        setName('')
      }
      else{
        alert("!!Name should not be empty...")
      }
  }
  const onDeleteTask = id => {
    const updatedTaskList = taskList.filter(each => each.id !== id)
    addTask(updatedTaskList)
  }
  const modifyTask = id => {
    const updatedTasks = taskList.map(task =>{
      if(task.id === id){
        return {...task, isCompleted: !task.isCompleted}
      }
      return task
    })
    addTask(updatedTasks)
  }
  return (
    <div className='main-container'>
      <div className='inner-container'>
        <h1 className='heading'>Task Tracker</h1>
        <form onSubmit={onAddTask} className='form-container'>
          <input type='text' placeholder='Add Task' onChange={onChangeName} value={name} className='input-element' />
          <button type='submit' className='add-task-button'>
            <IoMdAddCircleOutline /> Add Task
          </button>
        </form>
        <ul className='task-list'>
          {
            taskList.map(eachTask => <TodoItem eachTask={eachTask} key={eachTask.id} onDeleteTask={onDeleteTask} modifyTask={modifyTask} />)
          }
        </ul>
      </div>
    </div>
  )
}

export default App