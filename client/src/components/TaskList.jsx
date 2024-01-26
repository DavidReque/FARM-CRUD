import React from "react";

const TaskList = ({ tasks }) => {
  return (
    <div className="grid grid-cols-3 gap-4">
      {tasks.map((task) => (
        <div
          key={task._id}
          className="bg-zinc-950 p-4 hover:cursor-pointer hover:bg-gray-950"
        >
          <h1>{task.title}</h1>
          <p>{task.description}</p>
        </div>
      ))}
    </div>
  );
};

export default TaskList;
