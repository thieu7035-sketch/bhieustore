import React, { useEffect, useState } from "react";
import { supabase } from "./supabaseClient";
import { Link } from "react-router-dom";

function ListProducts_SP_Admin() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      setError(null);

      const { data, error } = await supabase.from("products").select("*");

      if (error) {
        console.error("Error fetching products:", error);
        setError(error.message);
      } else {
        console.log("Products data:", data);
        setProducts(data || []);
      }
    } catch (err) {
      console.error("Unexpected error:", err);
      setError("Lỗi kết nối database");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm("Bạn có chắc muốn xóa sản phẩm này?")) return;

    try {
      const { error } = await supabase.from("products").delete().eq("id", id);

      if (error) throw error;

      alert("Xóa sản phẩm thành công!");
      fetchProducts();
    } catch (error) {
      alert("Lỗi xóa sản phẩm: " + error.message);
    }
  };

  if (loading) {
    return (
      <div style={{ padding: "20px", textAlign: "center" }}>
        <h2>Đang tải sản phẩm...</h2>
      </div>
    );
  }

  if (error) {
    return (
      <div style={{ padding: "20px", color: "red" }}>
        <h2>Lỗi khi tải sản phẩm</h2>
        <p>{error}</p>
        <button onClick={fetchProducts}>Thử lại</button>
      </div>
    );
  }

  return (
    <div style={{ padding: "20px", maxWidth: "1200px", margin: "0 auto" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "30px",
        }}
      >
        <h1>Quản lý Sản phẩm</h1>
        <Link
          to="/admin/product/new"
          style={{
            padding: "12px 24px",
            backgroundColor: "#27ae60",
            color: "white",
            textDecoration: "none",
            borderRadius: "5px",
            fontWeight: "bold",
          }}
        >
          + Thêm sản phẩm mới
        </Link>
      </div>

      {products.length === 0 ? (
        <div style={{ textAlign: "center", padding: "40px" }}>
          <h3>Chưa có sản phẩm nào</h3>
          <p>Hãy thêm sản phẩm đầu tiên của bạn!</p>
        </div>
      ) : (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: "20px",
          }}
        >
          {products.map((product) => (
            <div
              key={product.id}
              style={{
                border: "1px solid #ddd",
                borderRadius: "8px",
                padding: "20px",
                backgroundColor: "white",
                boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
              }}
            >
              {product.image && (
                <img
                  src={product.image}
                  alt={product.name}
                  style={{
                    width: "100%",
                    height: "200px",
                    objectFit: "cover",
                    borderRadius: "4px",
                    marginBottom: "15px",
                  }}
                />
              )}

              <h3 style={{ margin: "0 0 10px 0", color: "#2c3e50" }}>
                {product.name}
              </h3>

              <p
                style={{
                  color: "#e74c3c",
                  fontWeight: "bold",
                  fontSize: "18px",
                  margin: "0 0 10px 0",
                }}
              >
                {product.price?.toLocaleString("vi-VN")} VNĐ
              </p>

              {product.description && (
                <p
                  style={{
                    color: "#666",
                    marginBottom: "15px",
                    fontSize: "14px",
                  }}
                >
                  {product.description}
                </p>
              )}

              <div style={{ display: "flex", gap: "10px" }}>
                <Link
                  to={`/admin/product/edit/${product.id}`}
                  style={{
                    flex: 1,
                    padding: "8px 16px",
                    backgroundColor: "#3498db",
                    color: "white",
                    textDecoration: "none",
                    borderRadius: "4px",
                    textAlign: "center",
                    fontSize: "14px",
                  }}
                >
                  Sửa
                </Link>

                <button
                  onClick={() => handleDelete(product.id)}
                  style={{
                    flex: 1,
                    padding: "8px 16px",
                    backgroundColor: "#e74c3c",
                    color: "white",
                    border: "none",
                    borderRadius: "4px",
                    cursor: "pointer",
                    fontSize: "14px",
                  }}
                >
                  Xóa
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ListProducts_SP_Admin;
