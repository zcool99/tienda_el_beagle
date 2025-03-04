import React from "react";
import { Link } from "react-router-dom";

const Header = () => {

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <i class="bi bi-house"></i> Tienda - El Beagle
        </Link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/products">
                <i class="bi bi-shop"></i> Productos
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/products-api">
                <i class="bi bi-shop"></i> Productos API
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
              <i class="bi bi-people"></i> Acerca de
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/cart">
                <i class="bi bi-cart"></i> Carrito 
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                <i class="bi bi-envelope"></i> Contacto 
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
