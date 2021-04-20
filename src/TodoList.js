import { render } from '@testing-library/react';
import React, { Component } from 'react';
import NewTodoForm from './NewTodoForm';
import Todo from './Todo';
import { v4 as uuidv4 } from 'uuid';

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = { todos: [{ item: 'eat', id: uuidv4(), completed: false }] }
        this.addTodo = this.addTodo.bind(this);
        this.completeTodo = this.completeTodo.bind(this);
        this.deleteTodo = this.deleteTodo.bind(this);
    }

    addTodo(todo) {
        //take todo and add it to existing list of todos in the state
        this.setState({ todos: [...this.state.todos, todo] });
    }

    completeTodo(id) {
        //add a cross through to this todo, and then re-render list 
        //onclick, mark 'completed' as true, and add styling to add className that adds cross through
        const newTodos = this.state.todos.map(todo => {
            if (todo.id === id) {
                return { ...todo, completed: !todo.completed }
            }
            return todo;
        })

        this.setState({
            todos: newTodos
        });
    }

    deleteTodo(id) {
        const newTodos = this.state.todos.filter(todo => todo.id !== id );

        this.setState({
            todos: newTodos
        })
    }

    render() {
        const todos = this.state.todos.map(todo => (
            <Todo 
                item={todo.item}
                key={todo.id}
                id={todo.id}
                complete={todo.completed}
                completeTodo={this.completeTodo}
                deleteTodo={this.deleteTodo}
            />
        ))

        return (
            <div>
                <h1>Todo List!</h1>
                <p>A Simple React Todo List App.</p>
                {todos}
                <NewTodoForm add={this.addTodo} />
            </div>
        )
    }
}

export default TodoList;


//METHODS
//edit todo
//delete todo

//create a new component 'EditTodoForm' (?)