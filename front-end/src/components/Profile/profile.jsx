import React, {Component} from 'react';
import ReactDOM from 'react-dom';

export default class UserProfile extends Component {
  state = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '555-555-5555',
    address: '123 Main Street, Anytown USA',
    orderHistory: []
  }

  addOrder = (order) => {
    const orderHistory = [...this.state.orderHistory, order];
    this.setState({ orderHistory });
  }

  render() {
    return (
      <div>
        <h1>User Profile</h1>
        <p>Name: {this.state.name}</p>
        <p>Email: {this.state.email}</p>
        <p>Phone: {this.state.phone}</p>
        <p>Address: {this.state.address}</p>

        <h2>Order History</h2>
        <ul>
          {this.state.orderHistory.map(order => (
            <li key={order.id}>
              {order.date}: {order.items.join(', ')}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

// ReactDOM.render(<UserProfile />, document.getElementById('root'));