import React, { Component } from "react";
import { Link } from 'react-router-dom';
import "./index.css";

export default class Home extends Component {
  render() {
    return (
      <>

        {/* Menu Highlights */}

        <div class = "HighBox">
            <div className = "HighlightBox"></div>
        </div>

        {/* Categories and it's description */}
        <div className = "categories">
          Categories
        </div>
        <div className = "categoriesDescription">
          Here are some popular categories that students are currently selling!
        </div>
        <div class = "centerButton">
        <Link to = '/all' className = 'flat-button1 margin-auto'>Shop All</Link>
        </div>
        {/* ------------------------------- */}

        {/* These hold the three Main Categories */}
        <div className = "categoryTypes">

          <div className = "HomeGoodsBox"></div>
          <div className = "HomeGoods">
            <b>Home Goods</b>
          </div>

          <div class = "centerTechBox">
            <div className = "TechnologyBox"></div>
          </div>

          <div className = "Technology">
            <b>Technology</b>
          </div>


          <div class = "centerBooksBox">
            <div className = "BooksBox"></div>
          </div>
          <div className = "Books">
            <b>Books</b>
          </div>

        </div>
        {/* ------------------------------------ */}

        {/* Posts and it's description */}

        <div className = "containerPosts"></div>
        <div className = "posts">
        Posts
        </div>
        <div className = "postsDescription">
          Here are the recent posts that students are currently selling!
        </div>
        <div class = "centerButton">
        <Link to = '/all' className = 'flat-button1 margin-auto'>Shop All</Link>
        </div>
        <div className = "Post1"></div>
        <div className = "Post2"></div>
        <div className = "Post3"></div>
        {/* ------------------------------- */}


        {/* Auctions and it's description */}
        <div className = "auctions">
        Auctions
        </div>
        <div className = "auctionsDescription">
          Here are the recent posts that students are currently selling!
        </div>
        <div class = "centerButton">
        <Link to = '/all' className = 'flat-button1 margin-auto'>Shop All</Link>
        </div>
        {/* ------------------------------- */}

      </>
    );
  }
}