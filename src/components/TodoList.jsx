import React from "react";
import Todo from "./Todo";

function TodoList(props) {
  return (
    <ul>
      { !props.todos.length
        ? "Todo yoq"
        : props.todos.map((todo, idx) => {
            return <Todo todo={todo} key={idx} />;
          })}
      <Todo />
    </ul>
  );
}

export default TodoList;
