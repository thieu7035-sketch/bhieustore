import React, { useEffect, useState } from "react";
import { supabase } from "./supabaseClient";
import { Link } from "react-router-dom";

function ListProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    fetchProducts();
    updateCartCount();
  }, []);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase.from("products").select("*");

      if (error) throw error;
      setProducts(data || []);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const updateCartCount = () => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    setCartCount(totalItems);
  };

  const addToCart = (product) => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const existingItem = cart.find((item) => item.id === product.id);

    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      cart.push({ ...product, quantity: 1 });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartCount();
    alert(`Đã thêm ${product.name} vào giỏ hàng!`);
  };

  if (loading) {
    return (
      <div style={{ 
        padding: "60px 20px", 
        textAlign: "center",
        backgroundColor: "#0f172a",
        minHeight: "60vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}>
        <div style={{
          color: "#94a3b8",
          fontSize: "1.2rem",
          display: "flex",
          alignItems: "center",
          gap: "12px"
        }}>
          <div style={{
            width: "24px",
            height: "24px",
            border: "2px solid #334155",
            borderTop: "2px solid #cbd5e1",
            borderRadius: "50%",
            animation: "spin 1s linear infinite"
          }}></div>
          Đang tải sản phẩm...
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div style={{ 
        padding: "60px 20px", 
        color: "#fb7185", 
        textAlign: "center",
        backgroundColor: "#0f172a",
        minHeight: "60vh"
      }}>
        <h2 style={{ color: "#e2e8f0", marginBottom: "10px" }}>Lỗi tải sản phẩm</h2>
        <p>{error}</p>
      </div>
    );
  }

  return (
    <div style={{ 
      padding: "40px 20px", 
      maxWidth: "1400px", 
      margin: "0 auto",
      backgroundColor: "#0f172a",
      minHeight: "100vh"
    }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "40px",
          backgroundColor: "#1e293b",
          padding: "25px 30px",
          borderRadius: "16px",
          border: "1px solid #334155",
          boxShadow: "0 10px 40px rgba(0,0,0,0.3)"
        }}
      >
        <h1 style={{
          margin: 0,
          fontSize: "2.5rem",
          color: "#f1f5f9",
          fontWeight: "700"
        }}>
          Danh sách sản phẩm
        </h1>
        <Link
          to="/cart"
          style={{
            padding: "14px 24px",
            backgroundColor: "#ffffff",
            color: "#000000",
            textDecoration: "none",
            borderRadius: "12px",
            display: "flex",
            alignItems: "center",
            gap: "12px",
            position: "relative",
            fontWeight: "bold",
            fontSize: "1rem",
            transition: "all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55)",
            border: "2px solid #ffffff",
            boxShadow: "0 8px 25px rgba(255, 255, 255, 0.1)"
          }}
          onMouseOver={(e) => {
            e.target.style.backgroundColor = "#f1f5f9";
            e.target.style.borderColor = "#f1f5f9";
            e.target.style.transform = "translateY(-2px)";
            e.target.style.boxShadow = "0 15px 35px rgba(255, 255, 255, 0.2)";
          }}
          onMouseOut={(e) => {
            e.target.style.backgroundColor = "#ffffff";
            e.target.style.borderColor = "#ffffff";
            e.target.style.transform = "translateY(0)";
            e.target.style.boxShadow = "0 8px 25px rgba(255, 255, 255, 0.1)";
          }}
        >
          🛒 Giỏ hàng
          {cartCount > 0 && (
            <span
              style={{
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
                position: "absolute",
                top: "-8px",
                right: "-8px",
                boxShadow: "0 4px 12px rgba(0,0,0,0.3)"
              }}
            >
              {cartCount}
            </span>
          )}
        </Link>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
          gap: "30px",
        }}
      >
        {products.map((product) => (
          <div
            key={product.id}
            style={{
              backgroundColor: "#1e293b",
              border: "1px solid #334155",
              borderRadius: "20px",
              padding: "25px",
              boxShadow: "0 15px 50px rgba(0,0,0,0.3)",
              transition: "all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)",
              position: "relative",
              overflow: "hidden"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-10px) scale(1.02)";
              e.currentTarget.style.boxShadow = "0 25px 60px rgba(0,0,0,0.4)";
              e.currentTarget.style.borderColor = "#475569";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0) scale(1)";
              e.currentTarget.style.boxShadow = "0 15px 50px rgba(0,0,0,0.3)";
              e.currentTarget.style.borderColor = "#334155";
            }}
          >
            {/* Image overlay */}
            <div style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              height: "200px",
              background: "linear-gradient(135deg, rgba(30, 41, 59, 0.8) 0%, rgba(15, 23, 42, 0.9) 100%)",
              borderRadius: "16px 16px 0 0",
              zIndex: 1
            }} />
            
            {product.image && (
              <div style={{
                position: "relative",
                height: "200px",
                marginBottom: "20px",
                zIndex: 2
              }}>
                <img
                  src={product.image}
                  alt={product.name}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    borderRadius: "16px",
                    boxShadow: "0 10px 30px rgba(0,0,0,0.4)"
                  }}
                />
              </div>
            )}

            <h3
              style={{
                margin: "0 0 12px 0",
                fontSize: "1.4rem",
                color: "#f1f5f9",
                fontWeight: "700",
                minHeight: "50px",
                lineHeight: "1.4"
              }}
            >
              {product.name}
            </h3>

            <p
              style={{
                color: "#94a3b8",
                marginBottom: "20px",
                fontSize: "0.95rem",
                lineHeight: "1.6",
                minHeight: "50px",
                display: "-webkit-box",
                WebkitLineClamp: 3,
                WebkitBoxOrient: "vertical",
                overflow: "hidden"
              }}
            >
              {product.description}
            </p>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                paddingTop: "20px",
                borderTop: "1px solid #334155"
              }}
            >
              <span
                style={{
                  color: "#f1f5f9",
                  fontWeight: "800",
                  fontSize: "1.5rem",
                  letterSpacing: "-0.5px"
                }}
              >
                {product.price?.toLocaleString("vi-VN")} VNĐ
              </span>

              <div style={{ display: "flex", gap: "12px" }}>
                <Link
                  to={`/product/${product.id}`}
                  style={{
                    padding: "12px 20px",
                    border: "2px solid #475569",
                    color: "#e2e8f0",
                    textDecoration: "none",
                    borderRadius: "10px",
                    fontSize: "0.9rem",
                    fontWeight: "600",
                    transition: "all 0.3s ease",
                    backgroundColor: "transparent",
                    textTransform: "uppercase",
                    letterSpacing: "0.5px"
                  }}
                  onMouseOver={(e) => {
                    e.target.style.backgroundColor = "#475569";
                    e.target.style.color = "#f1f5f9";
                    e.target.style.transform = "translateY(-2px)";
                  }}
                  onMouseOut={(e) => {
                    e.target.style.backgroundColor = "transparent";
                    e.target.style.color = "#e2e8f0";
                    e.target.style.transform = "translateY(0)";
                  }}
                >
                  Chi tiết
                </Link>

                <button
                  onClick={() => addToCart(product)}
                  style={{
                    padding: "12px 24px",
                    backgroundColor: "#ffffff",
                    color: "#000000",
                    border: "2px solid #ffffff",
                    borderRadius: "10px",
                    cursor: "pointer",
                    fontSize: "0.9rem",
                    fontWeight: "700",
                    transition: "all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55)",
                    textTransform: "uppercase",
                    letterSpacing: "0.5px",
                    boxShadow: "0 8px 25px rgba(255, 255, 255, 0.1)"
                  }}
                  onMouseOver={(e) => {
                    e.target.style.backgroundColor = "#f1f5f9";
                    e.target.style.borderColor = "#f1f5f9";
                    e.target.style.transform = "translateY(-3px) scale(1.05)";
                    e.target.style.boxShadow = "0 15px 35px rgba(255, 255, 255, 0.2)";
                  }}
                  onMouseOut={(e) => {
                    e.target.style.backgroundColor = "#ffffff";
                    e.target.style.borderColor = "#ffffff";
                    e.target.style.transform = "translateY(0) scale(1)";
                    e.target.style.boxShadow = "0 8px 25px rgba(255, 255, 255, 0.1)";
                  }}
                >
                  🛒 Thêm giỏ
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}

export default ListProducts;