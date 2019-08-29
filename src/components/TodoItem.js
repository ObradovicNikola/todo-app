import React from 'react'
import './style/todoitem.css'

function TodoItem(props) {
    var svg;
    if (props.taskText !== "No new tasks") {
        svg = <div>
            <svg className="taskRemover" onClick={props.removeTask} width="100%" viewBox="0 0 50 50">
                <line x1="0" y1="0" x2="50" y2="50" />
                <line x1="50" y1="0" x2="0" y2="50" />
            </svg>
        </div>
    } else {
        svg = <div className="svg-container"></div>
    }
    return (
        <div className="todo-item">
            <div className="svg-container">
                {svg}
            </div>
            <p>{props.taskText}</p>
        </div>
    )
}

export default TodoItem