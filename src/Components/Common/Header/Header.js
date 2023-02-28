import React from "react";
import { Link } from "react-router-dom";
import "./header.css";
export default function Header() {
  return (
    <div>
      <header>
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
        </ul>
      </header>
    </div>
  );
}
