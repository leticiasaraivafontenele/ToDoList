import style from "./Container.module.css"

interface IPropsContainer {
    children: React.ReactNode,
    customClass?: string
}

export default function Container({children, customClass}: IPropsContainer){
    return(
        <div className={`${style.container} ${style[customClass]}`}>
        {children}
        </div>
    )
}
