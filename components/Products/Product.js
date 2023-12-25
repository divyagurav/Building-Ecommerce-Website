import React from "react";
import "./ProductList.css";

function Product({ product }) {
  return (
    <div id="music-content">
      <div id="album1">
        <h3>{product.title}</h3>
        <div className="image-container">
          <img className="prod-images" src={product.imageUrl} alt="" />
        </div>
        <div className="prod-details">
          <span>
            <span>${product.price}</span>
          </span>
          <button className="shop-item-button" type="button">
            ADD TO CART
          </button>
        </div>
      </div>
    </div>
  );
}

export default Product;
