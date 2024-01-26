import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

function TaskForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const params = useParams();
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      if (!params.id) {
        const res = await axios.post("http://127.0.0.1:8000/api/tasks", {
          title,
          description,
        });
      } else {
        const res = await axios.put(
          `http://127.0.0.1:8000/api/tasks/${params.id}`,
          {
            title,
            description,
          }
        );
      }

      e.target.reset();
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if (params.id) {
      fetchTask();
    }

    async function fetchTask() {
      const res = await axios.get(
        `http://127.0.0.1:8000/api/tasks/${params.id}`
      );
      setTitle(res.data.title);
      setDescription(res.data.description);
    }
  }, []);

  return (
    <div className="flex items-center justify-center h-[calc(100vh-10rem)]">
      <form className="bg-zinc-950 p-10" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          className="block py-2 px-3 mb-4 w-full text-black"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          value={title}
          autoFocus
        />
        <textarea
          className="block py-2 px-3 mb-4 w-full text-black"
          rows="3"
          placeholder="Description"
          value={description}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        ></textarea>
        <button>{params.id ? "Update task" : "Create Task"}</button>
      </form>
    </div>
  );
}

export default TaskForm;
