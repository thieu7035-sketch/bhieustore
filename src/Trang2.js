import React, { useState } from "react";

function Trang2() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Cảm ơn bạn đã liên hệ! Chúng tôi sẽ phản hồi sớm nhất.");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <div style={{ padding: "40px 20px", maxWidth: "1000px", margin: "0 auto" }}>
      <h1
        style={{ textAlign: "center", marginBottom: "40px", color: "#2c3e50" }}
      >
        Liên hệ với chúng tôi
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "50px",
          alignItems: "start",
        }}
      >
        {/* Thông tin liên hệ */}
        <div>
          <h2 style={{ color: "#e74c3c", marginBottom: "30px" }}>
            Thông tin liên hệ
          </h2>

          <div
            style={{
              display: "flex",
              alignItems: "flex-start",
              marginBottom: "25px",
              padding: "15px",
              backgroundColor: "#f8f9fa",
              borderRadius: "8px",
            }}
          >
            <span
              style={{
                fontSize: "24px",
                marginRight: "15px",
                color: "#e74c3c",
              }}
            ></span>
            <div>
              <h3
                style={{
                  color: "#2c3e50",
                  margin: "0 0 8px 0",
                  fontSize: "16px",
                }}
              >
                Địa chỉ
              </h3>
              <p style={{ margin: 0, color: "#555" }}>
                Đường Vĩnh Viễn, quận 10, TP. Hồ Chí Minh
              </p>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "flex-start",
              marginBottom: "25px",
              padding: "15px",
              backgroundColor: "#f8f9fa",
              borderRadius: "8px",
            }}
          >
            <span
              style={{
                fontSize: "24px",
                marginRight: "15px",
                color: "#e74c3c",
              }}
            ></span>
            <div>
              <h3
                style={{
                  color: "#2c3e50",
                  margin: "0 0 8px 0",
                  fontSize: "16px",
                }}
              >
                Điện thoại
              </h3>
              <p style={{ margin: 0, color: "#555" }}>
                0900 123 456 - 028 1234 5678
              </p>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "flex-start",
              marginBottom: "25px",
              padding: "15px",
              backgroundColor: "#f8f9fa",
              borderRadius: "8px",
            }}
          >
            <span
              style={{
                fontSize: "24px",
                marginRight: "15px",
                color: "#e74c3c",
              }}
            ></span>
            <div>
              <h3
                style={{
                  color: "#2c3e50",
                  margin: "0 0 8px 0",
                  fontSize: "16px",
                }}
              >
                Email
              </h3>
              <p style={{ margin: 0, color: "#555" }}>
                contact@hieufashion.com
              </p>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "flex-start",
              marginBottom: "25px",
              padding: "15px",
              backgroundColor: "#f8f9fa",
              borderRadius: "8px",
            }}
          >
            <span
              style={{
                fontSize: "24px",
                marginRight: "15px",
                color: "#e74c3c",
              }}
            ></span>
            <div>
              <h3
                style={{
                  color: "#2c3e50",
                  margin: "0 0 8px 0",
                  fontSize: "16px",
                }}
              >
                Giờ làm việc
              </h3>
              <p style={{ margin: 0, color: "#555" }}>
                Thứ 2 - Thứ 7: 8:00 - 22:00
                <br />
                Chủ nhật: 8:00 - 18:00
              </p>
            </div>
          </div>

          {/* Bản đồ giả lập */}
          <div
            style={{
              marginTop: "30px",
              backgroundColor: "#e0e0e0",
              borderRadius: "8px",
              padding: "20px",
              textAlign: "center",
              color: "#666",
            }}
          >
            <div style={{ fontSize: "48px", marginBottom: "10px" }}>🗺️</div>
            <p style={{ margin: 0 }}>Bản đồ sẽ được hiển thị tại đây</p>
            <small>Google Maps Integration</small>
          </div>
        </div>

        {/* Form liên hệ */}
        <div>
          <h2 style={{ color: "#e74c3c", marginBottom: "30px" }}>
            Gửi tin nhắn
          </h2>
          <form
            onSubmit={handleSubmit}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "20px",
              backgroundColor: "#f8f9fa",
              padding: "30px",
              borderRadius: "10px",
            }}
          >
            <div>
              <label
                style={{
                  display: "block",
                  marginBottom: "8px",
                  fontWeight: "bold",
                  color: "#2c3e50",
                }}
              >
                👤 Họ và tên
              </label>
              <input
                type="text"
                name="name"
                placeholder="Nhập họ và tên của bạn"
                value={formData.name}
                onChange={handleChange}
                required
                style={inputStyle}
              />
            </div>

            <div>
              <label
                style={{
                  display: "block",
                  marginBottom: "8px",
                  fontWeight: "bold",
                  color: "#2c3e50",
                }}
              >
                📧 Email
              </label>
              <input
                type="email"
                name="email"
                placeholder="Nhập email của bạn"
                value={formData.email}
                onChange={handleChange}
                required
                style={inputStyle}
              />
            </div>

            <div>
              <label
                style={{
                  display: "block",
                  marginBottom: "8px",
                  fontWeight: "bold",
                  color: "#2c3e50",
                }}
              >
                📱 Số điện thoại
              </label>
              <input
                type="tel"
                name="phone"
                placeholder="Nhập số điện thoại"
                value={formData.phone}
                onChange={handleChange}
                style={inputStyle}
              />
            </div>

            <div>
              <label
                style={{
                  display: "block",
                  marginBottom: "8px",
                  fontWeight: "bold",
                  color: "#2c3e50",
                }}
              >
                💬 Nội dung tin nhắn
              </label>
              <textarea
                name="message"
                placeholder="Nhập nội dung tin nhắn của bạn..."
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
                style={{
                  ...inputStyle,
                  resize: "vertical",
                  minHeight: "120px",
                }}
              />
            </div>

            <button
              type="submit"
              style={{
                padding: "15px 30px",
                backgroundColor: "#e74c3c",
                color: "white",
                border: "none",
                borderRadius: "8px",
                fontSize: "16px",
                cursor: "pointer",
                fontWeight: "bold",
                marginTop: "10px",
                transition: "background-color 0.3s",
              }}
              onMouseOver={(e) => (e.target.style.backgroundColor = "#c0392b")}
              onMouseOut={(e) => (e.target.style.backgroundColor = "#e74c3c")}
            >
              📤 Gửi tin nhắn
            </button>
          </form>
        </div>
      </div>

      {/* Thông tin thêm */}
      <div
        style={{
          marginTop: "50px",
          padding: "30px",
          backgroundColor: "#2c3e50",
          color: "white",
          borderRadius: "10px",
          textAlign: "center",
        }}
      >
        <h3 style={{ marginBottom: "15px" }}>Follow Chúng Tôi</h3>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "20px",
            fontSize: "24px",
          }}
        >
          <span title="Facebook">Facebook</span>
          <span title="Instagram">Instagram</span>
          <span title="Twitter">Twitter</span>
          <span title="YouTube">Youtube</span>
        </div>
        <p style={{ marginTop: "15px", fontSize: "14px", opacity: "0.8" }}>
          Kết nối với chúng tôi trên mạng xã hội
        </p>
      </div>
    </div>
  );
}

const inputStyle = {
  width: "100%",
  padding: "12px 15px",
  border: "1px solid #ddd",
  borderRadius: "8px",
  fontSize: "16px",
  boxSizing: "border-box",
  transition: "border-color 0.3s, box-shadow 0.3s",
};

export default Trang2;
