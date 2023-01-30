import React from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { HomeScreen } from "./home/HomeScreen";
import {Navbar} from "../../components/Navbar";

function MainScreen() {
  const navigate = useNavigate();

  // @ts-ignore
  return (
    <div>
      <Navbar />
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
