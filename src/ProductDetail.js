import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { supabase } from "./supabaseClient";

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProduct();
  }, [id]);

  const fetchProduct = async () => {
    try {
      const { data, error } = await supabase
        .from("products")
        .select("*")
        .eq("id", id)
        .single();

      if (error) throw error;
      setProduct(data);
    } catch (error) {
      console.error("Error fetching product:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <div>Đang tải...</div>;
  if (!product) return <div>Không tìm thấy sản phẩm</div>;

  return (
    <div style={{ padding: "20px", maxWidth: "1000px", margin: "0 auto" }}>
      <Link to="/products" style={{ color: "#3498db", textDecoration: "none" }}>
        ← Quay lại danh sách
      </Link>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "40px",
          marginTop: "20px",
        }}
      >
        <div>
          <img
            src={product.image}
            alt={product.name}
            style={{ width: "100%", borderRadius: "10px" }}
          />
        </div>
        <div>
          <h1>{product.name}</h1>
          <p style={{ color: "#666", fontSize: "1.1rem", lineHeight: "1.6" }}>
            {product.description}
          </p>
          <div
            style={{
              fontSize: "2rem",
              color: "#e44d26",
              fontWeight: "bold",
              margin: "20px 0",
            }}
          >
            {product.price?.toLocaleString("vi-VN")} VNĐ
          </div>
          <button
            style={{
              padding: "15px 30px",
              backgroundColor: "#e74c3c",
              color: "white",
              border: "none",
              borderRadius: "5px",
              fontSize: "1.1rem",
              cursor: "pointer",
            }}
          >
            Thêm vào giỏ hàng
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
