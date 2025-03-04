import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./assets/css/main.css";


import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Cart from "./components/Cart";
import Contact from "./components/Contact";
import ProductList from "./components/ProductList";
import ProductListAPI from "./components/ProductListAPI";
import ProductDetails from "./components/ProductDetails";
import ThankYou from "./components/ThankYou";
import { CartProvider } from "./context/CartContext";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Header />
      <div className="container mt-4">
        <CartProvider>
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/products" element={<ProductList />} />
              <Route path="/products-api" element={<ProductListAPI />} />
              <Route path="/product/:id" element={<ProductDetails />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/thank-you" element={<ThankYou />} />
          </Routes>
        </CartProvider>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
