import React, { useState } from "react";
import AppsGrandChild from "../AppsGrandChild/AppsGrandChild";
import "./appschild.css";
export default function AppsChild(props) {
  var [ctop, setCtoP] = useState("hello ");
  const changeData = (msg) => {
    setCtoP(msg);
  };
  return (
    <div>
      AppsChild
      <div className="container-new">
        <div>Apps grand child & AppsChild child</div>
        <br />
        <div> Data in parent component is {ctop}</div>
      </div>
      <div style={{ backgroundColor: "yellow" }}>
        <AppsGrandChild data={props.data} updateMsg={changeData} />
      </div>
    </div>
  );
}
