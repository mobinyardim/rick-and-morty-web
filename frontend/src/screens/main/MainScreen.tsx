import React from "react";
import {Button} from "@material-tailwind/react";
import {useNavigate} from "react-router-dom";

function MainScreen() {
    const navigate = useNavigate();

    // @ts-ignore
    return (
        <div className="flex flex-col">
            <Button onClick={() => navigate("/login")}>
                Login
            </Button>
        </div>
    )
}

export default MainScreen;