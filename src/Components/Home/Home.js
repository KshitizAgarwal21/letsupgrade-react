import React from "react";
import "./home.css";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  const takeMeThere = () => {
    navigate("/products/electronics");
  };

  return (
    <div>
      <div className="ad" onClick={takeMeThere}>
        Click here to purchase!! Sale is live now!!
      </div>
    </div>
  );
}
