import React , { Component, } from 'react';
import ReactDOM from 'react-dom';

export default class ShoppingCart extends Component {
  state = {
    items: []
  }

  addToCart = (event) => {
    event.preventDefault();
    const name = event.target.elements.name.value;
    const price = event.target.elements.price.value;
    const item = { name, price, id: Date.now() };
    this.setState({ items: [...this.state.items, item] });
  }

  removeFromCart = (itemId) => {
    const items = this.state.items.filter(i => i.id !== itemId);
    this.setState({ items });
  }

  render() {
    return (
        <>
      <div>
    <form onSubmit={this.addToCart}>
        <label>
        Item Name:
        <input type="text" name="name" />
        </label>
        <label>
        Item Price:
        <input type="number" name="price" />
        </label>
        <button type="submit">Add to Cart</button>
    </form>
    <ul>
        {this.state.items.map(item => (
        <li key={item.id}>
            {item.name} - {item.price}
            <button onClick={() => this.removeFromCart(item.id)}>Remove</button>
        </li>
        ))}
    </ul>
    </div>
      </>
    );
  }
}
