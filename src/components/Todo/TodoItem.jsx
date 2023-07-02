import React, { Component } from 'react'

export class TodoItem extends Component {
  render() {
  const{id,title,doneTodo}=this.props;
    return (
      <div className='d-flex justify-content-between align-items-center p-3 border mb-3'>
        <span>{title}</span>
<button onClick={()=>doneTodo(id)} className='btn btn-success'>Done</button>
      </div>
    )
  }
}

export default TodoItem