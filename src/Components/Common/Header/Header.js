import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./header.css";
export default function Header(props) {
  var [dynamic, setDynamic] = useState("none");

  useEffect(() => {
    if (localStorage.getItem("jwt") != null) {
      setDynamic("inline-block");
    }
  }, [dynamic, props.toggle]);

  const navigate = useNavigate();
  const goback = () => {
    navigate(-1);
  };
  const login = () => {
    localStorage.setItem("jwt", "cfxdtwcvwyd");
    setDynamic("inline-block");
  };
  const logout = () => {
    localStorage.removeItem("jwt");
    setDynamic("none");
  };
  return (
    <div>
      <header>
        <span onClick={goback}>Back</span>
        <span onClick={login}>Login</span>
        <span onClick={logout}>Logout</span>
        <span onClick={logout}>{props.visitCounter}</span>
        <button
          onClick={() => {
            props.setToggle(!props.toggle);
          }}
        >
          toggle sidenav
        </button>
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
            <li style={{ display: dynamic }}>My Orders</li>
          </Link>
        </ul>
      </header>
    </div>
  );
}
