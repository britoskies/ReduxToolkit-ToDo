import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { deleteTask } from "../features/tasks/taskSlice";
import { routeNames } from "../utils/routeNames";

function TasksList() {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();
  const handleDeleteTask = (id) => dispatch(deleteTask(id));

  return (
    <div className="w-4/6">
      <header className="flex justify-between items-center py-4">
        <h1 className="text-lg font-bold">Tasks</h1>
        <Link
          to={routeNames.create}
          className="bg-indigo-600 px-5 py-1 rounded-sm text-sm"
        >
          Create Task
        </Link>
      </header>

      <div className="grid md:grid-cols-2 gap-4 my-5">
        {tasks.map((task) => (
          <div key={task.id} className="bg-neutral-800 p-4 rounded-md">
            <header className="flex justify-between gap-3">
              <h3 className="font-bold">{task.title}</h3>
              <div className="flex gap-x-2">
                <Link
                  to={`${routeNames.edit}/${task.id}`}
                  className="bg-zinc-600 px-2 py-1 text-xs rounded-md self-center"
                >
                  Update
                </Link>
                <button
                  onClick={() => handleDeleteTask(task.id)}
                  className="bg-red-500 px-2 py-1 text-xs rounded-md self-center"
                >
                  Delete
                </button>
              </div>
            </header>
            <p className="my-3">{task.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TasksList;
