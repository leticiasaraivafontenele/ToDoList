import { action } from "easy-peasy";
import Container from "../components/Container/container";
import LinkButton from "../components/LinkButton/LinkButton";
import Message from "../components/Message/Message";
import TaskCard from "../components/TaskCard/TaskCard";
import { useStoreActions, useStoreState } from "../services/store/hooks";
import style from './MyTodos.module.css'

export default function MyTodos(){

    const todos = useStoreState((state)=>state.todos)
    const handleRemove = useStoreActions((actions)=>actions.removeTodo)
    return(
        <div className={style.project_container}>
            <div className={style.title_container}>
                <p></p>
                <h1>Meus Projetos</h1>
                <LinkButton to='/newproject' text="Criar ToDo" />
            </div>

            {/* {message && <Message msg={message} type="success"></Message>}
            {projectMessage && <Message msg={projectMessage} type="success"></Message>} */}
            <div className={style.div_container}>
            <Container customClass="start">
                {todos.length > 0 &&
                    todos.map((todo)=>(
                        <TaskCard 
                        title={todo.title} 
                        id={todo.id} 
                        description={todo.description}
                        completed={todo.completed}
                        key={todo.id}
                        handleRemove={handleRemove}
                        />
                    ))}
                    {/* {!removeLoading && <Loading/>}
                    {removeLoading && projects.length === 0 &&(
                        <p>Não há projetos cadastrados!</p>
                    )} */}
            </Container>                
            </div>

        </div>
    )
}