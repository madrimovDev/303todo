import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

function TodoLayout() {
  return (
    <div className="w-full p-10 rounded-md shadow-md bg-base-200">
      <TodoForm />
			<div className="divider"></div>
			<TodoList/>
    </div>
  );
}

export default TodoLayout;
