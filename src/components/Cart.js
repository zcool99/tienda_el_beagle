import React from "react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

function Cart() {
  const { cart, clearCart } = useCart();
  const navigate = useNavigate();

  const handleCheckout = () => {
    clearCart();
    navigate("/thank-you");
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div>
      <h1 class="text-center">Carrito de Compras</h1>
      <div className="row justify-content-md-center">
        <div className="card col-6 p-3">
          {cart.length > 0 ? (
            <div>
              <ul>
                {cart.map((item) => (
                  <li key={item.id}>
                    {item.name} - ${item.price} x {item.quantity} = $
                    {item.price * item.quantity}
                  </li>
                ))}
              </ul>
              <p>Total: ${total}</p>
              <p className="text-center">
                <button className="btn btn-success" onClick={handleCheckout}>
                  Finalizar compra
                </button>
              </p>
            </div>
          ) : (
            <h5 className="text-center">El carrito está vacío.</h5>
          )}
        </div>
      </div>
    </div>
  );
}

export default Cart;
