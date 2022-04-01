import React, { useState } from "react";

function TodoForm(props) {
  const [title, setTitle] = useState('')

  const submitHandler = (event) => {
    event.preventDefault()

    if(!title.trim()){
      return
    } 

    const newTodo = {
      id: Date.now(),
      title: title,
      isCompleted: false
    }
    props.setTodos(i => [...i, newTodo])
    setTitle('')
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="form-control">
        <div className="input-group">
          <input
            value={title}
            onChange={event => setTitle(event.target.value)}
            type="text"
            placeholder="Search…"
            className="input input-bordered w-full input-lg"
          />  
          <button className="btn btn-square btn-lg">
            +
          </button>
        </div>
      </div>
    </form>
  );
}

export default TodoForm;
