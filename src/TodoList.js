import { render } from '@testing-library/react';
import React, { Component } from 'react';
import NewTodoForm from './NewTodoForm';
import Todo from './Todo';
import EditTodoForm from './EditTodoForm';
import { v4 as uuidv4 } from 'uuid';

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = { todos: [{ item: 'eat', id: uuidv4(), completed: false, edit: false}] }
        this.addTodo = this.addTodo.bind(this);
        this.completeTodo = this.completeTodo.bind(this);
        this.deleteTodo = this.deleteTodo.bind(this);
        this.editTodo = this.editTodo.bind(this);
        this.updateTodo = this.updateTodo.bind(this);
    }

    //add todo to list 
    addTodo(todo) {
        this.setState({ todos: [...this.state.todos, todo] });
    }

    //Add crossthrough to item when clicked 
    completeTodo(id) {
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

    //Delete specified todo and re-render list
    deleteTodo(id) {
        const newTodos = this.state.todos.filter(todo => todo.id !== id);

        this.setState({
            todos: newTodos
        })
    }

    //Change state of 'edit' when edit button is pressed to render EditTodoForm Component 
    editTodo(id) {
        const newTodos = this.state.todos.map(todo => {
            if(todo.id === id){
                return {...todo, edit: !todo.edit}
            }
            return todo;
        })

        this.setState({
            todos: newTodos
        })
    }

    //Update todo with input 
    updateTodo(editTodo){
        const newTodos = this.state.todos.map(todo => {
            if(todo.id === editTodo.id){
                return {...editTodo, completed: false, edit: false}
            }
            return todo
        })

        this.setState({
            todos: newTodos
        })
    }

    render() {
        const todos = this.state.todos.map(todo => {
            if(todo.edit){
                return (
                    <EditTodoForm 
                        item={todo.item}
                        key={todo.id}
                        id={todo.id}
                        updateTodo={this.updateTodo}
                    />
                )
            }else{
                return (
                    <Todo
                        item={todo.item}
                        key={todo.id}
                        id={todo.id}
                        complete={todo.completed}
                        completeTodo={this.completeTodo}
                        deleteTodo={this.deleteTodo}
                        edit={todo.edit}
                        editTodo={this.editTodo}
                    />
                )
            }
        })

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
