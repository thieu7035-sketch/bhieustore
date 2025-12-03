import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { supabase } from "./supabaseClient";

function Chitletsanpham() {
  const [user, setUser] = useState(null);
  const [cartCount, setCartCount] = useState(0);
  const location = useLocation();

  useEffect(() => {
    checkUser();
    loadCartFromStorage();
  }, []);

  const checkUser = async () => {
    const {
      data: { user },
    } = await supabase.auth.getUser();
    setUser(user);
  };

  const loadCartFromStorage = () => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    setCartCount(totalItems);
  };

  const isActive = (path) => location.pathname === path;

  const HomeIcon = () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="#ffffff">
      <path d="M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3zm-1 15v-6h2v6h-2z" />
    </svg>
  );

  const ShirtIcon = () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="#ffffff">
      <path d="M21.6 18.2L13 11.8V10h2V5.5C15 4.1 13.9 3 12.5 3S10 4.1 10 5.5V10h2v1.8l-8.6 6.4c-.3.2-.4.5-.4.8 0 .6.5 1 1 1h18c.6 0 1-.4 1-1 0-.3-.1-.6-.4-.8zM6 18l6-4.5 6 4.5H6z" />
    </svg>
  );

  const InfoIcon = () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="#ffffff">
      <circle
        cx="12"
        cy="12"
        r="10"
        fill="none"
        stroke="#ffffff"
        strokeWidth="2"
      />
      <path
        d="M12 16v-4m0-4h.01"
        stroke="#ffffff"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );

  const ContactIcon = () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="#ffffff">
      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
    </svg>
  );

  const CartIcon = () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="#000000">
      <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z" />
    </svg>
  );

  const AdminIcon = () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="#ffffff">
      <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z" />
    </svg>
  );

  const LoginIcon = () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="#000000">
      <path d="M11 7L9.6 8.4l2.6 2.6H2v2h10.2l-2.6 2.6L11 17l5-5-5-5zm9 12h-8v2h8c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-8v2h8v14z" />
    </svg>
  );

  const LogoutIcon = () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="#000000">
      <path d="M17 7l-1.41 1.41L18.17 11H8v2h10.17l-2.58 2.58L17 17l5-5zM4 5h8V3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8v-2H4V5z" />
    </svg>
  );

  return (
    <header
      style={{
        backgroundColor: "#0f172a",
        color: "white",
        padding: "15px 0",
        boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
        position: "sticky",
        top: 0,
        zIndex: 1000,
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "0 20px",
        }}
      >
        {/* Logo */}
        <Link
          to="/"
          style={{
            color: "#ffffff",
            textDecoration: "none",
            display: "flex",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <div
            style={{
              color: "#ffffff",
              fontSize: "28px",
              fontWeight: "bold",
            }}
          ></div>
          <h1
            style={{
              margin: 0,
              fontSize: "28px",
              fontWeight: "900",
              fontFamily: "'Playfair Display', serif",
              color: "#ffffff",
            }}
          >
            HIEU STORE
          </h1>
        </Link>

        {/* Navigation - ĐẦY ĐỦ CÁC TRANG */}
        <nav style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <Link
            to="/"
            style={{
              color: isActive("/") ? "#ffffff" : "#cbd5e1",
              textDecoration: "none",
              fontWeight: isActive("/") ? "bold" : "normal",
              padding: "12px 16px",
              borderRadius: "8px",
              transition: "all 0.3s ease",
              display: "flex",
              alignItems: "center",
              gap: "12px",
              backgroundColor: isActive("/")
                ? "rgba(255, 255, 255, 0.15)"
                : "transparent",
              border: isActive("/")
                ? "1px solid rgba(255, 255, 255, 0.3)"
                : "1px solid transparent",
            }}
            onMouseOver={(e) => {
              if (!isActive("/")) {
                e.target.style.backgroundColor = "rgba(255, 255, 255, 0.1)";
                e.target.style.border = "1px solid rgba(255, 255, 255, 0.2)";
                e.target.style.color = "#ffffff";
              }
            }}
            onMouseOut={(e) => {
              if (!isActive("/")) {
                e.target.style.backgroundColor = "transparent";
                e.target.style.border = "1px solid transparent";
                e.target.style.color = "#cbd5e1";
              }
            }}
          >
            <HomeIcon />
            <span>Trang chủ</span>
          </Link>

          <Link
            to="/products"
            style={{
              color: isActive("/products") ? "#ffffff" : "#cbd5e1",
              textDecoration: "none",
              fontWeight: isActive("/products") ? "bold" : "normal",
              padding: "12px 16px",
              borderRadius: "8px",
              transition: "all 0.3s ease",
              display: "flex",
              alignItems: "center",
              gap: "12px",
              backgroundColor: isActive("/products")
                ? "rgba(255, 255, 255, 0.15)"
                : "transparent",
              border: isActive("/products")
                ? "1px solid rgba(255, 255, 255, 0.3)"
                : "1px solid transparent",
            }}
            onMouseOver={(e) => {
              if (!isActive("/products")) {
                e.target.style.backgroundColor = "rgba(255, 255, 255, 0.1)";
                e.target.style.border = "1px solid rgba(255, 255, 255, 0.2)";
                e.target.style.color = "#ffffff";
              }
            }}
            onMouseOut={(e) => {
              if (!isActive("/products")) {
                e.target.style.backgroundColor = "transparent";
                e.target.style.border = "1px solid transparent";
                e.target.style.color = "#cbd5e1";
              }
            }}
          >
            <ShirtIcon />
            <span>Sản phẩm</span>
          </Link>

          <Link
            to="/trang1"
            style={{
              color: isActive("/trang1") ? "#ffffff" : "#cbd5e1",
              textDecoration: "none",
              fontWeight: isActive("/trang1") ? "bold" : "normal",
              padding: "12px 16px",
              borderRadius: "8px",
              transition: "all 0.3s ease",
              display: "flex",
              alignItems: "center",
              gap: "12px",
              backgroundColor: isActive("/trang1")
                ? "rgba(255, 255, 255, 0.15)"
                : "transparent",
              border: isActive("/trang1")
                ? "1px solid rgba(255, 255, 255, 0.3)"
                : "1px solid transparent",
            }}
            onMouseOver={(e) => {
              if (!isActive("/trang1")) {
                e.target.style.backgroundColor = "rgba(255, 255, 255, 0.1)";
                e.target.style.border = "1px solid rgba(255, 255, 255, 0.2)";
                e.target.style.color = "#ffffff";
              }
            }}
            onMouseOut={(e) => {
              if (!isActive("/trang1")) {
                e.target.style.backgroundColor = "transparent";
                e.target.style.border = "1px solid transparent";
                e.target.style.color = "#cbd5e1";
              }
            }}
          >
            <InfoIcon />
            <span>Mô Tả</span>
          </Link>

          <Link
            to="/trang2"
            style={{
              color: isActive("/trang2") ? "#ffffff" : "#cbd5e1",
              textDecoration: "none",
              fontWeight: isActive("/trang2") ? "bold" : "normal",
              padding: "12px 16px",
              borderRadius: "8px",
              transition: "all 0.3s ease",
              display: "flex",
              alignItems: "center",
              gap: "12px",
              backgroundColor: isActive("/trang2")
                ? "rgba(255, 255, 255, 0.15)"
                : "transparent",
              border: isActive("/trang2")
                ? "1px solid rgba(255, 255, 255, 0.3)"
                : "1px solid transparent",
            }}
            onMouseOver={(e) => {
              if (!isActive("/trang2")) {
                e.target.style.backgroundColor = "rgba(255, 255, 255, 0.1)";
                e.target.style.border = "1px solid rgba(255, 255, 255, 0.2)";
                e.target.style.color = "#ffffff";
              }
            }}
            onMouseOut={(e) => {
              if (!isActive("/trang2")) {
                e.target.style.backgroundColor = "transparent";
                e.target.style.border = "1px solid transparent";
                e.target.style.color = "#cbd5e1";
              }
            }}
          >
            <ContactIcon />
            <span>Địa chỉ</span>
          </Link>

          {/* Giỏ hàng */}
          <Link
            to="/cart"
            style={{
              color: "#000000",
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
              gap: "10px",
              padding: "12px 24px",
              backgroundColor: "#ffffff",
              borderRadius: "25px",
              position: "relative",
              fontWeight: "bold",
              transition: "all 0.3s ease",
              border: "2px solid #ffffff",
            }}
            onMouseOver={(e) => {
              e.target.style.backgroundColor = "#f1f5f9";
              e.target.style.borderColor = "#f1f5f9";
              e.target.style.transform = "translateY(-2px)";
              e.target.style.boxShadow = "0 4px 12px rgba(255, 255, 255, 0.3)";
            }}
            onMouseOut={(e) => {
              e.target.style.backgroundColor = "#ffffff";
              e.target.style.borderColor = "#ffffff";
              e.target.style.transform = "translateY(0)";
              e.target.style.boxShadow = "none";
            }}
          >
            <CartIcon />
            <span>Giỏ hàng</span>
            {cartCount > 0 && (
              <span
                style={{
                  position: "absolute",
                  top: "-8px",
                  right: "-8px",
                  backgroundColor: "#000000",
                  color: "#ffffff",
                  borderRadius: "50%",
                  width: "24px",
                  height: "24px",
                  fontSize: "12px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: "bold",
                  border: "2px solid #ffffff",
                  boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
                }}
              >
                {cartCount}
              </span>
            )}
          </Link>

          {/* Admin/Login */}
          {user ? (
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <Link
                to="/admin"
                style={{
                  color: "#ffffff",
                  textDecoration: "none",
                  fontWeight: "bold",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "10px 18px",
                  border: "2px solid #ffffff",
                  borderRadius: "8px",
                  transition: "all 0.3s ease",
                  backgroundColor: "transparent",
                }}
                onMouseOver={(e) => {
                  e.target.style.backgroundColor = "#ffffff";
                  e.target.style.color = "#000000";
                  e.target.style.transform = "translateY(-2px)";
                }}
                onMouseOut={(e) => {
                  e.target.style.backgroundColor = "transparent";
                  e.target.style.color = "#ffffff";
                  e.target.style.transform = "translateY(0)";
                }}
              >
                <AdminIcon />
                <span>Quản lý</span>
              </Link>
              <Link
                to="/logout"
                style={{
                  color: "#000000",
                  textDecoration: "none",
                  padding: "10px 18px",
                  backgroundColor: "#ffffff",
                  borderRadius: "8px",
                  fontWeight: "bold",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  transition: "all 0.3s ease",
                  border: "2px solid #ffffff",
                }}
                onMouseOver={(e) => {
                  e.target.style.backgroundColor = "#f1f5f9";
                  e.target.style.borderColor = "#f1f5f9";
                  e.target.style.transform = "translateY(-2px)";
                }}
                onMouseOut={(e) => {
                  e.target.style.backgroundColor = "#ffffff";
                  e.target.style.borderColor = "#ffffff";
                  e.target.style.transform = "translateY(0)";
                }}
              >
                <LogoutIcon />
                <span>Đăng xuất</span>
              </Link>
            </div>
          ) : (
            <Link
              to="/login"
              style={{
                color: "#000000",
                textDecoration: "none",
                padding: "10px 18px",
                backgroundColor: "#ffffff",
                borderRadius: "8px",
                fontWeight: "bold",
                display: "flex",
                alignItems: "center",
                gap: "8px",
                transition: "all 0.3s ease",
                border: "2px solid #ffffff",
              }}
              onMouseOver={(e) => {
                e.target.style.backgroundColor = "#f1f5f9";
                e.target.style.borderColor = "#f1f5f9";
                e.target.style.transform = "translateY(-2px)";
              }}
              onMouseOut={(e) => {
                e.target.style.backgroundColor = "#ffffff";
                e.target.style.borderColor = "#ffffff";
                e.target.style.transform = "translateY(0)";
              }}
            >
              <LoginIcon />
              <span>Đăng nhập</span>
            </Link>
          )}
        </nav>
      </div>
    </header>
  );
}

export default Chitletsanpham;
