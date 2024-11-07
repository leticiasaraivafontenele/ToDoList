import { useParams } from "react-router-dom"
import TodoForm from "../components/TodoForm/TodoForm"
import { useStoreActions, useStoreState } from "../services/store/hooks"
import styles from './EditTodo.module.css'

export default function EditTodo(){

    const {id} = useParams()
    const updateTodo = useStoreActions((actions)=>actions.updateTodo)

    const todos = useStoreState((state)=>state.todos)
    const thisTodo = todos.find(todo => todo.id === (id as unknown as number))

    return(
        <div className = {styles.newproject_container}>
            <h1>Editar Tarefa</h1>
            <TodoForm goTo='/mytodos' todoData={thisTodo} edit={true} handleSubmit={updateTodo} btnText="Editar Tarefa"/>
        </div>
    )
}