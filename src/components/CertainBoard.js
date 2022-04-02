import React, { useContext } from "react";
import TasksContext from "../context/TasksContext";

const CertainBoard = () => {
  const ctx = useContext(TasksContext);
  return (
    <div>
      {ctx.state.map((item) => {
        return <div>{item.status}</div>;
      })}
    </div>
  );
};

export default CertainBoard;
