import React, { useState } from "react";
import { ComponentPreview, Previews } from "@react-buddy/ide-toolbox";
import { PaletteTree } from "./palette";
import App from "../App";
import AuthBannerComponent from "../screens/auth/componenets/AuthBannerComponent";
import LoginScreen from "../screens/auth/login/LoginScreen";
import { MyInput } from "../components/MyInput";
import SignUpScreen from "../screens/auth/signup/SignUpScreen";
import { HomeScreen } from "../screens/main/home/HomeScreen";
import { Navbar, NavItem, NavMenuItem } from "../components/navBar/Navbar";
import MainScreen from "../screens/main/MainScreen";
import * as MdIcon from "react-icons/md";
import { CharacterComponent } from "../components/CharacterComponent";
import { Character } from "models/src/Character";
import { Origin } from "models/src/Origin";
import { Location } from "models/src/Location";
import { CircularLoading } from "../components/circularIndeterminate/CircularLoading";
import { MyButton } from "../components/MyButton";

const menuItems: Array<NavItem> = [
  {
    title: "Home",
    className: "",
    icon: MdIcon.MdOutlineKeyboardArrowRight,
  },
  {
    title: "Characters",
    className: "",
    icon: MdIcon.MdOutlineKeyboardArrowRight,
  },
  {
    title: "Locations",
    className: "",
    icon: MdIcon.MdOutlineKeyboardArrowRight,
  },
  {
    title: "Episodes",
    className: "",
    icon: MdIcon.MdOutlineKeyboardArrowRight,
  },
];

const rick = new Character(
  "1",
  "Rick Sanchez",
  "Alive",
  "Human",
  "Male",
  new Origin("Earth (C-137)", "https://rickandmortyapi.com/api/location/1"),
  new Location(
    "Citadel of Ricks",
    "https://rickandmortyapi.com/api/location/3"
  ),
  "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
  [
    "https://rickandmortyapi.com/api/episode/1",
    "https://rickandmortyapi.com/api/episode/2",
    "https://rickandmortyapi.com/api/episode/3",
    "https://rickandmortyapi.com/api/episode/4",
    "https://rickandmortyapi.com/api/episode/5",
    "https://rickandmortyapi.com/api/episode/6",
    "https://rickandmortyapi.com/api/episode/7",
    "https://rickandmortyapi.com/api/episode/8",
    "https://rickandmortyapi.com/api/episode/9",
    "https://rickandmortyapi.com/api/episode/10",
    "https://rickandmortyapi.com/api/episode/11",
    "https://rickandmortyapi.com/api/episode/12",
    "https://rickandmortyapi.com/api/episode/13",
    "https://rickandmortyapi.com/api/episode/14",
    "https://rickandmortyapi.com/api/episode/15",
    "https://rickandmortyapi.com/api/episode/16",
    "https://rickandmortyapi.com/api/episode/17",
    "https://rickandmortyapi.com/api/episode/18",
    "https://rickandmortyapi.com/api/episode/19",
    "https://rickandmortyapi.com/api/episode/20",
    "https://rickandmortyapi.com/api/episode/21",
    "https://rickandmortyapi.com/api/episode/22",
    "https://rickandmortyapi.com/api/episode/23",
    "https://rickandmortyapi.com/api/episode/24",
    "https://rickandmortyapi.com/api/episode/25",
    "https://rickandmortyapi.com/api/episode/26",
    "https://rickandmortyapi.com/api/episode/27",
    "https://rickandmortyapi.com/api/episode/28",
    "https://rickandmortyapi.com/api/episode/29",
    "https://rickandmortyapi.com/api/episode/30",
    "https://rickandmortyapi.com/api/episode/31",
    "https://rickandmortyapi.com/api/episode/32",
    "https://rickandmortyapi.com/api/episode/33",
    "https://rickandmortyapi.com/api/episode/34",
    "https://rickandmortyapi.com/api/episode/35",
    "https://rickandmortyapi.com/api/episode/36",
    "https://rickandmortyapi.com/api/episode/37",
    "https://rickandmortyapi.com/api/episode/38",
    "https://rickandmortyapi.com/api/episode/39",
    "https://rickandmortyapi.com/api/episode/40",
    "https://rickandmortyapi.com/api/episode/41",
    "https://rickandmortyapi.com/api/episode/42",
    "https://rickandmortyapi.com/api/episode/43",
    "https://rickandmortyapi.com/api/episode/44",
    "https://rickandmortyapi.com/api/episode/45",
    "https://rickandmortyapi.com/api/episode/46",
    "https://rickandmortyapi.com/api/episode/47",
    "https://rickandmortyapi.com/api/episode/48",
    "https://rickandmortyapi.com/api/episode/49",
    "https://rickandmortyapi.com/api/episode/50",
    "https://rickandmortyapi.com/api/episode/51",
  ],
  "https://rickandmortyapi.com/api/character/1",
  "Human"
);
const ComponentPreviews = () => {
  const [isLoading, setIsLoading] = useState(false);
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
        <Navbar items={menuItems} />
      </ComponentPreview>
      <ComponentPreview path="/MainScreen">
        <MainScreen />
      </ComponentPreview>
      <ComponentPreview path="/NavMenuItem">
        <NavMenuItem
          name={"Item"}
          isFull={true}
          Icon={MdIcon.MdOutlineKeyboardArrowRight}
        />
      </ComponentPreview>
      <ComponentPreview path="/CharacterComponent">
        <CharacterComponent character={rick} />
      </ComponentPreview>
      <ComponentPreview path="/ComponentPreviews">
        <ComponentPreviews />
      </ComponentPreview>
      <ComponentPreview path="/CircularIndeterminate">
        <CircularLoading />
      </ComponentPreview>
      <ComponentPreview path="/MyButton">
        <MyButton
          isLoading={isLoading}
          onClick={() => {
            setIsLoading((draft) => !draft);
          }}
        >
          Mobin yaardim
        </MyButton>
      </ComponentPreview>
    </Previews>
  );
};

export default ComponentPreviews;
