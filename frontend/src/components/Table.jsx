/* eslint-disable no-unused-vars */
import React from "react";
import {
  MdOutlineDeleteOutline,
  MdEditNote,
  MdOutlineCheckBox,
  MdOutlineCheckBoxOutlineBlank,
} from "react-icons/md";

const Table = () => {
  return (
    <div className="py-32">
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
          <tr>
            <td className="p-3">
              <span className="text-xl cursor-pointer">
                <MdOutlineCheckBox />
              </span>
            </td>
            <td className="p-3">Lorem ipsum dolor sit.</td>
            <td className="p-3 text-center">
                <span className="p-1.5 text-xs font-medium tracking-wider rounded-md bg-orange-300">Pending</span>
            </td>
            <td className="p-3">24-09-18</td>
            <td className="p-3 font-medium grid grid-flow-col items-center mt-5">
              <span className="text-xl cursor-pointer">
                <MdEditNote />
              </span>
              <span className="text-xl cursor-pointer">
                <MdOutlineDeleteOutline />
              </span>
            </td>
          </tr>
          <tr>
            <td className="p-3">
              <span className="text-xl cursor-pointer">
                <MdOutlineCheckBox />
              </span>
            </td>
            <td className="p-3">Lorem ipsum dolor sit.</td>
            <td className="p-3 text-center">
                <span className="p-1.5 text-xs font-medium tracking-wider rounded-md bg-orange-300">Pending</span>
            </td>
            <td className="p-3">24-09-18</td>
            <td className="p-3 font-medium grid grid-flow-col items-center mt-5">
              <span className="text-xl cursor-pointer">
                <MdEditNote />
              </span>
              <span className="text-xl cursor-pointer">
                <MdOutlineDeleteOutline />
              </span>
            </td>
          </tr>
          <tr>
            <td className="p-3">
              <span className="text-xl cursor-pointer">
                <MdOutlineCheckBox />
              </span>
            </td>
            <td className="p-3">Lorem ipsum dolor sit.</td>
            <td className="p-3 text-center">
                <span className="p-1.5 text-xs font-medium tracking-wider rounded-md bg-orange-300">Pending</span>
            </td>
            <td className="p-3">24-09-18</td>
            <td className="p-3 font-medium grid grid-flow-col items-center mt-5">
              <span className="text-xl cursor-pointer">
                <MdEditNote />
              </span>
              <span className="text-xl cursor-pointer">
                <MdOutlineDeleteOutline />
              </span>
            </td>
          </tr>
          <tr>
            <td className="p-3">
              <span className="text-xl cursor-pointer">
                <MdOutlineCheckBox />
              </span>
            </td>
            <td className="p-3">Lorem ipsum dolor sit.</td>
            <td className="p-3 text-center">
                <span className="p-1.5 text-xs font-medium tracking-wider rounded-md bg-orange-300">Pending</span>
            </td>
            <td className="p-3">24-09-18</td>
            <td className="p-3 font-medium grid grid-flow-col items-center mt-5">
              <span className="text-xl cursor-pointer">
                <MdEditNote />
              </span>
              <span className="text-xl cursor-pointer">
                <MdOutlineDeleteOutline />
              </span>
            </td>
          </tr>
          <tr>
            <td className="p-3">
              <span className="text-xl cursor-pointer">
                <MdOutlineCheckBox />
              </span>
            </td>
            <td className="p-3">Lorem ipsum dolor sit.</td>
            <td className="p-3 text-center">
                <span className="p-1.5 text-xs font-medium tracking-wider rounded-md bg-orange-300">Pending</span>
            </td>
            <td className="p-3">24-09-18</td>
            <td className="p-3 font-medium grid grid-flow-col items-center mt-5">
              <span className="text-xl cursor-pointer">
                <MdEditNote />
              </span>
              <span className="text-xl cursor-pointer">
                <MdOutlineDeleteOutline />
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
