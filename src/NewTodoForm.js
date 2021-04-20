import React, { Component} from 'react';
import { v4 as uuidv4 } from 'uuid';

class NewTodoForm extends Component {
    constructor(props){
        super(props);
        this.state = {item: "", id:uuidv4(), completed: false};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e){
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit(e){
        e.preventDefault();
        
        this.props.add(this.state);
        this.setState({item: "", id:uuidv4()});
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="item">New Todo: </label>
                <input type="text" name="item" value={this.state.item} id="item" onChange={this.handleChange}></input>
                <button>Submit</button>
            </form>
        )
    }
}

export default NewTodoForm;