import { createSlice } from "@reduxjs/toolkit";

const taskSlice = createSlice({
  name: "tasks",
  initialState: [],
  reducers: {
    addTask: (state, action) => {
      // Task object passed by pararms in TaskForm
      const newTask = action.payload;
      state.push(newTask);
    },
    deleteTask: (state, action) => {
      // Task id passed by params in TaskList component
      const id = action.payload;
      const foundTask = state.find(task => task.id === id);
      if (foundTask) {
        state.splice(state.indexOf(foundTask), 1); 
      }
    },
    updateTask: (state, action) => { 
      // Task object with new props passed by params in TaskForm
      const taskToUpdate = action.payload;    
      const foundTask = state.find(task => task.id === taskToUpdate.id);
      if (foundTask) {
        state.splice(state.indexOf(foundTask), 1, taskToUpdate);
      }
    }
  },
});

export const { addTask, deleteTask, updateTask } = taskSlice.actions;
export default taskSlice.reducer;