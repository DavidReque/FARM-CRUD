import React, { useState } from "react";
import axios from "axios";

function TaskForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    const res = await axios.post("http://127.0.0.1:8000/api/tasks", {
      title,
      description,
    });
    e.target.reset();
  }

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
          autoFocus
        />
        <textarea
          className="block py-2 px-3 mb-4 w-full text-black"
          rows="3"
          placeholder="Description"
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        ></textarea>
        <button>Save</button>
      </form>
    </div>
  );
}

export default TaskForm;
