import React, { useContext, useState } from "react";
import TasksContext from "../context/TasksContext";

const CertainBoard = () => {
  const ctx = useContext(TasksContext);
  const [task, setTask] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    ctx.dispatch({
      type: "ADD_TASK",
      payload: { description: task, board: "JS", id: Math.random() },
    });
    setTask("");
  };
  const taskHandler = (e) => {
    setTask(e.target.value);
  };
  console.log(ctx.state);
  return (
    <div>
      <form onSubmit={submitHandler} action="submit">
        <input
          onChange={taskHandler}
          type="text"
          value={task}
          placeholder="Add task"
        />
        <button type="submit">Add</button>
      </form>
      {ctx.state.map((task) => {
        if (task.board === "JS") {
          return (
            <div key={task.id}>
              <p>{task.description}</p>
            </div>
          );
        }
      })}
    </div>
  );
};

export default CertainBoard;
