import React, { useEffect, useState } from "react";
import TaskList from "../components/TaskList";
import { fetchTasks } from "../api/task";

const HomePage = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    async function fetchTask() {
      fetchTasks()
        .then((res) => {
          setTasks(res.data);
        })
        .catch((err) => console.log(err));
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
