import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

export default function AddProduct() {
  const [formData, setFormData] = useState({
    name: "",
    brand: "",
    category: "",
    price: 0,
    quantity: 0,
    description: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  async function handleSubmit(e) {
    e.preventDefault();

    if (
      !formData.brand ||
      !formData.category ||
      !formData.description ||
      !formData.name ||
      !formData.price ||
      !formData.quantity
    ) {
      Swal.fire("Fill all the fields");
      return;
    }

    const token = window.localStorage.getItem("access");

    const res = await axios.post(
      `${import.meta.env.VITE_APP_API_URL}/products/add`,
      formData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (res.data === "You don't have the access rights to do this action.") {
      Swal.fire("You don't have access");
    } else {
      window.location.href = "/products";
    }
  }

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="custom-product-form">
            <h2 style={{ color: "#0a418e" }} className="h4">
              Product details
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="column d-flex justify-content-between">
                <div className="p-2">
                  <div className="form-group">
                    <label htmlFor="email">Name</label>
                    <input
                      type="name"
                      className="form-control"
                      id="name"
                      name="name"
                      onChange={handleChange}
                      placeholder="Enter name"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="brand">Brand</label>
                    <input
                      type="brand"
                      className="form-control"
                      id="brand"
                      name="brand"
                      onChange={handleChange}
                      placeholder="Enter brand"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="category">Category</label>
                    <input
                      type="category"
                      className="form-control"
                      id="category"
                      name="category"
                      onChange={handleChange}
                      placeholder="Enter category"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="password">Quantity</label>
                    <input
                      type="number"
                      className="form-control"
                      id="quantity"
                      name="quantity"
                      onChange={handleChange}
                      placeholder="Enter available quantity"
                    />
                  </div>

                  <button type="submit" className="btn btn-primary btn-block">
                    Submit
                  </button>
                </div>

                <div className="p-2 d-flex flex-column justify-content-start align-items-start">
                  <textarea
                    onChange={handleChange}
                    placeholder="Description"
                    name="description"
                    className="p-2 "
                    cols="30"
                    rows="5"
                  ></textarea>
                  <br />
                  <div className="form-group">
                    <label htmlFor="password">Image URL</label>
                    <input
                      type="text"
                      className="form-control"
                      id="image"
                      name="image"
                      onChange={handleChange}
                      placeholder="Enter URL of image"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="password">Price</label>
                    <input
                      type="number"
                      className="form-control"
                      id="price"
                      name="price"
                      onChange={handleChange}
                      placeholder="Enter price in $"
                    />
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
