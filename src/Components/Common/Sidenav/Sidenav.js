import React, { useState, useEffect } from "react";
import "./sidenav.css";
export default function Sidenav(props) {
  var [dynamic, setDynamic] = useState("block");
  useEffect(() => {
    // props.toggle ? setDynamic("block") : setDynamic("none");

    if (props.myowntoggle == true) {
      setDynamic("block");
    } else {
      setDynamic("none");
    }
  }, [props.myowntoggle]);

  return (
    <div style={{ display: dynamic }} className="sidenav">
      Sidenav
    </div>
  );
}
