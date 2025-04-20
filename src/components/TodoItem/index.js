import './index.css'

const TodoItem = props =>{
    const {eachTask, onDeleteTask, modifyTask} = props
    const {id, name, isCompleted} = eachTask
    const deleteTask = () =>{
        onDeleteTask(id)
    }
    const onModifyTask = () => {
        modifyTask(id)
    }
    const taskName = isCompleted?'text-dashed':'text-normal'
    return(
        <li className='list-item'>
            <button onClick={onModifyTask} className='modify-task'>
                {
                    isCompleted === true ? "is completed": 'not completed'
                }
            </button>
            <h1 className={taskName}>{name}</h1>
            <button onClick={deleteTask} className='delete-task-button'>delete task</button>
        </li>
    )
}

export default TodoItem