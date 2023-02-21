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
import { HomeScreen } from "./screens/main/home/HomeScreen";
import { NotFound } from "./screens/404/NotFound";
import { charactersLoader } from "./loaders/characters/CharactersLoader";
import { CharactersScreen } from "./screens/main/characters/CharactersScreen";
import { ThemeProvider } from "@material-tailwind/react/";
import { alertStylesType } from "./components/MyAlert";

export const appRouter = createBrowserRouter(
  createRoutesFromElements(
    <Fragment>
      <Route
        path="/"
        element={<MainScreen />}
        loader={charactersLoader}
        errorElement={<MainScreen />}
        id="root"
      >
        <Route path="/" element={<HomeScreen />} />
        <Route path="/characters" element={<CharactersScreen />} />
        <Route path="/locations" element={<NotFound />} />
        <Route path="/episodes" element={<NotFound />} />
      </Route>
      <Route path="/login" element={<LoginScreen />} />
      <Route path="/signup" element={<SignUpScreen />} />
    </Fragment>
  )
);

function App() {
  const theme = {
    alert: alertStylesType,
  };

  return (
    <ThemeProvider value={theme}>
      <RouterProvider router={appRouter} />
    </ThemeProvider>
  );
}

export default App;
