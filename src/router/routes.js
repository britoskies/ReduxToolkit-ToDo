import { BrowserRouter, Routes as RTS, Route } from "react-router-dom";

import TasksList from "./../components/TasksList";
import TaskForm from './../components/TaskForm';

import { routeNames } from "../utils/routeNames";

function Routes() {
  return (
    <BrowserRouter>
      <RTS>
        <Route path={routeNames.home} element={<TasksList />} />
        <Route path={routeNames.create} element={<TaskForm />} />
        <Route path={`${routeNames.edit}/:id`} element={<TaskForm />} />
      </RTS>
    </BrowserRouter>
  );
}

export default Routes;
