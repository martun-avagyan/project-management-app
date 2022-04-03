import React, { useReducer, createContext } from "react";
import { Routes, Route } from "react-router-dom";
import CertainBoard from "./components/CertainBoard";
import Welcome from "./components/Welcome";
import AppData from "./components/AppData";
import TasksContext from "./context/TasksContext";

const stateManager = (state, action) => {
  switch (action.type) {
    case "ADD_TASK":
      return [
        ...state,
        {
          id: Math.random(),
          title: action.payload.title,
          description: action.payload.description,
          priority: action.payload.priority,
          board: action.payload.board,
          status: action.payload.status,
        },
      ];

    default:
      return state;
  }
};

const App = () => {
  const [state, dispatch] = useReducer(stateManager, AppData);

  return (
    <TasksContext.Provider value={{ state, dispatch }}>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/certain-board" element={<CertainBoard />} />
      </Routes>
    </TasksContext.Provider>
  );
};

export default App;
