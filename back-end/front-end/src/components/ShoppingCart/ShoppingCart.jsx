import React, {useEffect, useState} from 'react';
import axios from 'axios';
import './shoppingcart.css'

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
        {cart.slice(0, 100).map(product=> (
                <div key = {product.product_id}>
                  <div className = "dif">
                  <p>Seller: {product.username}</p>
                  <p>Product: {product.item}</p>
                  <p>Price: ${product.price}</p>
                  <p>Description: {product.description}</p>
                  <img src={product.images} alt={product.item} width="275" height="200"/>
                  </div>
              </div>
        ))}
        
      </div>
    );
  
}
export default ShoppingCart;