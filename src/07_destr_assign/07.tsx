import React, {useState} from "react";
export type ManType = {
    name: string
    age: number
    lessons: Array<{ title: string }>
    address: {
        street: {
            title: string
        }
    }
}

type PropsType = {
    title: string
    man: ManType
    food: Array<string>
    car: {model: string}
}

//для передачи свойств объекта можно деструктурировать объект и передать переменные в качестве имен свойств не вызывая props
export const ManComponent: React.FC<PropsType> = ({title, man, ...props}) => {

    const [message, setMessage] = useState<string>("hello")

    return (
        <div>
            <h1>{title}</h1>
            <div>
                {props.car.model}
            </div>
            <div>
                {man.name}
            </div>
        </div>
    )
}
