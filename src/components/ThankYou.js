import React from "react";
import { Link } from "react-router-dom";

function ThankYou() {
  return (
    <div>

      <div className="row justify-content-md-center">
        <div className="card col-8 text-center p-3">
          <h1>¡Gracias por tu compra!</h1>
          <p>Esperamos que disfrutes tus productos para tus mascotas.</p>

          <p>
            <Link className="btn btn-dark btn-lg px-4 gap-3" to="/products">
              <i class="bi bi-shop"></i> Explorar productos
            </Link>
          </p>
          
          <img src="https://omarhs.com/assets/beagle-dog.gif" className="img-thumbnail img-thanks" alt="Thanks" />


        </div>
      </div>
      
    </div>
  );
}

export default ThankYou;
