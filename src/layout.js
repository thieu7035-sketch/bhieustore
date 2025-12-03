import React from "react";
import { Outlet } from "react-router-dom";
import Chitletsanpham from "./Chitletsanpham";

function Layout() {
  return (
    <div
      style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}
    >
      <Chitletsanpham />
      <main style={{ flex: 1 }}>
        <Outlet />
      </main>
      <footer
        style={{
          backgroundColor: "#2c3e50",
          color: "green",
          textAlign: "center",
          padding: "20px",
          marginTop: "50px",
        }}
      >
        <p>© 2024 Hieu Fashion. All rights reserved.</p>
        <p>Hotline: 0900 123 456 - Email: contact@Hieufashion.com</p>
      </footer>
    </div>
  );
}

export default Layout;
