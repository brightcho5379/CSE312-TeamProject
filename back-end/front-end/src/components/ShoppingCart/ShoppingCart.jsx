import React, {useEffect, useState, Component} from 'react';
import axios from 'axios';
const axiosInstance = axios.create({
  withCredentials: true
});

const ShoppingCart = () =>  {
  const[cart, setCart] = useState([]);

  useEffect(() => {
    // Fetch the data from the back-end
    axiosInstance.get('http://localhost:8080/api/viewcart')
      .then(res => {
        setCart(res.data);
      })
      .catch(err => {
        console.error(err);
      });
  }, []);

  console.log(cart)


    return (
      <div>
        <h1>Shopping Cart</h1>
        
      </div>
    );
  
}
export default ShoppingCart;