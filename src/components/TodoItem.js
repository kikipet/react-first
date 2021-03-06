import React from "react"

function TodoItem(props) {
    // a class component that only has markup within the render() method can safely be converted to a function component
    return (
        <li>
            <input 
                type="checkbox" 
                checked={props.todo.completed}
                onChange={() => props.handleChangeProps(props.todo.id)}
            />
            <button onClick={() => props.deleteTodoProps(props.todo.id)}>
                Delete
            </button>
            {props.todo.title}
        </li>
    )
}

export default TodoItem