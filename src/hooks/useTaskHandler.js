// React/Redux
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

// Utils
import { v4 as uuid } from "uuid";
import { routeNames } from "../utils/routeNames";

// CRUD Functions
import { addTask, updateTask } from "../features/tasks/taskSlice";

function useTaskHandler() {
  // React/Redux Hooks
  const dispatch = useDispatch();
  const navigateTo = useNavigate();
  const taskId = useParams().id;
  const allTasks = useSelector((state) => state.tasks);
  const [task, setTask] = useState({
    title: "",
    description: "",
  });

  // Set task title and description depending on html tag name and value
  const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  // Dispatching task data
  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskId) dispatch(updateTask(task));
    else dispatch(addTask({ ...task, id: uuid() }));
    navigateTo(routeNames.home);
  };

  useEffect(() => {
    // To fill in update task form
    if (taskId) {
      const foundTask = allTasks.find((task) => task.id === taskId);
      setTask(foundTask);
    }
  }, [taskId, allTasks]);

  return { task, setTask, handleChange, handleSubmit };
}

export default useTaskHandler;
