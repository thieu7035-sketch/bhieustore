const MOCK_API_URL = "https://68fc7bbb96ff6ff19b9f54362.mockapi.io/products";

function formatCurrency(amount) {
  return amount.toLocaleString("vi-VN") + "đ";
}
function renderProducts(productsData) {
  const grid = document.querySelector(".product-list .grid");
  if (!grid) return;
  grid.innerHTML = "";
  grid.innerHTML = productsData
    .map(
      (p) => `
        <div class="product">
          <img src="${p.image}" alt="${p.name}" />
          <h3>${p.name}</h3>
          <p>Giá: ${formatCurrency(p.price)}</p>
          <button onclick="addToCart('${p.name}', ${p.price}, '${p.image}')">
            Thêm vào giỏ
          </button>
        </div>
      `
    )
    .join("");
}
async function fetchAndRenderProducts() {
  try {
    const response = await fetch(MOCK_API_URL);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const productsData = await response.json();
    const normalizedProducts = productsData.map((p) => ({
      ...p,
      price: Number(p.price),
    }));

    renderProducts(normalizedProducts);
  } catch (error) {
    console.error("Lỗi khi tải sản phẩm từ Mock API:", error);
    const grid = document.querySelector(".product-list .grid");
    if (grid) {
      grid.innerHTML =
        "<p style='text-align: center; color: red;'>Không thể tải sản phẩm. Vui lòng kiểm tra địa chỉ Mock API.</p>";
    }
  }
}
let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(name, price, image) {
  const existing = cart.find((item) => item.name === name);
  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({ name, price: price, image, quantity: 1 });
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  alert(`${name} đã được thêm vào giỏ hàng!`);
}

function showCart() {
  const cartContainer = document.getElementById("cart-items");
  const totalElement = document.getElementById("cart-total");
  if (!cartContainer || !totalElement) return;

  cartContainer.innerHTML = "";
  let total = 0;

  cart.forEach((item, index) => {
    total += item.price * item.quantity;
    cartContainer.innerHTML += `
      <div class="cart-item">
        <img src="${item.image}" alt="${item.name}" />
        <div>
          <p><strong>${item.name}</strong></p>
          <p>Số lượng: ${item.quantity}</p>
          <p>Giá: ${formatCurrency(item.price)}</p>
          <button onclick="removeFromCart(${index})">Xóa</button>
        </div>
      </div>
    `;
  });

  totalElement.textContent = `Tổng cộng: ${formatCurrency(total)}`;
}

function removeFromCart(index) {
  if (confirm("Bạn có chắc chắn muốn xóa sản phẩm này khỏi giỏ hàng?")) {
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    showCart();
  }
}

function checkout() {
  if (cart.length === 0) {
    alert("Giỏ hàng trống!");
    return;
  }
  window.location.href = "checkout.html";
}

function loadCheckout() {
  const checkoutItems = document.getElementById("checkout-items");
  const totalEl = document.getElementById("checkout-total");
  if (!checkoutItems || !totalEl) return;

  let total = 0;
  checkoutItems.innerHTML = "";

  cart.forEach((item) => {
    total += item.price * item.quantity;
    checkoutItems.innerHTML += `
      <div class="cart-item">
        <img src="${item.image}" alt="${item.name}" />
        <div>
          <p><strong>${item.name}</strong> x${item.quantity}</p>
          <p>${formatCurrency(item.price * item.quantity)}</p>
        </div>
      </div>
    `;
  });

  totalEl.textContent = `Tổng thanh toán: ${formatCurrency(total)}`;
}

function submitOrder(event) {
  event.preventDefault();
  if (cart.length === 0) {
    alert("Giỏ hàng của bạn đang trống!");
    return;
  }

  alert("Cảm ơn bạn đã đặt hàng tại Super Đỉnh Fashion!");
  localStorage.removeItem("cart");
  window.location.href = "index.html";
}
document.addEventListener("DOMContentLoaded", () => {
  if (document.querySelector(".product-list")) {
    fetchAndRenderProducts();
  }
  if (window.location.pathname.includes("cart.html")) {
    showCart();
  }
  if (window.location.pathname.includes("checkout.html")) {
    loadCheckout();
    const form = document.querySelector(".contact-form");
    if (form) {
      form.addEventListener("submit", submitOrder);
    }
  }
});
