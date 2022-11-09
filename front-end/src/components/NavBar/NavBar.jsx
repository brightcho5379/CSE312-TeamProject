import React, { Component } from "react";
import { Link } from "react-router-dom";
import { faShoppingCart, faUser, faStar, faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "./index.css";

class NavBar extends Component {
  render() {
    return (
      <React.Fragment>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark navbar-style">
          <a className="navbar-brand" href="/#">
            UniMarket
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

            
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <div className = "navText">
                    <ul className="navbar-nav mr-auto">
                    
                    <li className="nav-item">
                        <Link to="/Login" className="nav-link">
                        Login
                        </Link>
                    </li>

                    <li className="nav-item">
                        <Link to="/Home" className="nav-link">
                        Home
                        </Link>
                    </li>

                    <li className="nav-item">
                        <Link to="/Auctions" className="nav-link">
                        Auctions
                        </Link>
                    </li>

                    <li className="nav-item">
                        <Link to="/Sell" className="nav-link">
                        Sell
                        </Link>
                    </li>

                    <li className="nav-item">
                        <Link to="/Categories" className="nav-link">
                        Categories
                        </Link>
                    </li>
                  
                    </ul>
                    </div>
                </div>

                <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                <div className = "navText2">
                    <ul className="navbar-nav mr-auto">

                    <li className = 'nav-search'>
                      <FontAwesomeIcon icon = {faSearch} className = 'searchBarIcon' color = "#4d4d4e"/>
                      <input type = 'text' className = 'searchBarText' placeholder = 'Search..'/>
                    </li>
                    <li className="nav-item">
                        <Link to="/Favorites" className="nav-link">
                        <FontAwesomeIcon icon = {faStar} color = "#4d4d4e"/>
                        </Link>
                    </li>
                    
                  <div className = "navRightSide">
                    <li className="nav-item">
                        <Link to="/ShoppingCart" className="nav-link">
                        <FontAwesomeIcon icon = {faShoppingCart} color = "#4d4d4e"/>
                        </Link>
                    </li>
                   </div>
                    <li className = "profile-item">
                      <Link to='/Profile' className = 'nav-link'>
                        <FontAwesomeIcon icon = {faUser} color = "#4d4d4e"/>
                      </Link>
                    </li>
                  
                    </ul>
                    </div>


                </div>
          
        </nav>
      </React.Fragment>
    );
  }
}

export default NavBar;