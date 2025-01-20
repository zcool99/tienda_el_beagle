import React from "react";

function Footer() {
  return (
    <div>
      <div className="container-fluid">
        <img src="https://omarhs.com/assets/banner.png" className="card-img-top" alt="Main Panel" />
      </div>
      <div class="container text-center">
          <footer class="d-flex flex-wrap py-3 my-4 border-top">
              <div class="col-md-12 ">
              <a href="/" class="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1">
                  Tienda Online - El Beagle
              </a>
              <span class="mb-3 mb-md-0 text-body-secondary dev">© 2025 <br /> :: Desarrollado por <a href="https://omarhs.com/" target="_blank" rel="noreferrer" >Omar Hernández Sarmiento ::</a></span>
              </div>
          </footer>
      </div>
    </div>
  );
}

export default Footer;
