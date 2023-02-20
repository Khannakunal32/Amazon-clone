import React from "react";
import "./Product.css";

function Product({ title, price, image, rating }) {
  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating).fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
       
      </div>
{/* <div className="product" > */}
      <img  src={image} alt="Book"></img>
{/* </div> */}
      <button>Add to Basket</button>
    </div>
  );
}

export default Product;
