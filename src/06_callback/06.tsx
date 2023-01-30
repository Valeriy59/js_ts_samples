// примеры колбек функций
import React, {MouseEvent} from "react";

// const callback = (): number => {
//     alert('hey')
//     return 12
// }
// window.setTimeout(callback, 1000)


export const User = (e: MouseEvent<HTMLButtonElement>) => {
    const deleteUser = () => {
        alert(e.currentTarget.name)
    }

    const saveUser = () => {
        alert('user have been saved')
    }

    const onNameChanged = () => {
        console.log('name changed')
    }

    const focusLostHandler = () => {
        console.log('focus lost')
    }

    return (
        <div>
            <textarea
                onChange={onNameChanged}
                onBlur={focusLostHandler}
            >Dimych
            </textarea>
            <input/>
            <button onClick={deleteUser}>delete</button>
            <button onClick={deleteUser}>save</button>
        </div>
    )
}