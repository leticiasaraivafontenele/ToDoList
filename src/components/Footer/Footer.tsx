import styles from './Footer.module.css'

function Footer(){
    return(
        <footer className={styles.footer}>
            <p className={styles.copy_right}><span>ToDo List</span> &copy; 2024
            </p>
        </footer>
    )
}
export default Footer;