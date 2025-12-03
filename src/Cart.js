import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Cart() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    loadCart();
  }, []);

  const loadCart = () => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(savedCart);
  };

  const saveCart = (newCart) => {
    localStorage.setItem("cart", JSON.stringify(newCart));
    setCart(newCart);
  };

  const updateQuantity = (index, newQuantity) => {
    if (newQuantity < 1) return;

    const newCart = [...cart];
    newCart[index].quantity = newQuantity;
    saveCart(newCart);
  };

  const removeItem = (index) => {
    if (window.confirm("Bạn có chắc muốn xóa sản phẩm này?")) {
      const newCart = cart.filter((_, i) => i !== index);
      saveCart(newCart);
    }
  };

  const clearCart = () => {
    if (window.confirm("Bạn có chắc muốn xóa toàn bộ giỏ hàng?")) {
      localStorage.removeItem("cart");
      setCart([]);
    }
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const getTotalItems = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  if (cart.length === 0) {
    return (
      <div
        style={{
          padding: "50px 20px",
          textAlign: "center",
          maxWidth: "600px",
          margin: "0 auto",
          backgroundColor: "#0f172a",
          minHeight: "60vh",
          borderRadius: "12px",
          boxShadow: "0 10px 40px rgba(0,0,0,0.3)"
        }}
      >
        <h2 style={{ color: "#e2e8f0", marginBottom: "15px", fontSize: "2rem" }}>Giỏ hàng của bạn đang trống</h2>
        <p style={{ color: "#94a3b8", marginBottom: "30px", fontSize: "16px" }}>
          Hãy thêm một vài sản phẩm vào giỏ hàng để bắt đầu mua sắm!
        </p>
        <Link
          to="/products"
          style={{
            padding: "15px 35px",
            backgroundColor: "#1e293b",
            color: "#e2e8f0",
            textDecoration: "none",
            borderRadius: "10px",
            fontSize: "16px",
            fontWeight: "bold",
            border: "2px solid #334155",
            transition: "all 0.3s ease",
            boxShadow: "0 4px 15px rgba(30, 41, 59, 0.4)"
          }}
          onMouseOver={(e) => {
            e.target.style.backgroundColor = "#334155";
            e.target.style.transform = "translateY(-2px)";
            e.target.style.boxShadow = "0 8px 25px rgba(51, 65, 85, 0.5)";
          }}
          onMouseOut={(e) => {
            e.target.style.backgroundColor = "#1e293b";
            e.target.style.transform = "translateY(0)";
            e.target.style.boxShadow = "0 4px 15px rgba(30, 41, 59, 0.4)";
          }}
        >
          🛍️ Tiếp tục mua sắm
        </Link>
      </div>
    );
  }

  return (
    <div style={{ 
      padding: "40px 20px", 
      maxWidth: "1200px", 
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
        <h1 style={{ color: "#f1f5f9", margin: 0, fontSize: "2.2rem", fontWeight: "700" }}>Giỏ hàng của bạn</h1>
        <button
          onClick={clearCart}
          style={{
            padding: "12px 24px",
            backgroundColor: "#475569",
            color: "#e2e8f0",
            border: "2px solid #64748b",
            borderRadius: "10px",
            cursor: "pointer",
            fontWeight: "600",
            fontSize: "14px",
            transition: "all 0.3s ease",
            boxShadow: "0 4px 15px rgba(71, 85, 105, 0.4)"
          }}
          onMouseOver={(e) => {
            e.target.style.backgroundColor = "#64748b";
            e.target.style.borderColor = "#94a3b8";
            e.target.style.transform = "translateY(-2px)";
            e.target.style.boxShadow = "0 8px 25px rgba(100, 116, 139, 0.5)";
          }}
          onMouseOut={(e) => {
            e.target.style.backgroundColor = "#475569";
            e.target.style.borderColor = "#64748b";
            e.target.style.transform = "translateY(0)";
            e.target.style.boxShadow = "0 4px 15px rgba(71, 85, 105, 0.4)";
          }}
        >
          🗑️ Xóa giỏ hàng
        </button>
      </div>

      <div style={{ marginBottom: "40px" }}>
        {cart.map((item, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              alignItems: "center",
              backgroundColor: "#1e293b",
              border: "1px solid #334155",
              borderRadius: "16px",
              padding: "25px 30px",
              marginBottom: "20px",
              boxShadow: "0 8px 30px rgba(0,0,0,0.3)",
              transition: "all 0.3s ease"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = "0 15px 50px rgba(0,0,0,0.4)";
              e.currentTarget.style.transform = "translateY(-4px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = "0 8px 30px rgba(0,0,0,0.3)";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            <img
              src={item.image}
              alt={item.name}
              style={{
                width: "110px",
                height: "110px",
                objectFit: "cover",
                borderRadius: "12px",
                marginRight: "25px",
                border: "2px solid #334155"
              }}
            />

            <div style={{ flex: 1 }}>
              <h3 style={{ 
                margin: "0 0 12px 0", 
                color: "#f1f5f9", 
                fontWeight: "600",
                fontSize: "1.3rem"
              }}>
                {item.name}
              </h3>
              <p
                style={{
                  color: "#94a3b8",
                  fontWeight: "bold",
                  fontSize: "1.4rem",
                  margin: 0,
                }}
              >
                {item.price?.toLocaleString("vi-VN")} VNĐ
              </p>
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
              <div
                style={{ 
                  display: "flex", 
                  alignItems: "center", 
                  gap: "12px",
                  backgroundColor: "#334155",
                  padding: "12px 16px",
                  borderRadius: "25px",
                  border: "1px solid #475569"
                }}
              >
                <button
                  onClick={() => updateQuantity(index, item.quantity - 1)}
                  disabled={item.quantity <= 1}
                  style={{
                    padding: "8px 12px",
                    border: "1px solid #475569",
                    backgroundColor: item.quantity <= 1 ? "#1e293b" : "#334155",
                    color: "#e2e8f0",
                    cursor: item.quantity <= 1 ? "not-allowed" : "pointer",
                    borderRadius: "50%",
                    width: "36px",
                    height: "36px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: "bold",
                    transition: "all 0.2s ease"
                  }}
                >
                  -
                </button>
                <span
                  style={{
                    padding: "10px 20px",
                    border: "1px solid #475569",
                    borderRadius: "20px",
                    fontWeight: "700",
                    color: "#f1f5f9",
                    minWidth: "45px",
                    textAlign: "center",
                    backgroundColor: "#1e293b"
                  }}
                >
                  {item.quantity}
                </span>
                <button
                  onClick={() => updateQuantity(index, item.quantity + 1)}
                  style={{
                    padding: "8px 12px",
                    border: "1px solid #475569",
                    backgroundColor: "#334155",
                    color: "#e2e8f0",
                    cursor: "pointer",
                    borderRadius: "50%",
                    width: "36px",
                    height: "36px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: "bold",
                    transition: "all 0.2s ease"
                  }}
                  onMouseOver={(e) => {
                    e.target.style.backgroundColor = "#475569";
                    e.target.style.transform = "scale(1.05)";
                  }}
                  onMouseOut={(e) => {
                    e.target.style.backgroundColor = "#334155";
                    e.target.style.transform = "scale(1)";
                  }}
                >
                  +
                </button>
              </div>

              <div style={{ textAlign: "right", minWidth: "140px" }}>
                <div style={{ 
                  fontWeight: "bold", 
                  color: "#94a3b8", 
                  fontSize: "1.3rem"
                }}>
                  {(item.price * item.quantity).toLocaleString("vi-VN")} VNĐ
                </div>
              </div>

              <button
                onClick={() => removeItem(index)}
                style={{
                  padding: "12px 16px",
                  backgroundColor: "#dc2626",
                  color: "white",
                  border: "none",
                  borderRadius: "10px",
                  cursor: "pointer",
                  fontWeight: "600",
                  transition: "all 0.3s ease",
                  boxShadow: "0 4px 15px rgba(220, 38, 38, 0.4)"
                }}
                onMouseOver={(e) => {
                  e.target.style.backgroundColor = "#b91c1c";
                  e.target.style.transform = "translateY(-2px)";
                  e.target.style.boxShadow = "0 8px 25px rgba(220, 38, 38, 0.5)";
                }}
                onMouseOut={(e) => {
                  e.target.style.backgroundColor = "#dc2626";
                  e.target.style.transform = "translateY(0)";
                  e.target.style.boxShadow = "0 4px 15px rgba(220, 38, 38, 0.4)";
                }}
              >
                🗑️ Xóa
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Tổng kết */}
      <div
        style={{
          backgroundColor: "#1e293b",
          border: "1px solid #334155",
          borderRadius: "16px",
          padding: "30px",
          boxShadow: "0 15px 50px rgba(0,0,0,0.4)",
          marginTop: "30px"
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "20px"
          }}
        >
          <div>
            <h3 style={{ 
              color: "#cbd5e1", 
              margin: "0 0 15px 0", 
              fontSize: "1.3rem"
            }}>
              Tổng số lượng: <span style={{ 
                fontWeight: "bold", 
                color: "#f1f5f9" 
              }}>{getTotalItems()} sản phẩm</span>
            </h3>
            <h2 style={{ 
              color: "#94a3b8", 
              margin: 0, 
              fontSize: "2.5rem", 
              fontWeight: "800"
            }}>
              Tổng tiền: <span style={{ color: "#f1f5f9" }}>
                {getTotalPrice().toLocaleString("vi-VN")} VNĐ
              </span>
            </h2>
          </div>

          <Link
            to="/checkout"
            style={{
              padding: "20px 45px",
              backgroundColor: "#27ae60",
              color: "white",
              textDecoration: "none",
              borderRadius: "12px",
              fontSize: "1.3rem",
              fontWeight: "bold",
              border: "2px solid #27ae60",
              boxShadow: "0 10px 30px rgba(39, 174, 96, 0.4)",
              transition: "all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55)"
            }}
            onMouseOver={(e) => {
              e.target.style.backgroundColor = "#219a52";
              e.target.style.borderColor = "#219a52";
              e.target.style.transform = "translateY(-3px) scale(1.05)";
              e.target.style.boxShadow = "0 20px 40px rgba(39, 174, 96, 0.5)";
            }}
            onMouseOut={(e) => {
              e.target.style.backgroundColor = "#27ae60";
              e.target.style.borderColor = "#27ae60";
              e.target.style.transform = "translateY(0) scale(1)";
              e.target.style.boxShadow = "0 10px 30px rgba(39, 174, 96, 0.4)";
            }}
          >
            🛒 Thanh toán ngay
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Cart;