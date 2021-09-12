import React, { useState } from "react";
//import { BsPlus } from "react-icons/bs";
import "./style.css";

//Component
import { Todo } from "../../component";

const Form = () => {
  //Hooks
  const [Task, setTasks] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [id, setID] = useState(0);

  const handleTitle = (event) => {
    setName(event.target.value);
  };
  const handleDescription = (event) => {
    setDescription(event.target.value);
  };
  const handleID = () => {
    setID(id + 1);
  };

  const addTask = (e) => {
    e.preventDefault();
    handleID();
    const a = {
      id: id,
      title: name,
      description: description,
      completed: false,
      for: id,
    };
    setTasks([...Task, a]);
  };

  const TaskUpdated = Task.map((task) => (
    <Todo
      title={task.title}
      description={task.description}
      completed={task.completed}
      id={task.id}
      key={task.id}
    />
  ));

  return (
    <div>
      {TaskUpdated}
      {/*<button className="btn-add-task mg20">
        <BsPlus className="plus" />
        Aggiungi attività
      </button>*/}
      <form onSubmit={addTask} className="form-wrapper" id="todo-form">
        <div className="task-form">
          <div className="input-wrapper">
            <input
              type="text"
              id="title-text"
              className="new-todo-input"
              name="text"
              autoComplete="off"
              placeholder="Nome attività"
              onChange={handleTitle}
              required={true}
            />
            <textarea
              type="text"
              id="description-text"
              className="new-todo-input"
              name="text"
              rows="2"
              autoComplete="off"
              placeholder="Descrizione attività"
              onChange={handleDescription}
            />
          </div>
          <div className="form-btn">
            <div className="submit-wrapper">
              <button type="submit" id="btn-submit-task">
                Aggiungi attività
              </button>
            </div>
            <div className="time-wrapper">
              <div className="v-center mr10">
                <input
                  type="checkbox"
                  className="hidden"
                  name="inarrivo"
                  id="inarrivo"
                />
                <label htmlFor="inarrivo" id="inarrivo">
                  In arrivo
                </label>
              </div>
              <div className="v-center mr10">
                <input
                  type="checkbox"
                  className="hidden"
                  name="oggi"
                  id="oggi"
                />
                <label htmlFor="oggi" id="oggi">
                  Oggi
                </label>
              </div>
              <div className="v-center mr10">
                <input
                  type="checkbox"
                  className="hidden"
                  name="domani"
                  id="domani"
                />
                <label htmlFor="domani" id="domani">
                  Domani
                </label>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form;
