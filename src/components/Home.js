import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png"; 
import "../assets/css/home.css";


import HomeSection from "../components/HomeSection";

function Home() {
  return (
    <>
    <div className="px-4 py-5 my-5 text-center">
      <img className="d-block mx-auto mb-4" src={logo} alt="Logo"/>
      <h1 className="display-5 fw-bold text-body-emphasis">Bienvenido a nuestra Tienda Online - El Beagle</h1>
      <h3>Tu mejor amigo merece lo mejor - El Beagle, todo para tu mascota</h3>
      <div className="col-lg-6 mx-auto">
        <p className="lead mb-4">En El Beagle encontrarás todo lo que necesitas para hacer feliz a tu mascota. 
        Productos de calidad, atención personalizada y el mejor servicio.</p>
        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
          
          <Link className="btn btn-dark btn-lg px-4 gap-3" to="/products">
            <i class="bi bi-shop"></i> Explorar productos
          </Link>
        </div>
        <p className="mt-3 dev"><strong>Desarrollado por: </strong> <a href="https://omarhs.com/" target="_blank" rel="noreferrer" >Omar Hernández Sarmiento</a></p>
      </div>
      
    </div>
    <HomeSection />

    </>
  );
}

export default Home;
