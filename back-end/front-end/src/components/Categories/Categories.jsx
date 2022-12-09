import React, { Component, } from "react";
import './title.css';

export default class Categories extends Component {
  render() {
    return(
      <>
      <div className="container">
        <div className="row">
             <div className="col">
              <h1 className="title">Filter by Cateogries</h1>
            </div>
        </div>
        <div className="row">
            <div className="col">
               <button className="btn">All</button>
               <button className="btn">Home Goods</button>
               <button className="btn">TechnologyBox</button>
               <button className="btn">Books</button>
            </div>
            <div className="col">
  <div className="card-group">
  <div className="card">
    <img className="card-img-top" src=".../100px180/" alt="Card image cap"></img>
    <div className="card-body">
      <h5 className="card-title">Home Goods1</h5>
      <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      <span className="price">$0.0</span>
    </div>
  </div>
  <div className="card">
    <img className="card-img-top" src=".../100px180/" alt="Card image cap"></img>
    <div className="card-body">
      <h5 className="card-title">Home Goods2</h5>
      <p className="card-text">Rubber Lip Design
The mouth of the dust pan adopts the integrated TPR flat rubber lip, and it conforms to clean all garbage and debris into dustpan, not swept underneath it.</p>
      <span className="price">$0.0</span>
    </div>
  </div>
  <div className="card">
    <img className="card-img-top" src=".../100px180/" alt="Card image cap"></img>
    <div className="card-body">
      <h5 className="card-title">Home Goods3</h5>
      <p className="card-text">Oil Diffuser with Flame Light Air Aroma Humidifier for Home Large & Small Room,Office or Yoga</p>

      <span className="price">$0.0</span>
    </div>
  </div>
</div>
            </div>
        </div>
      </div>
      
      
      
      </>

    );

  }
}