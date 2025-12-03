import React, { useEffect, useState } from "react";
import { supabase } from "./supabaseClient";

function formatVND(value) {
  if (value == null) return "";
  const number = Number(value);
  return number.toLocaleString("vi-VN") + " VNĐ";
}

function ListProducts_SP() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        setError(null);

        console.log("Đang kết nối đến Supabase...");

        const { data, error } = await supabase.from("products").select("*");

        if (error) {
          console.error("Lỗi từ Supabase:", error);
          setError(`Lỗi: ${error.message}`);
        } else {
          console.log("Dữ liệu nhận được:", data);
          setProducts(data || []);
        }
      } catch (err) {
        console.error("Lỗi không xác định:", err);
        setError("Lỗi kết nối đến database. Vui lòng thử lại.");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return (
      <div style={{ padding: "20px", textAlign: "center" }}>
        <div>Đang tải sản phẩm...</div>
        <small>Đang kết nối đến database...</small>
      </div>
    );
  }

  if (error) {
    return (
      <div style={{ padding: "20px", color: "red" }}>
        <h2>Lỗi khi tải sản phẩm</h2>
        <p>{error}</p>
        <button onClick={() => window.location.reload()}>Thử lại</button>
      </div>
    );
  }

  if (!products.length) {
    return (
      <div style={{ padding: "20px", textAlign: "center" }}>
        <h2>Danh sách sản phẩm</h2>
        <p>Chưa có sản phẩm nào trong database.</p>
      </div>
    );
  }

  return (
    <div style={{ padding: "20px", maxWidth: "1200px", margin: "0 auto" }}>
      <h1 style={{ textAlign: "center", marginBottom: "30px" }}>
        Danh sách sản phẩm
      </h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
          gap: "20px",
        }}
      >
        {products.map((p) => (
          <div
            key={p.id}
            style={{
              border: "1px solid #ddd",
              padding: "15px",
              borderRadius: "8px",
              backgroundColor: "white",
              boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
            }}
          >
            {p.image && (
              <img
                src={p.image}
                alt={p.name}
                style={{
                  width: "100%",
                  height: "200px",
                  objectFit: "cover",
                  borderRadius: "4px",
                  marginBottom: "10px",
                }}
              />
            )}
            <strong style={{ fontSize: "18px", display: "block" }}>
              {p.name}
            </strong>
            <div
              style={{ color: "#16A085", fontWeight: "bold", margin: "10px 0" }}
            >
              {formatVND(p.price)}
            </div>
            {p.description && (
              <p style={{ margin: "5px 0", color: "#666", fontSize: "14px" }}>
                {p.description}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ListProducts_SP;
