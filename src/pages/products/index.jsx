import axios from "axios";
import React, { useEffect, useState } from "react";
import ProductCard from "../../components/products/ProductCard";

export default function ProductsPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function get() {
      const token = window.localStorage.getItem("access");

      const res = await axios.get(
        `${import.meta.env.VITE_APP_API_URL}/products/all`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log(res.data);

      if (res.data) {
        setProducts(res.data);
      }
    }

    get();
  }, []);

  return (
    <div className="d-flex flex-wrap align-items-center justify-content-around">
      {products.map((product) => {
        return <ProductCard {...product} key={product._id} />;
      })}
    </div>
  );
}
