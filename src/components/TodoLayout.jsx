import { useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

function TodoLayout() {

  const [todos, setTodos] = useState([])

  console.log(todos);
  return (
    <div className="w-full p-10 rounded-md shadow-md bg-base-200">
      <TodoForm setTodos={setTodos}/>
			<div className="divider"></div>
			<TodoList todos={todos}/>
    </div>
  );
}

export default TodoLayout;
