import React from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import MainScreen from "./screens/main/MainScreen";
import LoginScreen from "./screens/auth/login/LoginScreen";
import SignUpScreen from "./screens/auth/signup/SignUpScreen";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainScreen/>}/>
                <Route path="login" element={<LoginScreen/>}/>
                <Route path="signup" element={<SignUpScreen/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
