import {useNavigate} from 'react-router-dom'
// import ProjectForm from '../projects/ProjectForm'
import styles from './NewTodo.module.css'

function NewTodo(){

    const navigate = useNavigate()

    return(
        <div className = {styles.newproject_container}>
            <h1>Criar Tarefa</h1>
            <p>Crie seu projeto para depois adicionar sos serviços</p>
            {/* <ProjectForm handleSubmit={creatPost} btnText="Criar Projeto"/> */}
        </div>
    )
}
export default NewTodo