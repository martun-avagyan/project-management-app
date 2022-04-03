import React, { useContext, useState } from "react";
import { useEffect } from "react/cjs/react.production.min";
import TasksContext from "../context/TasksContext";

const CertainBoard = () => {
  const ctx = useContext(TasksContext);
  const [description, setDescription] = useState("");
  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState("");
  const [status, setStatus] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    ctx.dispatch({
      type: "ADD_TASK",
      payload: {
        description: description,
        title: title,
        board: "JS",
        id: Math.random(),
        priority: priority,
        status: "ToDo",
      },
    });
    setDescription("");
    setTitle("");
    setPriority("Medium");
  };
  const descriptionHandler = (e) => {
    setDescription(e.target.value);
  };
  const titleHandler = (e) => {
    setTitle(e.target.value);
  };
  const priorityHandler = (e) => {
    setPriority(e.target.value);
  };
  const statusHandler = (e) => {
    setStatus(e.target.value);
  };
  return (
    <div>
      <form onSubmit={submitHandler} action="submit">
        <input
          onChange={titleHandler}
          type="text"
          value={title}
          placeholder="Title"
        />

        <input
          onChange={descriptionHandler}
          type="text"
          value={description}
          placeholder="Add Description"
        />
        <select onChange={priorityHandler} value={priority}>
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>
        <button type="submit">Add</button>
      </form>
      {ctx.state.map((task) => {
        if (task.board === "JS" && task.status === "ToDo") {
          return (
            <div key={task.id}>
              <h4>{task.title}</h4>
              <p>{task.description}</p>
              <p>{task.priority}</p>
              <p>
                <select onChange={statusHandler}>
                  <option value="ToDo">ToDo</option>
                  <option value="In Progress">In Progress</option>
                  <option value="Done">Done</option>
                </select>
              </p>
            </div>
          );
        }
      })}
    </div>
  );
};

export default CertainBoard;
