import Container from "../Container/container";
import styles from "./Navbar.module.css"
import {Link} from 'react-router-dom'
// import logo from '../../../public/images/whiteLogo.png'

export default function Navbar(){
    return(
        <nav className={styles.navbar}>
            <Container> 
                <Link to={"/"}> 
                <img src={'@/public/images/whiteLogo.png'}alt='ToDo List'></img>
                </Link>
                <ul className={styles.list}>
                    <li className={styles.item}>
                        <Link to='/'>Home</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to='/mytodos'>My Todos</Link>
                    </li>
                </ul>
            </Container>
        </nav>
    )
}