import React, { Component } from "react";
import { Link } from "react-router-dom";
import { faShoppingCart, faUser, faStar, faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "./index.css";
import Cookies from 'universal-cookie';

function hasCookies() {
  const cookies = new Cookies();
  const allCookies = cookies.getAll();
  return Object.keys(allCookies).length > 0;
}

function clearAllCookies() {
  const cookies = new Cookies();
  const allCookies = cookies.getAll();
  Object.keys(allCookies).forEach((cookieName) => {
      cookies.set(cookieName, '', { expires: new Date(0) });
  });
}

function refreshPage() {
  // Refresh the page
  clearAllCookies();
  window.location.href = '/login';
}

class NavBar extends Component {

  handleSearchInput = (event) => {
    // get the value of the search input
    const searchValue = event.target.value;
    // do something with the search value, such as send it to a search API
  }


  render() {
    if(hasCookies()){
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
                          <button onClick ={refreshPage}><b>Logout</b></button>       
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
                          <Link to="/Post" className="nav-link">
                          Post
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
                          <input
                          type="text"
                          className="searchBarText"
                          placeholder="Search.."
                          onInput={this.handleSearchInput}/>
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
    else{
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
                          <Link to="/Post" className="nav-link">
                          Post
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
                          <input
                          type="text"
                          className="searchBarText"
                          placeholder="Search.."
                          onInput={this.handleSearchInput}/>
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
}

export default NavBar;