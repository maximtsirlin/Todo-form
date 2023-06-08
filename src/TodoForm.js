import { useState } from 'react'

function ToDoForm() {
    const [userInput, setUserInput] = useState('')
    const handleChange = () => {

    }
    
    const handleSubmit = () => {

    }

    const handleKeyPress = () => {

    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                value={userInput}
                type='text'
                onChange={handleChange}
                onKeyDown={handleKeyPress}
                placeHolder='Введите значение...'
            />
            <button>Сохранить</button>
        </form>
    )
}

export default ToDoForm