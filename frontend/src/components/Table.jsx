/* eslint-disable no-unused-vars */
import React from "react";
import {
  MdOutlineDeleteOutline,
  MdEditNote,
  MdOutlineCheckBox,
  MdOutlineCheckBoxOutlineBlank,
} from "react-icons/md";

const Table = ({ todos, setTodos, isLoading }) => {
  const toggleCompletion = (index) => {
    const updatedTodos = [...todos];
    updatedTodos[index].completed = !updatedTodos[index].completed;
    setTodos(updatedTodos);
  };

  // Format date function
  const formatDate = (timestamp) => {
    const date = new Date(timestamp);
    const formattedDate = date.toLocaleDateString();
    const formattedTime = date.toLocaleTimeString();
    return `${formattedDate} ${formattedTime}`;
  }

  return (
    <div className="pt-5">
      <table className="w-11/12 max-w-4xl">
        <thead className="border-b-2 border-black">
          <tr>
            <th className="p-3 text-sm font-semibold traxking-wide text-left">
              Checkbox
            </th>
            <th className="p-3 text-sm font-semibold traxking-wide text-left">
              To Do
            </th>
            <th className="p-3 text-sm font-semibold traxking-wide text-left">
              Status
            </th>
            <th className="p-3 text-sm font-semibold traxking-wide text-left">
              Date Created
            </th>
            <th className="p-3 text-sm font-semibold traxking-wide text-left">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {isLoading ? (
            <tr>
              <td colSpan="5" className="p-3 text-center">
                Loading...
              </td>
            </tr>
          ) : (
            <>
              {todos.map((todoItem, index) => (
                <tr key={todoItem.id} className="border-b-2 border-black">
                  <td className="p-3">
                    <span
                      className="text-xl cursor-pointer"
                      onClick={() => toggleCompletion(index)}>
                      {todoItem.completed ? (
                        <MdOutlineCheckBox />
                      ) : (
                        <MdOutlineCheckBoxOutlineBlank />
                      )}
                    </span>
                  </td>
                  <td className="p-3">{todoItem.name}</td>
                  <td className="p-3 text-center">
                    <span
                      className={`p-1.5 text-xs font-medium tracking-wider rounded-md ${
                        todoItem.completed ? "bg-green-300" : "bg-orange-300"
                      }`}>
                      {todoItem.completed ? "Completed" : "Incomplete"}
                    </span>
                  </td>
                  <td className="p-3">{formatDate(todoItem.created)}</td>
                  <td className="p-3 font-medium grid grid-flow-col items-center mt-5">
                    <span className="text-xl cursor-pointer">
                      <MdEditNote />
                    </span>
                    <span className="text-xl cursor-pointer">
                      <MdOutlineDeleteOutline />
                    </span>
                  </td>
                </tr>
              ))}
            </>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
