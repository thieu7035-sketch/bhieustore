import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./layout";
import Home from "./home";
import ListProducts from "./ListProducts";
import ProductDetail from "./ProductDetail";
import ListProducts_SP_Admin from "./ListProducts_SP_Admin";
import LoginPage from "./LoginPage";
import LogoutPage from "./LogoutPage";
import ProtectedRoute from "./ProtectedRoute";
import Trang1 from "./Trang1";
import Trang2 from "./Trang2";
import Cart from "./Cart";
import Checkout from "./Checkout";
import EditProduct from "./EditProduct";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="products" element={<ListProducts />} />
          <Route path="product/:id" element={<ProductDetail />} />
          <Route path="trang1" element={<Trang1 />} />
          <Route path="trang2" element={<Trang2 />} />
          <Route path="cart" element={<Cart />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="logout" element={<LogoutPage />} />
          <Route
            path="admin"
            element={
              <ProtectedRoute>
                <ListProducts_SP_Admin />
              </ProtectedRoute>
            }
          />
          <Route
            path="admin/product/new"
            element={
              <ProtectedRoute>
                <EditProduct />
              </ProtectedRoute>
            }
          />
          <Route
            path="admin/product/edit/:id"
            element={
              <ProtectedRoute>
                <EditProduct />
              </ProtectedRoute>
            }
          />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
