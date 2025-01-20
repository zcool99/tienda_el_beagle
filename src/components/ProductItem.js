import React from "react";
import { Link } from "react-router-dom";

function ProductItem({ product }) {
  return (
    <div className="card">
      <img src={product.image} className="card-img-top" alt={product.name} />
      <div className="card-body">
        <h5 className="card-title">{product.name}</h5>
        <p className="card-text">{product.description}</p>
        <p className="card-text">${product.price}</p>
        <Link to={`/product/${product.id}`} className="btn btn-dark d-flex justify-content-center">
          Ver Detalles <i class="bi bi-arrow-right"></i>
        </Link>
      </div>
    </div>
  );
}
export default ProductItem;
