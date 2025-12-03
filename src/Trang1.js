import React from "react";

function Trang1() {
  return (
    <div style={{ 
      padding: "60px 20px", 
      maxWidth: "1200px", 
      margin: "0 auto",
      backgroundColor: "#0f172a",
      minHeight: "100vh"
    }}>
      <h1
        style={{ 
          textAlign: "center", 
          marginBottom: "60px", 
          color: "#f1f5f9",
          fontSize: "3.5rem",
          fontWeight: "700",
          letterSpacing: "2px",
          textShadow: "0 4px 20px rgba(0,0,0,0.5)"
        }}
      >
        Giới thiệu về HIEU STORE
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "60px",
          alignItems: "center",
          marginBottom: "80px",
        }}
      >
        <div>
          <img
            src="https://housedesign.vn/wp-content/uploads/2020/01/thiet-ke-noi-that-shop-quan-ao-nam.jpg"
            alt="Cửa hàng thời trang"
            style={{
              width: "100%",
              borderRadius: "20px",
              boxShadow: "0 20px 60px rgba(0,0,0,0.4)",
              border: "1px solid #334155",
              transition: "all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)"
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = "translateY(-10px) scale(1.02)";
              e.target.style.boxShadow = "0 30px 80px rgba(0,0,0,0.5)";
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = "translateY(0) scale(1)";
              e.target.style.boxShadow = "0 20px 60px rgba(0,0,0,0.4)";
            }}
          />
        </div>
        <div>
          <h2 style={{ 
            color: "#e2e8f0", 
            marginBottom: "30px",
            fontSize: "2.2rem",
            fontWeight: "700",
            letterSpacing: "1px"
          }}>
            Hành trình đến tương lai
          </h2>
          <p style={{ 
            lineHeight: "1.8", 
            fontSize: "1.1rem", 
            color: "#cbd5e1",
            backgroundColor: "#1e293b",
            padding: "25px",
            borderRadius: "16px",
            borderLeft: "4px solid #475569",
            boxShadow: "0 10px 30px rgba(0,0,0,0.2)"
          }}>
            HIEU STORE khởi nguồn từ một studio nhỏ, chỉ vài thiết kế couture
            may tay và niềm tin mãnh liệt vào xa xỉ Việt. Từng đường kim, từng
            mét vải cao cấp đều bị từ chối vì "quá đắt". Nhưng chính sự cầu toàn
            ấy đã biến khách đầu tiên thành những người truyền cảm hứng thầm
            lặng. Từ góc phố nhỏ, HIEU STORE lặng lẽ bước lên thảm đỏ, vào tủ
            đồ tinh tế nhất Sài Gòn và định nghĩa lại luxury Việt Nam: thanh
            lịch, kiêu kỳ, hoàn toàn made in Vietnam.
          </p>
          <p style={{ 
            lineHeight: "1.8", 
            fontSize: "1.1rem", 
            color: "#cbd5e1",
            marginTop: "20px",
            backgroundColor: "#1e293b",
            padding: "25px",
            borderRadius: "16px",
            borderLeft: "4px solid #475569",
            boxShadow: "0 10px 30px rgba(0,0,0,0.2)"
          }}>
            Với đội ngũ thiết kế tài năng và nhân viên tận tâm, chúng tôi không
            ngừng sáng tạo để mang đến những xu hướng thời trang mới nhất, phù
            hợp với phong cách sống hiện đại.
          </p>
        </div>
      </div>

      <div
        style={{
          backgroundColor: "#1e293b",
          padding: "60px 40px",
          borderRadius: "24px",
          textAlign: "center",
          border: "1px solid #334155",
          boxShadow: "0 20px 60px rgba(0,0,0,0.4)",
          position: "relative",
          overflow: "hidden"
        }}
      >
        {/* Subtle background pattern */}
        <div style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: "radial-gradient(circle at 20% 80%, rgba(255,255,255,0.03) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255,255,255,0.02) 0%, transparent 50%)",
          zIndex: 1
        }} />
        
        <div style={{ position: "relative", zIndex: 2 }}>
          <h2 style={{ 
            color: "#f1f5f9", 
            marginBottom: "40px",
            fontSize: "2.8rem",
            fontWeight: "800",
            letterSpacing: "1px",
            textShadow: "0 2px 10px rgba(0,0,0,0.5)"
          }}>
            Giá trị cốt lõi
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "40px",
            }}
          >
            <div style={{
              padding: "30px 25px",
              backgroundColor: "#0f172a",
              borderRadius: "16px",
              border: "1px solid #334155",
              transition: "all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)",
              boxShadow: "0 10px 30px rgba(0,0,0,0.3)"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-8px)";
              e.currentTarget.style.boxShadow = "0 20px 40px rgba(0,0,0,0.4)";
              e.currentTarget.style.borderColor = "#475569";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 10px 30px rgba(0,0,0,0.3)";
              e.currentTarget.style.borderColor = "#334155";
            }}
            >
              <h3 style={{ 
                color: "#e2e8f0", 
                marginBottom: "15px",
                fontSize: "1.4rem",
                fontWeight: "700"
              }}> Chất lượng</h3>
              <p style={{ 
                color: "#94a3b8",
                fontSize: "1rem",
                lineHeight: "1.7"
              }}>
                Cam kết chất lượng sản phẩm tốt nhất với giá thành hợp lý
              </p>
            </div>
            
            <div style={{
              padding: "30px 25px",
              backgroundColor: "#0f172a",
              borderRadius: "16px",
              border: "1px solid #334155",
              transition: "all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)",
              boxShadow: "0 10px 30px rgba(0,0,0,0.3)"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-8px)";
              e.currentTarget.style.boxShadow = "0 20px 40px rgba(0,0,0,0.4)";
              e.currentTarget.style.borderColor = "#475569";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 10px 30px rgba(0,0,0,0.3)";
              e.currentTarget.style.borderColor = "#334155";
            }}
            >
              <h3 style={{ 
                color: "#e2e8f0", 
                marginBottom: "15px",
                fontSize: "1.4rem",
                fontWeight: "700"
              }}> Dịch vụ</h3>
              <p style={{ 
                color: "#94a3b8",
                fontSize: "1rem",
                lineHeight: "1.7"
              }}>
                Đội ngũ chăm sóc khách hàng 24/7, hỗ trợ tận tâm
              </p>
            </div>
            
            <div style={{
              padding: "30px 25px",
              backgroundColor: "#0f172a",
              borderRadius: "16px",
              border: "1px solid #334155",
              transition: "all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)",
              boxShadow: "0 10px 30px rgba(0,0,0,0.3)"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-8px)";
              e.currentTarget.style.boxShadow = "0 20px 40px rgba(0,0,0,0.4)";
              e.currentTarget.style.borderColor = "#475569";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 10px 30px rgba(0,0,0,0.3)";
              e.currentTarget.style.borderColor = "#334155";
            }}
            >
              <h3 style={{ 
                color: "#e2e8f0", 
                marginBottom: "15px",
                fontSize: "1.4rem",
                fontWeight: "700"
              }}> Đổi mới</h3>
              <p style={{ 
                color: "#94a3b8",
                fontSize: "1rem",
                lineHeight: "1.7"
              }}>
                Luôn cập nhật xu hướng thời trang mới nhất
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Trang1;