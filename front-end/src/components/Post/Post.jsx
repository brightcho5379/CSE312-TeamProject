import React from "react";
import "./index.css"



const Post = () => {
    
    return (
      <>
      <br/>
      <br/>
        <div className = "itemElements">
        <label>Item:</label>
        <input id = "item" type = 'text'></input>
        <label id = "priceBox">Price: </label>
        <input id = "price"></input>
        
        </div>
      <br/>
      <div classname = 'itemDesc'>
        <textarea name="ItemDescription" id="itemDescription" cols="50" rows="7" placeholder="Item Description..."></textarea>
        
      </div>
      <input id = "category" placeholder="category..."></input>

        <div className = "postingBox">
          <div className = "itemDetails">
          </div>
          <div className = "HomeGoods">
          </div>
        </div>
        <button id = 'postingButton'>Post</button>
        
      </>
    );
  }
  export default Post;