import React from "react";

import { MuiThemeProvider, CssBaseline } from "@material-ui/core";
import darkTheme from "./styling/darkTheme";

// import logo from "./logo.svg";
import "./App.css";

import Home from "./views/home/Home.jsx";

function App() {
    return (
        <MuiThemeProvider theme={darkTheme}>
            <CssBaseline />
            <Home/>
        </MuiThemeProvider>
    );
}

export default App;
