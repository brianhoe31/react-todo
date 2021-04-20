import React, { Component } from 'react';

class EditTodoForm extends Component {
    constructor(props) {
        super(props);
        this.state = { item: this.props.item, id: this.props.id, completed: this.props.completed }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit(e) {
        e.preventDefault();

        this.props.updateTodo(this.state);
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" name="item" value={this.state.item} onChange={this.handleChange}></input>
                <button>Save</button>
            </form>
        )
    }
}

export default EditTodoForm;