import React, { Component, createRef } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";

export class InputTodo extends Component {
    inputRef=createRef();
  render() {
    
    const submit = (e) => {
        e.preventDefault();
this.props.getValue(this.inputRef.current.value)
this.inputRef.current.value=""
    };
    return (
      <Form onSubmit={submit}  className="mt-5">
        <InputGroup className="mb-3 w-50 m-auto">
          <Form.Control
          ref={this.inputRef}
            placeholder="Writing todo name"
            aria-label="Writing todo name"
            aria-describedby="basic-addon2"
          />
          <Button type="submit" variant="outline-success" >
            Save
          </Button>
        </InputGroup>
      </Form>
    );
  }
}

export default InputTodo;
