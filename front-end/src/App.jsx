import React, {Component} from "react";
import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import Auctions from "./components/Auctions/Auctions";
import Categories from "./components/Categories/Categories";
import Post from "./components/Post/Post";
import Register from "./components/Login/Register";
import ShoppingCart from "./components/ShoppingCart/ShoppingCart";
import Profile from "./components/Profile/profile";

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
                        <Route path = "/Auctions" element = {<Auctions/>} />
                        <Route path = "/Categories" element = {<Categories/>} />
                        <Route path = "/Post" element = {<Post/>} />
                        <Route path = "/Register" element = {<Register/>} />
                        <Route path = "/ShoppingCart" element = {<ShoppingCart/>} />
                        <Route path = "/Profile" element = {<Profile/>} />
                    </Routes>
                </div>
            </BrowserRouter>
        );
    }
}