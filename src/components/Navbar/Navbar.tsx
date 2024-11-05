import Container from "../Container/container";
import styles from "./Navbar.module.css"
import {Link} from 'react-router-dom'

export default function Navbar(){
    return(
        <nav className={styles.navbar}>
            <Container> 
                <Link to={"/"}> 
                {/* <img src={logo} alt='Costs'></img> */}
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