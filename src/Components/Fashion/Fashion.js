import React from "react";
import { useOutletContext } from "react-router-dom";
export default function Fashion() {
  var [isSale, setSale] = useOutletContext();
  return (
    <div>
      Fashion
      <div>{isSale}</div>
    </div>
  );
}
