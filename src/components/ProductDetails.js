import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import { useParams } from "react-router-dom";
import productsData from "../products.json";

function ProductDetails() {
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const { id } = useParams();
  const product = productsData.find((p) => p.id === parseInt(id));

  if (!product) {
    return <p>Producto no encontrado.</p>;
  }

  const handleAddToCart = () => {
    addToCart(product, quantity);
    alert("Producto agregado al carrito.");
  };

  return (
    <div>
      <div className="row justify-content-md-center">
        <div className="card col-4">
          <h1>{product.name}</h1>
          <img src={product.image} className="card-img-top" alt={product.name} />
          <div className="card-body">
            <span class="badge text-bg-dark">{product.category}</span>
            <p>{product.description}</p>
            <p>Precio: ${product.price}</p>
            <div>
              <label>Cantidad:</label>
              <input
                type="number"
                min="1"
                value={quantity}
                onChange={(e) => setQuantity(Number(e.target.value))}
                className="form-control"
              />
            </div>
            <button className="btn btn-dark d-flex justify-content-center w-100 mt-3" onClick={handleAddToCart}>
              Agregar al carrito
            </button>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
