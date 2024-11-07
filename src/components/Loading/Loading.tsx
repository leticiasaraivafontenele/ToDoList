import styles from "./Loading.module.css"
import loadingImg from '../../assets/images/loading.svg'

function Loading(){
    return(
        <div className={styles.loader_container}>
            <img className={styles.loader}src={loadingImg} alt="Loading"></img>
        </div>
    )
}
export default Loading