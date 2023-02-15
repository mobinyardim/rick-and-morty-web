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
import { charactersLoader } from "./screens/main/home/HomeScreen";

export const appRouter = createBrowserRouter(
  createRoutesFromElements(
    <Fragment>
      <Route
        path="/"
        element={<MainScreen />}
        loader={charactersLoader}
        errorElement={<MainScreen />}
      />
      <Route path="login" element={<LoginScreen />} />
      <Route path="signup" element={<SignUpScreen />} />
    </Fragment>
  )
);

function App() {
  return <RouterProvider router={appRouter} />;
}

export default App;
