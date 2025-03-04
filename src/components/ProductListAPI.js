import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import queryString from "query-string";
import ProductItem from "./ProductItemAPI";

function ProductListAPI() {
  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = queryString.parse(location.search);

  const [searchTerm, setSearchTerm] = useState(queryParams.search || "");
  const [products, setProducts] = useState([]);

  // Obtenemos los productos desde la API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://192.168.100.77:8762/operador-service/products");
        if (!response.ok) {
          throw new Error("Error al obtener los productos");
        }
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  // Actualizamos la URL según el término de búsqueda
  useEffect(() => {
    const query = queryString.stringify({
      search: searchTerm || undefined,
    });
    navigate(`?${query}`, { replace: true });
  }, [searchTerm, navigate]);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value.toLowerCase());
  };

  // Filtrado basado en el nombre del producto
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm)
  );

  return (
    <div>
      <h1>Productos de API</h1>
      <div className="mb-4">
        <input
          type="text"
          className="form-control"
          placeholder="Escribe para buscar productos..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>
      <div className="row">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div key={product.id} className="col-md-4 mb-4">
              <ProductItem product={product} />
            </div>
          ))
        ) : (
          <p>No se encontraron productos.</p>
        )}
      </div>
    </div>
  );
}

export default ProductListAPI;
