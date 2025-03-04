import React from "react";
import { Link } from "react-router-dom";

function ProductItem({ product }) {
  return (
    <div className="card">
      {/* <img src={product.image} className="card-img-top" alt={product.name} /> */}
      <div className="card-body">
        <h5 className="card-title">{product.name}</h5>
        <span class="badge text-bg-dark">Country: {product.country}</span>
        <p className="card-text">{product.description}</p>
        
      </div>
    </div>
  );
}
export default ProductItem;
