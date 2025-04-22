import { FaRegCircleXmark } from "react-icons/fa6";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { MdOutlineDeleteOutline } from "react-icons/md";
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
            <button onClick={onModifyTask} className="modify-task">
                {
                    isCompleted === true ? <FaRegCircleXmark /> : <IoIosCheckmarkCircleOutline />
                }
            </button>
            <h1 className={taskName}>{name}</h1>
            <button onClick={deleteTask} className='delete-task-button'>
                <MdOutlineDeleteOutline />
            </button>
        </li>
    )
}

export default TodoItem