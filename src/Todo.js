import React, {Component} from 'react';
import './Todo.css';

class Todo extends Component {
    constructor(props){
        super(props);
        this.handleComplete = this.handleComplete.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    handleComplete(e){
        this.props.completeTodo(this.props.id);
    }

    handleDelete(e){
        this.props.deleteTodo(this.props.id);
    }

    render(){
        return(
            <div className="Todo">
                <p onClick={this.handleComplete} className={this.props.complete ? "strike" : ""}>{this.props.item}</p>
                <button>Edit</button>
                <button onClick={this.handleDelete}>Delete</button>
            </div>
        )
    }
}

export default Todo;