import React from "react";
import { Link } from "react-router-dom";

function Home() {
  const ShippingIcon = () => (
    <svg width="48" height="48" viewBox="0 0 24 24" fill="#d4af37">
      <path d="M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4zM6 18.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm13.5-9l1.96 2.5H17V9.5h2.5zm-1.5 9c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z" />
    </svg>
  );

  const QualityIcon = () => (
    <svg width="48" height="48" viewBox="0 0 24 24" fill="#d4af37">
      <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z" />
    </svg>
  );

  const ReturnIcon = () => (
    <svg width="48" height="48" viewBox="0 0 24 24" fill="#d4af37">
      <path d="M12 5V1L7 6l5 5V7c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6H4c0 4.42 3.58 8 8 8s8-3.58 8-8-3.58-8-8-8z" />
    </svg>
  );

  return (
    <div>
      {/* Hero Section */}
      <section
        style={{
          background: "linear-gradient(135deg, #2d3748 0%, #1a202c 100%)",
          color: "#f7fafc",
          padding: "120px 20px",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
          boxShadow: "inset 0 0 100px rgba(0,0,0,0.3)"
        }}
      >
        {/* Subtle background pattern */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundImage: "radial-gradient(circle at 25% 25%, rgba(212, 175, 55, 0.05) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(212, 175, 55, 0.03) 0%, transparent 50%)",
            zIndex: 1
          }}
        />
        
        <div
          style={{
            margin: "0 auto 40px",
            textAlign: "center",
            position: "relative",
            zIndex: 2
          }}
        >
          <div
            style={{
              fontSize: "4.2rem",
              fontWeight: "bold",
              color: "#f7fafc",
              letterSpacing: "8px",
              marginBottom: "15px",
              textTransform: "uppercase",
              fontFamily: "'Arial Black', sans-serif",
              textShadow: "0 4px 20px rgba(0,0,0,0.5)"
            }}
          >
            HIEU STORE
          </div>
          <div
            style={{
              fontSize: "1.3rem",
              color: "#d4af37",
              fontWeight: "300",
              letterSpacing: "4px",
              textTransform: "uppercase",
              borderTop: "2px solid #d4af37",
              paddingTop: "15px",
              display: "inline-block",
              background: "rgba(45, 55, 72, 0.8)",
              borderRadius: "25px",
              padding: "10px 25px"
            }}
          >
            Luxury Fashion
          </div>
        </div>

        <h1
          style={{
            fontSize: "3.5rem",
            marginBottom: "25px",
            color: "#f7fafc",
            fontWeight: "bold",
            textShadow: "0 4px 20px rgba(0,0,0,0.5)"
          }}
        >
          HIEU STORE
        </h1>
        <p
          style={{
            fontSize: "1.6rem",
            marginBottom: "40px",
            color: "#e2e8f0",
            fontWeight: "300",
            maxWidth: "600px",
            marginLeft: "auto",
            marginRight: "auto",
            lineHeight: "1.6"
          }}
        >
          Đẳng Cấp • Tinh Tế • Độc Bản
        </p>
        <Link
          to="/products"
          style={{
            padding: "18px 40px",
            background: "linear-gradient(135deg, #d4af37 0%, #f6ad55 100%)",
            color: "#1a202c",
            textDecoration: "none",
            borderRadius: "50px",
            fontSize: "1.3rem",
            fontWeight: "bold",
            transition: "all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55)",
            display: "inline-block",
            border: "2px solid #d4af37",
            boxShadow: "0 10px 30px rgba(212, 175, 55, 0.4)",
            position: "relative",
            overflow: "hidden",
            textTransform: "uppercase",
            letterSpacing: "1px"
          }}
          onMouseOver={(e) => {
            e.target.style.transform = "translateY(-5px) scale(1.05)";
            e.target.style.boxShadow = "0 20px 40px rgba(212, 175, 55, 0.6)";
            e.target.style.background = "linear-gradient(135deg, #f6ad55 0%, #d4af37 100%)";
          }}
          onMouseOut={(e) => {
            e.target.style.transform = "translateY(0) scale(1)";
            e.target.style.boxShadow = "0 10px 30px rgba(212, 175, 55, 0.4)";
            e.target.style.background = "linear-gradient(135deg, #d4af37 0%, #f6ad55 100%)";
          }}
        >
          ✨ Khám Phá Ngay
        </Link>
      </section>

      {/* Features Section */}
      <section
        style={{
          padding: "100px 20px",
          textAlign: "center",
          backgroundColor: "#f7fafc",
          position: "relative"
        }}
      >
        <h2
          style={{
            color: "#2d3748",
            marginBottom: "60px",
            fontSize: "3rem",
            fontWeight: "700",
            letterSpacing: "1px"
          }}
        >
          Cam Kết Đẳng Cấp
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "40px",
            maxWidth: "1200px",
            margin: "0 auto",
          }}
        >
          <div
            style={{
              padding: "50px 30px",
              backgroundColor: "#fff",
              borderRadius: "20px",
              border: "1px solid #e2e8f0",
              textAlign: "center",
              boxShadow: "0 15px 50px rgba(0,0,0,0.08)",
              transition: "all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)",
              position: "relative",
              overflow: "hidden"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-10px) scale(1.02)";
              e.currentTarget.style.boxShadow = "0 30px 60px rgba(0,0,0,0.15)";
              e.currentTarget.style.borderColor = "#d4af37";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0) scale(1)";
              e.currentTarget.style.boxShadow = "0 15px 50px rgba(0,0,0,0.08)";
              e.currentTarget.style.borderColor = "#e2e8f0";
            }}
          >
            {/* Gold accent line */}
            <div style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "4px",
              background: "linear-gradient(90deg, transparent, #d4af37, transparent)",
              opacity: 0,
              transition: "opacity 0.3s ease"
            }} />
            <div style={{ marginBottom: "25px" }}>
              <ShippingIcon />
            </div>
            <h3 style={{ 
              color: "#2d3748", 
              marginBottom: "20px",
              fontWeight: "700",
              fontSize: "1.5rem",
              letterSpacing: "0.5px"
            }}>
              Giao Hàng Siêu Tốc
            </h3>
            <p style={{ 
              color: "#4a5568", 
              fontSize: "1.1rem",
              lineHeight: "1.7"
            }}>
              Toàn quốc trong 24h - Miễn phí đơn từ 2 triệu
            </p>
          </div>

          <div
            style={{
              padding: "50px 30px",
              backgroundColor: "#fff",
              borderRadius: "20px",
              border: "1px solid #e2e8f0",
              textAlign: "center",
              boxShadow: "0 15px 50px rgba(0,0,0,0.08)",
              transition: "all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)",
              position: "relative",
              overflow: "hidden"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-10px) scale(1.02)";
              e.currentTarget.style.boxShadow = "0 30px 60px rgba(0,0,0,0.15)";
              e.currentTarget.style.borderColor = "#d4af37";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0) scale(1)";
              e.currentTarget.style.boxShadow = "0 15px 50px rgba(0,0,0,0.08)";
              e.currentTarget.style.borderColor = "#e2e8f0";
            }}
          >
            {/* Gold accent line */}
            <div style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "4px",
              background: "linear-gradient(90deg, transparent, #d4af37, transparent)",
              opacity: 0,
              transition: "opacity 0.3s ease"
            }} />
            <div style={{ marginBottom: "25px" }}>
              <QualityIcon />
            </div>
            <h3 style={{ 
              color: "#2d3748", 
              marginBottom: "20px",
              fontWeight: "700",
              fontSize: "1.5rem",
              letterSpacing: "0.5px"
            }}>
              Chất Lượng Thượng Hạng
            </h3>
            <p style={{ 
              color: "#4a5568", 
              fontSize: "1.1rem",
              lineHeight: "1.7"
            }}>
              Chính hãng 100% - Bảo hành trọn đời
            </p>
          </div>

          <div
            style={{
              padding: "50px 30px",
              backgroundColor: "#fff",
              borderRadius: "20px",
              border: "1px solid #e2e8f0",
              textAlign: "center",
              boxShadow: "0 15px 50px rgba(0,0,0,0.08)",
              transition: "all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)",
              position: "relative",
              overflow: "hidden"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-10px) scale(1.02)";
              e.currentTarget.style.boxShadow = "0 30px 60px rgba(0,0,0,0.15)";
              e.currentTarget.style.borderColor = "#d4af37";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0) scale(1)";
              e.currentTarget.style.boxShadow = "0 15px 50px rgba(0,0,0,0.08)";
              e.currentTarget.style.borderColor = "#e2e8f0";
            }}
          >
            {/* Gold accent line */}
            <div style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "4px",
              background: "linear-gradient(90deg, transparent, #d4af37, transparent)",
              opacity: 0,
              transition: "opacity 0.3s ease"
            }} />
            <div style={{ marginBottom: "25px" }}>
              <ReturnIcon />
            </div>
            <h3 style={{ 
              color: "#2d3748", 
              marginBottom: "20px",
              fontWeight: "700",
              fontSize: "1.5rem",
              letterSpacing: "0.5px"
            }}>
              Chính Sách Kim Cương
            </h3>
            <p style={{ 
              color: "#4a5568", 
              fontSize: "1.1rem",
              lineHeight: "1.7"
            }}>
              Đổi trả 30 ngày - Hoàn tiền 100%
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;