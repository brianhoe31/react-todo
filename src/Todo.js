import React, { Component } from 'react';
import './Todo.css';

class Todo extends Component {
    constructor(props) {
        super(props);
        this.handleComplete = this.handleComplete.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
    }

    handleComplete(e) {
        this.props.completeTodo(this.props.id);
    }

    handleDelete(e) {
        this.props.deleteTodo(this.props.id);
    }

    handleEdit(e) {
        this.props.editTodo(this.props.id);
    }

    render() {
        return (
            <div className="Todo">
                <li onClick={this.handleComplete} className={this.props.complete ? "strike" : ""}>{this.props.item}</li>
                <button onClick={this.handleEdit}>Edit</button>
                <button onClick={this.handleDelete}>Delete</button>
            </div>
        )
    }
}

export default Todo;