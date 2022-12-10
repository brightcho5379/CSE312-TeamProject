import React, { useState, useEffect } from "react";
import './index.css';
import "bootstrap/dist/css/bootstrap.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from 'axios';

const Auction = () => {
  
  const axiosInstance = axios.create({
    withCredentials: true
  });
  /* Fetching items from items back-end*/
  const[products, setProducts] = useState([]);

  const [cart_item, setCart_item] = useState({
    cart_item:''
  })

    const submitHandler = async e =>{
      e.preventDefault()
      try {
          await axiosInstance.post('http://localhost:8080/addToCart', {...products})
          window.location.href = "/";
      } catch (err) {
          alert(err.response.data.msg)
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


  return (
    <>
    <br/>
      <h2>Auction Recent Posts:</h2>
        {products.slice(0, 10).map(product => (
                <div key = {product.product_id}>
                  <div className = "difft">
                  <p>Seller: {product.username}</p>
                  <p>Product: {product.item}</p>
                  <p>Price: ${product.price}</p>
                  <p>Description: {product.description}</p>
                  <img src={product.images} alt={product.item} width="450" height="400"/>
                  <form onSubmit={submitHandler}>
                  <button type="submit">Add to cart</button>
                  </form>
                  </div>
                  
                </div>
        ))}
    </>
  );

}
export default Auction;