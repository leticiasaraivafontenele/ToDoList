import styles from "./SubmitButton.module.css"

interface ISubmitButtonProps {
    text: string
}

function SubtmitButton({text}:ISubmitButtonProps){
    return(
        <div >
            <button className={styles.btn}>{text}</button>
        </div>
    )
}

export default SubtmitButton