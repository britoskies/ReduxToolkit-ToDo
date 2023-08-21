import React from "react";
import useTaskHandler from "./../hooks/useTaskHandler";

function TaskForm() {
  // Custom Hook
  const { task, handleChange, handleSubmit } = useTaskHandler();

  return (
    <form onSubmit={handleSubmit} className="bg-zinc-800 max-w-sm p-4">
      <label htmlFor="title" className="block text-sm font-bold mb-2">
        Task
      </label>
      <input
        name="title"
        type="text"
        value={task.title}
        placeholder="Title"
        onChange={handleChange}
        className="w-full p-2 rounded-md bg-zinc-600 mb-2"
      />

      <label htmlFor="description" className="block text-sm font-bold mb-2">
        Description
      </label>
      <textarea
        name="description"
        value={task.description}
        placeholder="Description"
        onChange={handleChange}
        className="w-full p-2 rounded-md bg-zinc-600 mb-2"
      ></textarea>
      <button className="bg-indigo-600 px-2 py-1 rounded-sm w-full">Save</button>
    </form>
  );
}

export default TaskForm;
