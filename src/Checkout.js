import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Checkout() {
  const navigate = useNavigate();
  const [cart] = useState(JSON.parse(localStorage.getItem("cart")) || []);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    district: "",
    ward: "",
    paymentMethod: "cod",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const order = {
      id: Date.now(),
      customer: formData,
      items: cart,
      total: getTotalPrice(),
      status: "pending",
      createdAt: new Date().toISOString(),
    };

    const orders = JSON.parse(localStorage.getItem("orders")) || [];
    orders.push(order);
    localStorage.setItem("orders", JSON.stringify(orders));

    localStorage.removeItem("cart");

    alert("Đặt hàng thành công! Cảm ơn bạn đã mua sắm tại HieuFashion.");
    navigate("/");
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  if (cart.length === 0) {
    return (
      <div style={{ padding: "50px 20px", textAlign: "center" }}>
        <h2>Giỏ hàng trống</h2>
        <p>Vui lòng thêm sản phẩm vào giỏ hàng trước khi thanh toán.</p>
      </div>
    );
  }

  return (
    <div style={{ padding: "20px", maxWidth: "1200px", margin: "0 auto" }}>
      <h1 style={{ textAlign: "center", marginBottom: "40px" }}>Thanh toán</h1>

      <div
        style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "40px" }}
      >
        {/* Form thông tin giao hàng */}
        <div>
          <h2 style={{ color: "#2c3e50", marginBottom: "20px" }}>
            Thông tin giao hàng
          </h2>
          <form
            onSubmit={handleSubmit}
            style={{ display: "flex", flexDirection: "column", gap: "15px" }}
          >
            <input
              type="text"
              name="fullName"
              placeholder="Họ và tên"
              value={formData.fullName}
              onChange={handleChange}
              required
              style={inputStyle}
            />

            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
              style={inputStyle}
            />

            <input
              type="tel"
              name="phone"
              placeholder="Số điện thoại"
              value={formData.phone}
              onChange={handleChange}
              required
              style={inputStyle}
            />

            <textarea
              name="address"
              placeholder="Địa chỉ cụ thể"
              rows="3"
              value={formData.address}
              onChange={handleChange}
              required
              style={{ ...inputStyle, resize: "vertical" }}
            />

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr 1fr",
                gap: "10px",
              }}
            >
              <input
                type="text"
                name="city"
                placeholder="Thành phố"
                value={formData.city}
                onChange={handleChange}
                required
                style={inputStyle}
              />

              <input
                type="text"
                name="district"
                placeholder="Quận/Huyện"
                value={formData.district}
                onChange={handleChange}
                required
                style={inputStyle}
              />

              <input
                type="text"
                name="ward"
                placeholder="Phường/Xã"
                value={formData.ward}
                onChange={handleChange}
                required
                style={inputStyle}
              />
            </div>

            <div>
              <h3 style={{ marginBottom: "10px" }}>Phương thức thanh toán</h3>
              <label style={{ display: "block", marginBottom: "10px" }}>
                <input
                  type="radio"
                  name="paymentMethod"
                  value="cod"
                  checked={formData.paymentMethod === "cod"}
                  onChange={handleChange}
                  style={{ marginRight: "10px" }}
                />
                Thanh toán khi nhận hàng (COD)
              </label>
              <label style={{ display: "block" }}>
                <input
                  type="radio"
                  name="paymentMethod"
                  value="banking"
                  checked={formData.paymentMethod === "banking"}
                  onChange={handleChange}
                  style={{ marginRight: "10px" }}
                />
                Chuyển khoản ngân hàng
              </label>
            </div>

            <button
              type="submit"
              style={{
                padding: "15px",
                backgroundColor: "#27ae60",
                color: "white",
                border: "none",
                borderRadius: "5px",
                fontSize: "18px",
                cursor: "pointer",
                fontWeight: "bold",
                marginTop: "20px",
              }}
            >
              Hoàn tất đặt hàng
            </button>
          </form>
        </div>

        {/* Tóm tắt đơn hàng */}
        <div>
          <h2 style={{ color: "#2c3e50", marginBottom: "20px" }}>
            Đơn hàng của bạn
          </h2>
          <div
            style={{
              border: "1px solid #ddd",
              borderRadius: "10px",
              padding: "20px",
              backgroundColor: "#f8f9fa",
            }}
          >
            {cart.map((item, index) => (
              <div
                key={index}
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "15px",
                  paddingBottom: "15px",
                  borderBottom: "1px solid #eee",
                }}
              >
                <img
                  src={item.image}
                  alt={item.name}
                  style={{
                    width: "60px",
                    height: "60px",
                    objectFit: "cover",
                    borderRadius: "5px",
                    marginRight: "15px",
                  }}
                />
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: "bold" }}>{item.name}</div>
                  <div style={{ color: "#666" }}>Số lượng: {item.quantity}</div>
                </div>
                <div style={{ fontWeight: "bold", color: "#e74c3c" }}>
                  {(item.price * item.quantity).toLocaleString("vi-VN")} VNĐ
                </div>
              </div>
            ))}

            <div
              style={{
                borderTop: "2px solid #ddd",
                paddingTop: "15px",
                marginTop: "15px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  fontSize: "18px",
                  fontWeight: "bold",
                }}
              >
                <span>Tổng cộng:</span>
                <span style={{ color: "#e74c3c" }}>
                  {getTotalPrice().toLocaleString("vi-VN")} VNĐ
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const inputStyle = {
  padding: "12px",
  border: "1px solid #ddd",
  borderRadius: "5px",
  fontSize: "16px",
};

export default Checkout;
