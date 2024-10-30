/* eslint-disable no-unused-vars */
import React from "react";

const TodoForm = () => {
  return (
    <div className="pt-10">
      <input
        type="text"
        placeholder="Add Task"
        className="input input-bordered input-info w-full max-w-xs mr-2"
      />
      <button className="btn glass">Add Task</button>
    </div>
  );
};

export default TodoForm;
