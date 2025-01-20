import React from "react";
import logo from "../assets/images/logo.png"; 


function About() {
  return (
    <>

      <div className="container mt-4 text-break">
        <div className="row justify-content-center">
          <div className="col-12">
            <h1>Acerca de nuestra Tienda Online</h1>
            <p>"El Beagle nació en 2025 con una visión clara: crear un espacio donde cada mascota y su familia encuentren exactamente lo que necesitan. Nuestra historia comenzó como una pequeña tienda de barrio, impulsada por la pasión de un grupo de amantes de los animales que soñaban con ofrecer productos y servicios de primera calidad para las mascotas.</p>

            <p>Lo que nos distingue es nuestro compromiso con el bienestar animal. Cada producto en nuestros estantes ha pasado por un riguroso proceso de selección, asegurando que cumple con los más altos estándares de calidad y seguridad. Trabajamos directamente con proveedores certificados y marcas reconocidas que comparten nuestra filosofía de cuidado y respeto por los animales.</p>

            <p>En El Beagle, no solo somos una tienda de mascotas; somos una comunidad. Nuestro equipo está formado por profesionales apasionados, incluyendo veterinarios y especialistas en comportamiento animal, quienes están siempre dispuestos a brindar asesoría personalizada. Entendemos que cada mascota es única, y nos esforzamos por ofrecer soluciones adaptadas a sus necesidades específicas.</p>

            <p>Mirando hacia el futuro, seguimos comprometidos con nuestra misión de innovar y mejorar constantemente. Además de nuestra tienda física, hemos expandido nuestros servicios al mundo digital para estar más cerca de nuestros clientes. Porque en El Beagle creemos que cada cola feliz y cada ronroneo satisfecho es una prueba de que estamos cumpliendo nuestro propósito: hacer la vida de las mascotas y sus familias más feliz y saludable."</p>
          </div>
        </div>
         
         
         
         <img className="d-block mx-auto mb-4" src={logo} alt="Logo"/>
      </div>
      
    </>
  );
}

export default About;
