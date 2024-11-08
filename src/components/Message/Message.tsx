import styles from "./Message.module.css"
import {useState, useEffect} from "react"

interface IMessageProps {
    type: string;
    msg: string;
}

function Message({type, msg}:IMessageProps){
    const [visible, setVisible] = useState<boolean>(false)
    useEffect(()=>{
        if(!msg){
            setVisible(false)
            return
        }
        setVisible(true)
        const timer = setTimeout(()=>{
            setVisible(false)
        }, 3000)
        return()=> clearTimeout(timer)
    }, [msg])

    return(
        <>
        {visible && <div className={`${styles.message} ${styles[type]}`}>{msg}</div>
    }
        </>
    )
}
export default Message