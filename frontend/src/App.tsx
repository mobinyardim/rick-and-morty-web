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
import { sources } from "./remoteSources/common/Sources";

export const appRouter = createBrowserRouter(
  createRoutesFromElements(
    <Fragment>
      <Route
        path="/"
        element={<MainScreen />}
        loader={async () => {
          return await sources.charactersSource.getCharacters();
        }}
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

