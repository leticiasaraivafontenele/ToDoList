import {ChangeEventHandler, FormEventHandler, useState} from 'react'
import Input from '../Input/Input'
import SubtmitButton from '../SubmitButton/SubmitButton'
import styles from "./TodoForm.module.css"
import { Todo } from '../../services/store/store'
import { useNavigate } from 'react-router-dom'
import Select from '../Select/Select'

interface ITodoFormProps {
    handleSubmit: (todo: {id?: number, title: string, description: string, completed: boolean})=>void
    edit?: boolean
    btnText: string
    todoData?: Todo
    goTo: string
}

function TodoForm({handleSubmit, btnText, todoData, goTo, edit}:ITodoFormProps){

    const [todo, setTodo] = useState(todoData || {title: '', description: '', completed: false})
    const navigate = useNavigate()

    const submit : FormEventHandler<HTMLFormElement>= (e)=>{
        e.preventDefault()
        navigate(goTo)
        handleSubmit(todo)
    }

    const handleChange: ChangeEventHandler<HTMLInputElement> = (e)=>{
        setTodo({...todo, [e.target.name]: e.target.value})
    }

    const options = [{id: '1', name: "Completo"},{id: '0', name: "Incompleto"}]

    const handleCompleted:ChangeEventHandler<HTMLSelectElement>=(e)=>{
        setTodo({...todo, completed: e.target.value === '1'? true:false
        })
    }

    return <form onSubmit={submit} className={styles.form}>
        <Input type ='text'text="Título: " name="title" placeholder="Insira o título da tarefa..." handlerOnChange={handleChange} value={todo.title? todo.title: ""}/>
        <Input type ='text'text="Descrição: " name="description" placeholder="Insira um descrição da tarefa..." handlerOnChange={handleChange} value={todo.description? todo.description:""}/>
        {edit && (
            <Select handlerOnChange={handleCompleted}options={options} name='completed' text='Completo: ' value={todo.completed? '1' : '0'} />
        )}
        <SubtmitButton text={btnText}/>
    </form>
}
export default TodoForm