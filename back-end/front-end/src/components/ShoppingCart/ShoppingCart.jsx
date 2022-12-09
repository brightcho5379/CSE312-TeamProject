import React , { Component, } from 'react';
import ReactDOM from 'react-dom';

export default class ShoppingCart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
  }

  addToCart(item) {
    this.setState({
      items: this.state.items.concat([item])
    });
  }

  removeFromCart(item) {
    this.setState({
      items: this.state.items.filter(i => i.id !== item.id)
    });
  }

  render() {
    return (
      <div>
        <h1>Shopping Cart</h1>
        {this.state.items.map(item => (
          <Product
            key={item.id}
            item={item}
            image={item.image}
            name={item.name}
            description={item.description}
            price={item.price}
            category={item.category}
            removeFromCart={this.removeFromCart.bind(this)}
          />
        ))}
      </div>
    );
  }
}

function Product(props) {
  return (
    <div>
      <img src={props.image} alt={props.name} />
      <h2>{props.name}</h2>
      <p>{props.description}</p>
      <p>Price: {props.price}</p>
      <p>Category: {props.category}</p>
      <button onClick={() => props.removeFromCart(props.item)}>
        Remove from Cart
      </button>
    </div>
  );
}