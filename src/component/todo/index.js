import React from "react";
import "./style.css";

//icon import
import { FiEdit3, FiTrash } from "react-icons/fi";

const Todo = (props) => {
  return (
    <div className="todo-wrapper">
      <div className="round">
        <input type="checkbox" id={props.id} value={props.completed} />
        <label htmlFor={props.id}></label>
      </div>
      <div className="text-wrapper">
        <h3 className="todo-title">{props.title}</h3>
        <p className="todo-description">{props.description}</p>
      </div>
      <div className="todo-controls">
        <button className="btn-edit">
          <FiEdit3 className="edit" />
        </button>
        <button className="btn-delete">
          <FiTrash className="delete" />
        </button>
      </div>
    </div>
  );
};

export default Todo;
