// src/ProtectedRoute.jsx
import React, { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { supabase } from "./supabaseClient";

function ProtectedRoute({ children, requireAdmin = false }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    checkUser();

    // Lắng nghe realtime khi đăng nhập/đăng xuất
    const { data: listener } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setUser(session?.user ?? null);
        setLoading(false);
      }
    );

    return () => listener.subscription.unsubscribe();
  }, []);

  const checkUser = async () => {
    try {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      setUser(user);
    } catch (error) {
      console.error("Lỗi kiểm tra user:", error);
    } finally {
      setLoading(false);
    }
  };

  // Kiểm tra có phải admin không (email chứa chữ "admin")
  const isAdmin =
    user && user.email && user.email.toLowerCase().includes("admin");

  if (loading) {
    return (
      <div
        style={{
          padding: "100px 20px",
          textAlign: "center",
          fontSize: "18px",
          color: "#666",
        }}
      >
        <div>Đang kiểm tra quyền truy cập...</div>
      </div>
    );
  }

  // Nếu chưa đăng nhập → đẩy về login
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // Nếu cần quyền admin mà không phải admin → đẩy về trang chủ + cảnh báo
  if (requireAdmin && !isAdmin) {
    alert("Bạn không có quyền truy cập trang quản trị!");
    return <Navigate to="/" replace />;
  }

  // Nếu đủ quyền → cho vào
  return children;
}

export default ProtectedRoute;
