import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "./supabaseClient";

function LogoutPage() {
  const navigate = useNavigate();

  useEffect(() => {
    const logout = async () => {
      await supabase.auth.signOut();
      alert("Đã đăng xuất thành công!");
      navigate("/");
    };

    logout();
  }, [navigate]);

  return (
    <div
      style={{
        padding: "50px 20px",
        textAlign: "center",
      }}
    >
      <h2>Đang đăng xuất...</h2>
      <p>Vui lòng chờ trong giây lát.</p>
    </div>
  );
}

export default LogoutPage;
