import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/auth/login";
import Register from "./pages/auth/register";
import Layout from "./components/home/Layout";
import AdminDashboard from "./pages/admin";
import AddProduct from "./pages/products/add-product";
import ProductsPage from "./pages/products";

function App() {
  return (
    <Layout>
      <Router>
        <Routes>
          <Route exact path="/auth/login" element={<Login />} />
          <Route path="/auth/register" element={<Register />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/products/add-product" element={<AddProduct />} />
          <Route path="/products" element={<ProductsPage />} />
        </Routes>
      </Router>
    </Layout>
  );
}

export default App;
