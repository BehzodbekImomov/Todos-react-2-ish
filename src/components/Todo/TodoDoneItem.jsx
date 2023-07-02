import React, { Component } from 'react'

export class TodoDoneItem extends Component {
  render() {
    const{id,title,deleteTodo}=this.props;
    return (
        <div className='d-flex justify-content-between align-items-center p-3 border mb-3'>
        <span>{title}</span>
<button onClick={()=>deleteTodo(id)} className='btn btn-danger'>Done</button>
      </div>
    )
  }
}

export default TodoDoneItem