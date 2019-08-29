import React from 'react'
import './style/todolist.css'
import TodoItem from './TodoItem'
import shortid from 'shortid'

var todoItems = []

class TodoList extends React.Component {
    constructor() {
        super()

        this.state = {
            newTask: "",
            taskList: []
        }

        this.onChange = this.onChange.bind(this)
        this.removeTask = this.removeTask.bind(this)
    }

    onChange(event) {
        this.setState({ [event.target.name]: event.target.value })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        if (this.state.newTask.trim() !== "") {
            this.setState({
                taskList: [this.state.newTask.trim(), ...this.state.taskList]
            })
        }
        this.setState({
            newTask: ""
        })
    }

    removeTask(removeText) {
        this.setState({
            taskList: this.state.taskList.filter(task => task !== removeText)
        })
    }

    render() {
        todoItems = this.state.taskList.map(item => {
            return <TodoItem key={shortid.generate()} taskText={item} removeTask={() => this.removeTask(item)} />
        })
        if (this.state.taskList[0] == null) {
            todoItems = <TodoItem key={"empty"} taskText="No new tasks" />
        }
        return (
            <div className="todo-container">
                <div className="todo-list">
                    <h1>Todo App</h1>
                    <form className="todo-form" onSubmit={this.handleSubmit} autoComplete="off">
                        <input
                            name="newTask"
                            value={this.state.newTask}
                            type="text"
                            onChange={this.onChange}
                            placeholder="Add new task..."
                        />
                        <button>+</button>
                    </form>
                    <div className="task-container">
                        <div className="todo-items">
                            {todoItems}
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default TodoList
