import React from "react";
import { Route, Routes } from "react-router-dom";
import { HomeScreen } from "./home/HomeScreen";
import { Navbar, NavItem } from "../../components/navBar/Navbar";
import * as IoIcon from "react-icons/io5";

const menuItems: Array<NavItem> = [
  {
    title: "Home",
    className: "",
    icon: IoIcon.IoHomeOutline,
  },
  {
    title: "Characters",
    className: "",
    icon: IoIcon.IoPersonOutline,
  },
  {
    title: "Locations",
    className: "",
    icon: IoIcon.IoLocationOutline,
  },
  {
    title: "Episodes",
    className: "",
    icon: IoIcon.IoFilmOutline,
  },
];

function MainScreen() {
  //const navigate = useNavigate();

  // @ts-ignore
  return (
    <div>
      <Navbar items={menuItems} />
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/characters" element={<HomeScreen />} />
        <Route path="/locations" element={<HomeScreen />} />
        <Route path="/episodes" element={<HomeScreen />} />
      </Routes>
    </div>
  );
}

export default MainScreen;
