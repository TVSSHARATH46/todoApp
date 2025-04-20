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
    return(
        <li className='list-item'>
            <button onClick={onModifyTask} className='modify-task'>
                {
                    isCompleted === true ? "is completed": 'not completed'
                }
            </button>
            <h1>{name}</h1>
            <button onClick={deleteTask}>delete task</button>
        </li>
    )
}

export default TodoItem