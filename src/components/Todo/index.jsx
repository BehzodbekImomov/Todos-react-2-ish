import React, { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { v4 as uuidv4 } from 'uuid';
import { TODOS } from "../const";


import InputTodo from "./InputTodo";
import TodoDoneItem from "./TodoDoneItem";
import TodoItem from "./TodoItem";

export class Todo extends Component {
  state = {
    todos:JSON.parse( localStorage.getItem(TODOS)) || [
      {
        id: 0,
        title: "Behzod",
        done: true,
      },
      {
        id: 1,
        title: "Bunyod",
        done: false,
      },
      {
        id: 2,
        title: "Muhammadjon",
        done: false,
      },
      {
        id: 3,
        title: "Shahzoda",
        done: true,
      },
    ],
  };
  render() {
    const unDoneItems = this.state.todos.filter((todo) => !todo.done);
    const DoneItems = this.state.todos.filter((todo) => todo.done);
    const getValue=(value)=>{
console.log(value);
let todos=[...this.state.todos,{id:uuidv4(),title:value,done:false}]
this.setState({todos})
localStorage.setItem(TODOS,JSON.stringify(todos))
    }
  const doneTodo=(id) =>{
let todos= this.state.todos.map((todo)=>{
todo.id===id&&(todo.done=true)
return todo
  })
this.setState({todos})
localStorage.setItem(TODOS,JSON.stringify(todos))
  }

  const deleteTodo=(id)=>{
let todos=this.state.todos.filter((todo)=>todo.id!==id)
this.setState({todos})
localStorage.setItem(TODOS,JSON.stringify(todos))
  }
    return (
      <Container>
        <InputTodo getValue={getValue} />
        <Row>
          <Col lg={6}>
            {unDoneItems.map((todo)=>  <TodoItem key={todo.id} doneTodo={doneTodo}  {...todo} />)}
          
          </Col>

          <Col lg={6}>
            {DoneItems.map((todo)=>  <TodoDoneItem deleteTodo={deleteTodo}  key={todo.id} {...todo} />)}
          
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Todo;
