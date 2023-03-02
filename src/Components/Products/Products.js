import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import "./products.css";
export default function Products() {
  var [isSale, setSale] = useState("Sale is On!!");
  var [saleonmobile, updateSale] = useState("Huge sale on Mobiles");
  return (
    <div className="container">
      <div>
        <Link to="electronics">
          <div className="selector">Electronics</div>
        </Link>
        <Link to="fashion">
          <div className="selector">Fashion</div>
        </Link>
        <div className="selector">Kitchen appliances</div>
        <div className="selector">Toys</div>
      </div>
      <div>
        <div className="product-content">
          <Outlet context={[isSale, setSale, saleonmobile]} />
        </div>
      </div>
    </div>
  );
}
