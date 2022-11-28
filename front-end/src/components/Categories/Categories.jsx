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
              <div className="cards">
                 <div className="card">
                    <div className="card-header">
                        <img src="components\Categories\1.png" alt=""/>
                    </div>
                    <div className="card-body">
                        <h2 className="titleProduct">Home Goods</h2>
                        <span className="price">$0.0</span>
                    </div>
                 </div>
                 <div className="card">
                    <div className="card-header">
                        <img src="1.png" alt=""/>
                    </div>
                    <div className="card-body">
                        <h2 className="titleProduct">Technology</h2>
                        <span className="price">$0.0</span>
                    </div>
                 </div>
                 <div className="card">
                    <div className="card-header">
                        <img src="1.png" alt=""/>
                    </div>
                    <div className="card-body">
                        <h2 className="titleProduct">Books</h2>
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