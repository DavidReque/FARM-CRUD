import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { fetchTask, createTask, updateTask, deleteTask } from "../api/task";

function TaskForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const params = useParams();
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      if (!params.id) {
        const res = await createTask({ title, description });
      } else {
        const res = await updateTask(params.id, { title, description });
      }

      e.target.reset();
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if (params.id) {
      fetchTask(params.id)
        .then((res) => {
          setTitle(res.data.title);
          setDescription(res.data.description);
        })
        .catch((err) => console.log(err));
    }
  }, []);

  return (
    <div className="flex items-center justify-center h-[calc(100vh-10rem)]">
      <div>
        <form className="bg-zinc-950 p-10" onSubmit={handleSubmit}>
          <h1 className="text-3xl font-bold my-4">
            {params.id ? "Update Task" : "Create Task"}
          </h1>
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
          <button className="bg-white hover:bg-slate-800 hover:text-white text-slate-800 font-bold py-2 px-4 rounded">
            {params.id ? "Update task" : "Create Task"}
          </button>
        </form>

        {params.id && (
          <button
            onClick={async () => {
              try {
                await deleteTask(params.id);
                navigate("/");
              } catch (error) {
                console.log(error);
              }
            }}
            className="bg-red-500 hover:bg-red-400 text-white font-bold py-2 rounded mt-5 px-4"
          >
            Delete
          </button>
        )}
      </div>
    </div>
  );
}

export default TaskForm;
