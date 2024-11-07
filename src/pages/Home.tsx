import styles from './Home.module.css'
import listCheck from '../assets/images/listCheck.svg'
import blackLogo from '../assets/images/blackLogo.png'
import LinkButton from '../components/LinkButton/LinkButton'

export default function Home(){
    
    return(
        <section className={styles.home_container}>
            <h1>Bem-vindo ao <span><img src={blackLogo} alt="ToDo List" /></span></h1>
            <p>Comece agora a gerenciar suas tarefas!</p>
            <LinkButton to='/newtodo' text="Criar Tarefa" />
            <img src={listCheck} alt="ListCheck"></img>
        </section>
    )}