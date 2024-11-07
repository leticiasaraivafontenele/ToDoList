import {ChangeEventHandler, FormEventHandler, useState} from 'react'
import Input from '../Input/Input'
import SubtmitButton from '../SubmitButton/SubmitButton'
import styles from "./TodoForm.module.css"
import { Todo } from '../../services/store/store'

interface ITodoFormProps {
    handleSubmit: (todo: Omit<Todo, 'id'>)=>void
    edit: boolean
    btnText: string
    todoData?: Todo
}

function TodoForm({handleSubmit, btnText, todoData, edit}:ITodoFormProps){

    const [todo, setTodo] = useState(todoData || {title: '', description: '', completed: false})

    const submit : FormEventHandler<HTMLFormElement>= (e)=>{
        e.preventDefault()
        handleSubmit(todo)
    }

    const handleChange: ChangeEventHandler<HTMLInputElement> = (e)=>{
        setTodo({...todo, [e.target.name]: e.target.value})
    }

    return <form onSubmit={submit} className={styles.form}>
        <Input type ='text'text="Título: " name="title" placeholder="Insira o titulo da tarefa..." handlerOnChange={handleChange} value={todo.title? todo.title: ""}/>
        <Input type ='text'text="Descrição: " name="description" placeholder="Insira um descrição da tarefa..." handlerOnChange={handleChange} value={todo.description? todo.description:""}/>
        {/* {edit && (
            <Input type ='radio'text="Completo: " name="completed" placeholder=" " handlerOnChange={handleChange} value={todo.completed}/>
        )} */}
        <SubtmitButton text={btnText}/>
    </form>
}
export default TodoForm