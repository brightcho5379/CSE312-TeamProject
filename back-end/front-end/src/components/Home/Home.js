import React, { useState, useEffect } from "react";
import "./Home.css";
import "bootstrap/dist/css/bootstrap.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import bags from './images/bags.jpg';
import computers from './images/computers.jpg';
import tshirts from './images/tshirts.jpg';
import Slider from "react-slick";
import axios from 'axios';

const Home = () => {
  
  const axiosInstance = axios.create({
    withCredentials: true
  });
  /* Fetching items from items back-end*/
  const[products, setProducts] = useState([]);

  const submitHandler = async (e, product) => {
    e.preventDefault();
    try {
      await axiosInstance.post('http://localhost:8080/api/cart', { product });
      window.location.href = "/";
    } catch (err) {
      alert(err.response.data.msg);
    }
  }

  useEffect(() => {
    // Fetch the data from the back-end
    axios.get('http://localhost:8080/api/products')
      .then(res => {
        setProducts(res.data);
      })
      .catch(err => {
        console.error(err);
      });
  }, []);

  console.log(products)
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
      <h2>Recent Posts:</h2>
        {products.slice(0, 10).map(product => (
                <div key = {product.product_id}>
                  <div className = "different">
                  <p>Seller: {product.username}</p>
                  <p>Product: {product.item}</p>
                  <p>Price: ${product.price}</p>
                  <p>Description: {product.description}</p>
                  <img src={product.images} alt={product.item} width="450" height="400"/>
                  <form onSubmit={e => submitHandler(e, product)}>
                  <button type="submit">Add to cart</button>
                  </form>
                  </div>
                </div>
        ))}
    </>
  );

}

export default Home;
