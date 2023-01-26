import React from 'react';
import {ComponentPreview, Previews} from '@react-buddy/ide-toolbox';
import {PaletteTree} from './palette';
import App from "../App";
import AuthBannerComponent from "../screens/auth/componenets/AuthBannerComponent";
import LoginScreen from "../screens/auth/login/LoginScreen";

const ComponentPreviews = () => {
    return (
        <Previews palette={<PaletteTree/>}>
            <ComponentPreview path="/App">
                <App/>
            </ComponentPreview>
            <ComponentPreview path="/AuthBannerComponent">
                <AuthBannerComponent/>
            </ComponentPreview>
            <ComponentPreview path="/LoginScreen">
                <LoginScreen/>
            </ComponentPreview>
        </Previews>
    );
};

export default ComponentPreviews;