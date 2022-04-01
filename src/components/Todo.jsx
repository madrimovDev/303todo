import React from "react";
import {BiTrashAlt} from 'react-icons/bi'

function Todo() {
  return (
    <li className="flex justify-between items-center">
      <div className="flex items-center gap-4">
        <span>1</span>
        <div className="form-control">
          <label className="label cursor-pointer">
            <input
              type="checkbox"
              checked="checked"
              className="checkbox checkbox-primary"
            />
          </label>
        </div>
        <span>Todo text</span>
      </div>
      <button className="btn btn-error btn-square btn-sm text-xl text-white">
          <BiTrashAlt/>
      </button>
    </li>
  );
}

export default Todo;
