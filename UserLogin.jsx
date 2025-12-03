// src/UserLogin.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "./supabaseClient";

function UserLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const autoRegisterAndLogin = async () => {
    try {
      setLoading(true);
      setError("");

      // Thử đăng ký trước
      const { error: signUpError } = await supabase.auth.signUp({
        email: email.trim(),
        password: password,
      });

      if (signUpError && !signUpError.message.includes("already exists")) {
        throw signUpError;
      }

      // Nếu đã tồn tại hoặc đăng ký thành công → đăng nhập luôn
      const { data, error: loginError } =
        await supabase.auth.signInWithPassword({
          email: email.trim(),
          password: password,
        });

      if (loginError) throw loginError;

      alert("Đăng nhập thành công! Chào mừng bạn đến HIEU STORE ❤️");
      navigate("/"); // Về trang chủ
    } catch (err) {
      setError("Lỗi: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    autoRegisterAndLogin();
  };

  return (
    <div
      style={{
        maxWidth: "420px",
        margin: "60px auto",
        padding: "40px",
        background: "linear-gradient(135deg, #1e293b 0%, #0f172a 100%)",
        borderRadius: "16px",
        boxShadow: "0 20px 50px rgba(0,0,0,0.5)",
        color: "white",
        textAlign: "center",
      }}
    >
      <h2
        style={{ fontSize: "2.2rem", marginBottom: "10px", color: "#f1f5f9" }}
      >
        Chào mừng bạn trở lại
      </h2>
      <p style={{ color: "#94a3b8", marginBottom: "30px" }}>
        Đăng nhập để lưu giỏ hàng và nhận ưu đãi đặc biệt
      </p>

      {error && (
        <div
          style={{
            padding: "12px",
            background: "#7f1d1d",
            borderRadius: "8px",
            marginBottom: "20px",
          }}
        >
          {error}
        </div>
      )}

      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column", gap: "18px" }}
      >
        <input
          type="email"
          placeholder="Nhập email của bạn"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={{
            padding: "14px",
            borderRadius: "10px",
            border: "none",
            fontSize: "16px",
          }}
        />
        <input
          type="password"
          placeholder="Nhập mật khẩu (tối thiểu 6 ký tự)"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={{
            padding: "14px",
            borderRadius: "10px",
            border: "none",
            fontSize: "16px",
          }}
        />
        <button
          type="submit"
          disabled={loading}
          style={{
            padding: "16px",
            backgroundColor: "#e74c3c",
            color: "white",
            border: "none",
            borderRadius: "10px",
            fontSize: "18px",
            fontWeight: "bold",
            cursor: loading ? "not-allowed" : "pointer",
            marginTop: "10px",
          }}
        >
          {loading ? "Đang xử lý..." : "Đăng nhập ngay"}
        </button>
      </form>

      <p style={{ marginTop: "25px", fontSize: "14px", color: "#cbd5e1" }}>
        Chưa có tài khoản?{" "}
        <strong>Chỉ cần nhập email + mật khẩu → hệ thống tự tạo ngay!</strong>
      </p>
    </div>
  );
}

export default UserLogin;
