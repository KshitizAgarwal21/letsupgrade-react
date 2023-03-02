import React from "react";
import { useOutletContext } from "react-router-dom";
import Mobiles from "../Mobiles/Mobiles";
export default function Electronics() {
  var [isSale, setSale, saleonmobile] = useOutletContext();
  return (
    <div>
      Electronics
      <div>{isSale}</div>
      <button
        onClick={() => {
          setSale("Sale is not live");
        }}
      >
        Sale toggle
      </button>
      <Mobiles saleonmobiles={saleonmobile} />
    </div>
  );
}
