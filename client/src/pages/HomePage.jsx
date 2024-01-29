import React, { useEffect, useState } from "react";
import axios from "axios";
import TaskList from "../components/TaskList";

const HomePage = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    async function fetchTask() {
      const res = await axios.get("http://127.0.0.1:8000/api/tasks");

      setTasks(res.data);
    }

    fetchTask();
  }, []);

  return (
    <>
      <TaskList tasks={tasks} />
    </>
  );
};

export default HomePage;
