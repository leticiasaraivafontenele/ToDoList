import { MouseEventHandler } from 'react';
import style from './TaskCard.module.css'
import {BsPencil, BsFillTrashFill} from 'react-icons/bs'
import {Link} from 'react-router-dom'
import { useStoreActions } from '../../services/store/hooks';

interface ITaskCardPros {
    id: number;
    title: string;
    description: string;
    completed: boolean;
    handleRemove: (id: number)=>void
}

function TaskCard({id, title, description, completed, handleRemove}:ITaskCardPros){

    const remove: MouseEventHandler<HTMLButtonElement> =(e)=>{
        e.preventDefault()
        handleRemove(id)
    }

    const updateTodo = useStoreActions((actions)=>actions.updateTodo)

    return(
        <div className={style.project_card}>
            <div className={style.project_header}>
                <p className={style.category_text}>
                    <span className={style[completed as unknown as string]}></span>
                </p>
                <h4>{title}</h4>

            </div>
            <div className={style.project_card_actions}>
                <Link to={`/edittodo/${id}`} >
                    <BsPencil/>
                </Link>
                <button onClick={remove}>
                    <BsFillTrashFill/>
                </button>
            </div>
            <div className={style.project_paper}>
                <p>{description}</p>
            </div>
            {!completed && (
                <div className={style.btn_completed}>
                    <button onClick={()=>updateTodo({id: id, title: title,  description: description, completed: true})}>
                         Completo
                    </button>      
                </div>

            )}
        </div>
    )
}
export default TaskCard