import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import "./Home.css";
import "bootstrap/dist/css/bootstrap.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import bags from './images/bags.jpg';
import computers from './images/computers.jpg';
import tshirts from './images/tshirts.jpg';
import Slider from "react-slick";



const Home = () => {
  /* Slide Show functionality */

  let settings = {
    infinite: true,
    speed: 1000,
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 1, /* 4 */
          slidesToScroll: 1, /* 2 */
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 300,
        settings:{
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ],
  };

  return (
    <>
      {/* Menu Highlights */}
      
      <div className = "HighBox">
        {/*<div className = "bgBox"></div>*/}
          <div className = "HighlightBox">
        <Slider {...settings}>
          <div className="out">
                <img
                  id = 'shopItems'
                  className="rectangle"
                  alt={"Shopping Items"}
                  src={bags}
                  height={370}
                  width={790}
                />
          </div>
          <div className="out">
              <img
                className="rectangle"
                alt={"Shopping Items"}
                src={tshirts}
                height={370}
                width={850}
              />
          </div>
          <div className="out">
                <img
                  className="rectangle"
                  alt={"Shopping Items"}
                  src={computers}
                  height={370}
                  width={880}
                />
            </div>
        </Slider>
      
          </div>
      </div>











      {/* Categories and it's description 
      <div className = "categories">
        Categories
      </div>
      <div className = "categoriesDescription">
        Here are some popular categories that students are currently selling!
      </div>
      <div className = "centerButton">
      <Link to = '/all' className = 'flat-button1 margin-auto'>Shop All</Link>
      </div>
      {/* ------------------------------- 


      <div className = "categoryTypes">

        <div className = "HomeGoodsBox"></div>
        <div className = "HomeGoods">
          <b>Home Goods</b>
        </div>

        <div className = "centerTechBox">
          <div className = "TechnologyBox"></div>
        </div>

        <div className = "Technology">
          <b>Technology</b>
        </div>


        <div className = "centerBooksBox">
          <div className = "BooksBox"></div>
        </div>
        <div className = "Books">
          <b>Books</b>
        </div>

      </div>


      <div className = "containerPosts"></div>
      <div className = "posts">
      Posts
      </div>
      <div className = "postsDescription">
        Here are the recent posts that students are currently selling!
      </div>
      <div className = "centerButton">
      <Link to = '/all' className = 'flat-button1 margin-auto'>Shop All</Link>
      </div>

      <div className = "PostBoxes">
          <div className = "Post1">
            <div className = "Post1Box"></div>
          </div>

          <div className = "Post2">
            <div className = "Post2Box"></div>
          </div>

          <div className = "Post3">
            <div className = "Post3Box"></div>
          </div>
      </div>



       Auctions and it's description 
      <div className = "auctions">
      Auctions
      </div>
      <div className = "auctionsDescription">
        Here are the recent posts that students are currently selling!
      </div>
      <div className = "centerButton">
      <Link to = '/all' className = 'flat-button1 margin-auto'>Shop All</Link>
      </div>

      <div className = "AuctionBoxes">
          <div className = "Auction1">
            <div className = "Auction1Box"></div>
          </div>

          <div className = "Auction2">
            <div className = "Auction2Box"></div>
          </div>

          <div className = "Auction3">
            <div className = "Auction3Box"></div>
          </div>
      </div>
      ------------------------------- */}
    
    </>
  );
}
export default Home;