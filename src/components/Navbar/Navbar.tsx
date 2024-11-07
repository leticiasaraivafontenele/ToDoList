import Container from "../Container/container";
import styles from "./Navbar.module.css"
import {Link} from 'react-router-dom'
import logo from '../../assets/images/whiteLogo.png'

export default function Navbar(){
    return(
        <nav className={styles.navbar}>
            <Container> 
                <Link  className={styles.imag} to={"/"}> 
                <img  src={logo}alt='ToDo List'></img>
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