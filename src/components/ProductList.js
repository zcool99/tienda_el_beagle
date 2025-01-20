import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import queryString from "query-string";
import ProductItem from "./ProductItem";
import productsData from "../products.json";

function ProductList() {
  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = queryString.parse(location.search);

  const [searchTerm, setSearchTerm] = useState(queryParams.search || "");
  const [category, setCategory] = useState(queryParams.category || "");
  const [priceRange, setPriceRange] = useState(
    queryParams.price ? queryParams.price.split("-").map(Number) : [0, Infinity]
  );

  // Actualizar la URL cuando los filtros cambien
  useEffect(() => {
    const query = queryString.stringify({
      search: searchTerm || undefined,
      category: category || undefined,
      price: priceRange[0] !== 0 || priceRange[1] !== Infinity ? priceRange.join("-") : undefined,
    });
    navigate(`?${query}`, { replace: true });
  }, [searchTerm, category, priceRange, navigate]);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value.toLowerCase());
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const handlePriceChange = (event) => {
    const range = event.target.value.split("-").map(Number);
    setPriceRange(range);
  };

  const filteredProducts = productsData.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm);
    const matchesCategory = category ? product.category === category : true;
    const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
    return matchesSearch && matchesCategory && matchesPrice;
  });

  return (
    <div>
      <h1>Productos</h1>
      <div className="mb-4">
        <input
          type="text"
          className="form-control"
          placeholder="Escribe para buscar productos..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <select className="form-control mt-2" value={category} onChange={handleCategoryChange}>
          <option value="">Todas las categorías</option>
          <option value="ropa">Ropa</option>
          <option value="accesorios">Accesorios</option>
        </select>
        <select className="form-control mt-2" onChange={handlePriceChange}>
          <option value="0-Infinity">Todos los precios</option>
          <option value="0-50">Hasta $50</option>
          <option value="50-100">$50 - $100</option>
          <option value="100-200">$100 - $200</option>
        </select>
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

export default ProductList;
