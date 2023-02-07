import React from "react";
import { ComponentPreview, Previews } from "@react-buddy/ide-toolbox";
import { PaletteTree } from "./palette";
import App from "../App";
import AuthBannerComponent from "../screens/auth/componenets/AuthBannerComponent";
import LoginScreen from "../screens/auth/login/LoginScreen";
import { MyInput } from "../components/MyInput";
import SignUpScreen from "../screens/auth/signup/SignUpScreen";
import { HomeScreen } from "../screens/main/home/HomeScreen";
import { Navbar } from "../components/navBar/Navbar";
import MainScreen from "../screens/main/MainScreen";

const ComponentPreviews = () => {
  return (
    <Previews palette={<PaletteTree />}>
      <ComponentPreview path="/App">
        <App />
      </ComponentPreview>
      <ComponentPreview path="/AuthBannerComponent">
        <AuthBannerComponent />
      </ComponentPreview>
      <ComponentPreview path="/LoginScreen">
        <LoginScreen />
      </ComponentPreview>
      <ComponentPreview path="/MyInput">
        <MyInput />
      </ComponentPreview>
      <ComponentPreview path="/SignUpScreen">
        <SignUpScreen />
      </ComponentPreview>
      <ComponentPreview path="/HomeScreen">
        <HomeScreen />
      </ComponentPreview>
      <ComponentPreview path="/NavBar">
        <Navbar />
      </ComponentPreview>
      <ComponentPreview path="/MainScreen">
        <MainScreen />
      </ComponentPreview>
    </Previews>
  );
};

export default ComponentPreviews;
