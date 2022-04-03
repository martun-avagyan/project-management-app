import React from "react";

const TasksContext = React.createContext({
  state: [
    {
      title: "title",
      description: "description",
      priority: "priority",
      id: 1,
      category: "category",
      status: "status",
    },
  ],

  dispatch: () => {},
});

export default TasksContext;
