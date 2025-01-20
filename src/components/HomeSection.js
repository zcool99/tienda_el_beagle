import React from "react";



const HomeSection = () => {
  return (
    <section className="home-section">
      <div className="home-section__container">
        <div className="home-section__item home-section__item--text">
          <h2 className="home-section__heading">Productos</h2>
          <p className="home-section__text">
            En El Beagle, nos dedicamos a ofrecer productos premium para el bienestar de tu mascota. Desde alimentos de alta calidad y nutritivos juguetes, hasta accesorios modernos y productos de higiene especializados. Cada artículo en nuestra tienda ha sido cuidadosamente seleccionado pensando en la salud, comodidad y felicidad de tu compañero peludo. Porque sabemos que tu mascota es parte de tu familia, solo ofrecemos lo mejor.
          </p>
        </div>
        <div className="home-section__item home-section__item--icon">
            <img src="https://omarhs.com/assets/beagle1.jpg" alt="Beagle 1" className="home-section__image" />
       
        </div>
        <div className="home-section__item home-section__item--icon">
            <img src="https://omarhs.com/assets/beagle2.jpg" alt="Beagle 2" className="home-section__image" />
        </div>
        <div className="home-section__item home-section__item--text">
          <h2 className="home-section__heading">Ropa</h2>
          <p className="home-section__text">
            Viste a tu mascota con estilo y comodidad. Nuestra colección de ropa para mascotas combina diseños modernos con materiales de alta calidad, pensados para cada temporada. Desde abrigos y suéteres para los días fríos, hasta camisetas frescas y accesorios fashion para el verano. Cada prenda está diseñada pensando en la comodidad y libertad de movimiento de tu mascota, con tallas que se adaptan perfectamente a diferentes razas y tamaños. Porque tu mascota merece lucir tan especial como es.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HomeSection;
