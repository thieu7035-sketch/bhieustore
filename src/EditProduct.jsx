import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { supabase } from "./supabaseClient";

function EditProduct() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState({
    name: "",
    price: "",
    description: "",
    image: "",
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (id) {
      fetchProduct();
    }
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
      alert("Lỗi khi tải thông tin sản phẩm");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const productData = {
        ...product,
        price: Number(product.price),
      };

      if (id) {
        const { error } = await supabase
          .from("products")
          .update(productData)
          .eq("id", id);

        if (error) throw error;
        alert("Cập nhật sản phẩm thành công!");
      } else {
        const { error } = await supabase.from("products").insert([productData]);

        if (error) throw error;
        alert("Thêm sản phẩm thành công!");
      }

      navigate("/admin");
    } catch (error) {
      console.error("Error saving product:", error);
      alert("Lỗi khi lưu sản phẩm: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div style={{ padding: "20px", maxWidth: "600px", margin: "0 auto" }}>
      <h1>{id ? "Chỉnh sửa sản phẩm" : "Thêm sản phẩm mới"}</h1>

      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column", gap: "15px" }}
      >
        <div>
          <label
            style={{
              display: "block",
              marginBottom: "5px",
              fontWeight: "bold",
            }}
          >
            Tên sản phẩm:
          </label>
          <input
            type="text"
            name="name"
            value={product.name}
            onChange={handleChange}
            required
            style={inputStyle}
          />
        </div>

        <div>
          <label
            style={{
              display: "block",
              marginBottom: "5px",
              fontWeight: "bold",
            }}
          >
            Giá (VNĐ):
          </label>
          <input
            type="number"
            name="price"
            value={product.price}
            onChange={handleChange}
            required
            style={inputStyle}
          />
        </div>

        <div>
          <label
            style={{
              display: "block",
              marginBottom: "5px",
              fontWeight: "bold",
            }}
          >
            Mô tả:
          </label>
          <textarea
            name="description"
            value={product.description}
            onChange={handleChange}
            rows="4"
            style={{ ...inputStyle, resize: "vertical" }}
          />
        </div>

        <div>
          <label
            style={{
              display: "block",
              marginBottom: "5px",
              fontWeight: "bold",
            }}
          >
            URL hình ảnh:
          </label>
          <input
            type="url"
            name="image"
            value={product.image}
            onChange={handleChange}
            style={inputStyle}
            placeholder="https://example.com/image.jpg"
          />
        </div>

        {product.image && (
          <div>
            <label
              style={{
                display: "block",
                marginBottom: "5px",
                fontWeight: "bold",
              }}
            >
              Xem trước:
            </label>
            <img
              src={product.image}
              alt="Preview"
              style={{
                maxWidth: "200px",
                maxHeight: "200px",
                border: "1px solid #ddd",
                borderRadius: "5px",
              }}
            />
          </div>
        )}

        <div style={{ display: "flex", gap: "10px", marginTop: "20px" }}>
          <button
            type="submit"
            disabled={loading}
            style={{
              padding: "12px 24px",
              backgroundColor: loading ? "#95a5a6" : "#27ae60",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: loading ? "not-allowed" : "pointer",
              fontWeight: "bold",
            }}
          >
            {loading ? "Đang lưu..." : id ? "Cập nhật" : "Thêm mới"}
          </button>

          <button
            type="button"
            onClick={() => navigate("/admin")}
            style={{
              padding: "12px 24px",
              backgroundColor: "#95a5a6",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Hủy
          </button>
        </div>
      </form>
    </div>
  );
}

const inputStyle = {
  width: "100%",
  padding: "10px",
  border: "1px solid #ddd",
  borderRadius: "5px",
  fontSize: "16px",
};

export default EditProduct;
