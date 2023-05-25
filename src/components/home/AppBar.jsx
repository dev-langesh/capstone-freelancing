import React, { useEffect, useState } from "react";
import { FaUser, FaShoppingCart, FaSearch } from "react-icons/fa";

export default function AppBar() {
  const [auth, setAuth] = useState(false);

  useEffect(() => {
    const token = window.localStorage.getItem("access");

    if (token) {
      setAuth(true);
    }
  }, []);

  function logout() {
    window.localStorage.removeItem("access");
    window.location.href = "/auth/login";
  }

  return (
    <nav className=" shadow-sm px-3 py-2 d-flex align-items-center justify-content-between app-bar">
      <div className="d-flex align-items-center justify-content-between ">
        <img
          src="/src/assets/logo.png"
          width="50px"
          height="35px"
          className="px-2"
          alt=""
        />
        <a className="text-decoration-none h5 m-0 text-black" href="#">
          Beauty Bubbles
        </a>
      </div>

      <ul className="d-flex m-0 list-unstyled align-items-center justify-content-center">
        <li className="px-2">
          <a className="nav-link" href="#">
            <FaSearch />
          </a>
        </li>
        <li className="px-2">
          <a className="nav-link" href="#">
            <FaShoppingCart />
          </a>
        </li>
        <li className="px-3">
          <a className="nav-link" href={auth ? "#" : "/auth/login"}>
            <FaUser />
          </a>
        </li>
        {auth && (
          <li className="px-2">
            <button onClick={logout} className="logout-btn" href="#">
              Logout
            </button>
          </li>
        )}
      </ul>
    </nav>
  );
}
