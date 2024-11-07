import styles from './NewTodo.module.css'
import TodoForm from '../components/TodoForm/TodoForm'
import { useStoreActions } from '../services/store/hooks'

function NewTodo(){

    const addTodo = useStoreActions((actions)=>actions.addTodo)

    return(
        <div className = {styles.newproject_container}>
            <h1>Criar Tarefa</h1>
            <TodoForm  goTo='/mytodos' handleSubmit={addTodo} btnText="Criar Tarefa"/>
        </div>
    )
}
export default NewTodo