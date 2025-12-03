import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "./supabaseClient";

function LoginPage() {
  const [isLogin, setIsLogin] = useState(true); // true = Đăng nhập, false = Đăng ký
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  // Kiểm tra có phải admin không
  const isAdminEmail = (email) => email.toLowerCase().includes("admin");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      if (!isLogin) {
        // === ĐĂNG KÝ ===
        const { error: signUpError } = await supabase.auth.signUp({
          email: email.trim(),
          password,
        });

        if (
          signUpError &&
          !signUpError.message.includes("already registered")
        ) {
          throw signUpError;
        }

        setMessage("Đăng ký thành công! Đang đăng nhập tự động...");
      }

      // === ĐĂNG NHẬP (cả sau khi đăng ký hoặc đăng nhập trực tiếp) ===
      const { data, error: loginError } =
        await supabase.auth.signInWithPassword({
          email: email.trim(),
          password,
        });

      if (loginError) throw loginError;

      const userEmail = data.user.email.toLowerCase();

      if (isAdminEmail(userEmail)) {
        setMessage("Chào mừng Quản trị viên HIEU STORE!");
        setTimeout(() => navigate("/admin"), 1500);
      } else {
        setMessage("Chào mừng bạn đến với HIEU STORE!");
        setTimeout(() => navigate("/"), 1500);
      }
    } catch (err) {
      const msg = err.message;
      if (msg.includes("Invalid login credentials")) {
        setMessage("Sai email hoặc mật khẩu!");
      } else if (msg.includes("already registered")) {
        setMessage("Email đã tồn tại! Đang thử đăng nhập...");
        setTimeout(() => handleSubmit(e), 1000);
      } else {
        setMessage("Lỗi: " + msg);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
      }}
    >
      <div
        style={{
          maxWidth: "480px",
          width: "100%",
          background: "white",
          borderRadius: "24px",
          overflow: "hidden",
          boxShadow: "0 25px 50px rgba(0,0,0,0.3)",
        }}
      >
        {/* Header Tab */}
        <div
          style={{
            display: "flex",
            background: "#f8f9fa",
            borderBottom: "1px solid #e9ecef",
          }}
        >
          <button
            onClick={() => setIsLogin(true)}
            style={{
              flex: 1,
              padding: "18px",
              fontSize: "18px",
              fontWeight: "bold",
              background: isLogin ? "white" : "transparent",
              color: isLogin ? "#e74c3c" : "#666",
              border: "none",
              cursor: "pointer",
              borderBottom: isLogin ? "4px solid #e74c3c" : "none",
              transition: "all 0.3s",
            }}
          >
            Đăng nhập
          </button>
          <button
            onClick={() => setIsLogin(false)}
            style={{
              flex: 1,
              padding: "18px",
              fontSize: "18px",
              fontWeight: "bold",
              background: !isLogin ? "white" : "transparent",
              color: !isLogin ? "#e74c3c" : "#666",
              border: "none",
              cursor: "pointer",
              borderBottom: !isLogin ? "4px solid #e74c3c" : "none",
              transition: "all 0.3s",
            }}
          >
            Đăng ký
          </button>
        </div>

        {/* Body */}
        <div style={{ padding: "40px 40px 50px" }}>
          <h2
            style={{
              textAlign: "center",
              fontSize: "28px",
              marginBottom: "10px",
              color: "#2d3748",
            }}
          >
            {isLogin ? "Chào mừng quay lại!" : "Tạo tài khoản mới"}
          </h2>
          <p
            style={{
              textAlign: "center",
              color: "#718096",
              marginBottom: "30px",
            }}
          >
            {isLogin
              ? "Đăng nhập để tiếp tục mua sắm"
              : "Chỉ mất 5 giây để có tài khoản miễn phí"}
          </p>

          {message && (
            <div
              style={{
                padding: "16px",
                borderRadius: "12px",
                marginBottom: "24px",
                backgroundColor: message.includes("Chào mừng")
                  ? "#d4edda"
                  : "#f8d7da",
                color: message.includes("Chào mừng") ? "#155724" : "#721c24",
                border: `1px solid ${
                  message.includes("Chào mừng") ? "#c3e6cb" : "#f5c6cb"
                }`,
                fontWeight: "bold",
              }}
            >
              {message}
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: "20px" }}>
              <input
                type="email"
                placeholder="Email của bạn"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                style={{
                  width: "100%",
                  padding: "16px",
                  borderRadius: "12px",
                  border: "2px solid #e2e8f0",
                  fontSize: "16px",
                  transition: "all 0.3s",
                }}
                onFocus={(e) => (e.target.style.borderColor = "#e74c3c")}
                onBlur={(e) => (e.target.style.borderColor = "#e2e8f0")}
              />
            </div>

            <div style={{ marginBottom: "30px" }}>
              <input
                type="password"
                placeholder="Mật khẩu (tối thiểu 6 ký tự)"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                minLength="6"
                style={{
                  width: "100%",
                  padding: "16px",
                  borderRadius: "12px",
                  border: "2px solid #e2e8f0",
                  fontSize: "16px",
                  transition: "all 0.3s",
                }}
                onFocus={(e) => (e.target.style.borderColor = "#e74c3c")}
                onBlur={(e) => (e.target.style.borderColor = "#e2e8f0")}
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              style={{
                width: "100%",
                padding: "18px",
                background: loading
                  ? "#cbd5e1"
                  : "linear-gradient(90deg, #e74c3c, #c0392b)",
                color: "white",
                border: "none",
                borderRadius: "12px",
                fontSize: "18px",
                fontWeight: "bold",
                cursor: loading ? "not-allowed" : "pointer",
                boxShadow: "0 10px 20px rgba(231, 76, 60, 0.3)",
                transition: "all 0.3s",
              }}
            >
              {loading
                ? "Đang xử lý..."
                : isLogin
                ? "Đăng nhập ngay"
                : "Đăng ký miễn phí"}
            </button>
          </form>

          <div
            style={{
              marginTop: "30px",
              padding: "20px",
              background: "#f8f9fa",
              borderRadius: "12px",
              fontSize: "14px",
              color: "#4a5568",
              textAlign: "center",
            }}
          >
            <strong>Quy tắc Admin:</strong>
            <br />
            Email có chứa chữ{" "}
            <code
              style={{
                background: "#e74c3c",
                color: "white",
                padding: "2px 6px",
                borderRadius: "4px",
              }}
            >
              admin
            </code>{" "}
            → vào trang Quản trị
            <br />
            <br />
            Ví dụ: <code>admin@gmail.com</code>,{" "}
            <code>23661035admin@gmail.com</code>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
