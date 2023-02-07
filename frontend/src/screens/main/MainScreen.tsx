import React from "react";
import { Route, Routes } from "react-router-dom";
import { HomeScreen } from "./home/HomeScreen";
import { Navbar, NavItem } from "../../components/Navbar";
import * as MdIcon from "react-icons/md";

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
