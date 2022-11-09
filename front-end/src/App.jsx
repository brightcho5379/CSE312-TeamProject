import React, {Component} from "react";
import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Login from "./components/Login/Login";
import Home from "./components/Home/Home";

export default class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <NavBar />
                <div className = "container-fluid">
                    <Routes>
                        <Route path = "/" element = {<Home/>} />
                        <Route path = "/Home" element = {<Home/>} />
                        <Route path = "/Login" element = {<Login/>} />
                    </Routes>
                </div>
            </BrowserRouter>
        );
    }
}