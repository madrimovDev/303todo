import React from "react";

function TodoForm() {
  return (
    <form>
      <div className="form-control">
        <div className="input-group">
          <input
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
