import styles from './Home.module.css'
import listCheck from '../assets/images/index.js'
// import LinkButton from '../assets/images/list_alt_check_40dp_FF8B94_FILL0_wght400_GRAD0_opsz40.svg'

export default function Home(){
    
    return(
        <section className={styles.home_container}>
            {/* <h1>Bem-vindo ao <span><img src={blackLogo} alt="ToDo List" /></span></h1> */}
            <p>Comece agora a gerenciar suas tarefas!</p>
            {/* <LinkButton to='/newproject' text="Criar Projeto" /> */}
            <img src={listCheck} alt="ListCheck"></img>
        </section>
 