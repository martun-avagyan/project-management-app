import React, { useReducer, createContext } from "react";
import { Routes, Route } from "react-router-dom";
import CertainBoard from "./components/CertainBoard";
import Welcome from "./components/Welcome";
import AppData from "./components/AppData";
import TasksContext from "./context/TasksContext";

const stateManager = (state, action) => {
  switch (action.type) {
    case "ADD_TASK":
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };
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
        <Route path="/certainBoard" element={<CertainBoard />} />
      </Routes>
    </TasksContext.Provider>
  );
};

export default App;
