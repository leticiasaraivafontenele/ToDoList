import { ChangeEventHandler } from "react"
import styles from "./Input.module.css"

interface IInputProps {
    type: string
    text: string
    name: string
    placeholder: string
    value: string
    handlerOnChange: ChangeEventHandler<HTMLInputElement>
}

function Input({type, text, name, placeholder, handlerOnChange, value}:IInputProps){
    return(
        <div className = {styles.form_controler}>
            <label htmlFor={name}>{text}</label>
            <input type={type} id={name} onChange={handlerOnChange} value={value} name={name} placeholder={placeholder}></input>
        </div>
    )
}

export default Input