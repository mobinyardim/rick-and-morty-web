import React, { Fragment } from "react";
import "./App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import LoginScreen from "./screens/auth/login/LoginScreen";
import SignUpScreen from "./screens/auth/signup/SignUpScreen";
import MainScreen from "./screens/main/MainScreen";
import { charactersLoader, HomeScreen } from "./screens/main/home/HomeScreen";
import { NotFound } from "./screens/404/NotFound";

export const appRouter = createBrowserRouter(
  createRoutesFromElements(
    <Fragment>
      <Route path="/" element={<MainScreen />} errorElement={<MainScreen />}>
        <Route path="/" loader={charactersLoader} element={<HomeScreen />} />
        <Route path="/characters" element={<NotFound />} />
        <Route path="/locations" element={<NotFound />} />
        <Route path="/episodes" element={<NotFound />} />
      </Route>
      <Route path="/login" element={<LoginScreen />} />
      <Route path="/signup" element={<SignUpScreen />} />
    </Fragment>
  )
);

function App() {
  return <RouterProvider router={appRouter} />;
}

export default App;
