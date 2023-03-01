import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./header.css";
export default function Header() {
  const navigate = useNavigate();
  const goback = () => {
    navigate(-1);
  };
  return (
    <div>
      <header>
        <span onClick={goback}>Back</span>
        <ul>
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/products">
            <li>Products</li>
          </Link>
          <Link to="/services">
            <li>Services</li>
          </Link>
          <Link to="/myorders">
            <li>My Orders</li>
          </Link>
        </ul>
      </header>
    </div>
  );
}
