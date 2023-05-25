import React from "react";

export default function AdminDashboard() {
  return (
    <div>
      <div className="p-3">
        <a
          className="add-product-btn p-2 text-decoration-none text-white"
          href="products/add-product"
        >
          Add Product
        </a>
      </div>
    </div>
  );
}
