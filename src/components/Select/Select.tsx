import { ChangeEventHandler } from "react"
import styles from "./Select.module.css"

interface ISelectProps {
    text: string
    name: string
    value: string
    handlerOnChange: ChangeEventHandler<HTMLSelectElement>
    options: {id: string, name: string}[]
}

function Select({text, name, options, handlerOnChange, value}:ISelectProps){
    return(
        <div className = {styles.form_controler}>
            <label htmlFor={name}>{text}</label>
            <select name={name} id={name} onChange={handlerOnChange} value={value || ''}>
                {options.map((option) => (
                    <option value={option.id} key={option.id}>{option.name}</option>
                ))}
            </select>
        </div>
    )
}

export default Select