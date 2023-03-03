import React, { useState } from "react";
import "./signup.css";
export default function Signup() {
  var [myobj, setObj] = useState({});

  const handlechange = (event) => {
    setObj((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };
  const showData = () => {
    console.log(myobj);
  };

  return (
    <div>
      <div className="myform">
        Full name:{" "}
        <input type="text" onChange={handlechange} name="name"></input>
        <br />
        Email: <input type="email" onChange={handlechange} name="email"></input>
        <br />
        Password:{" "}
        <input type="password" onChange={handlechange} name="password"></input>
        <br />
        <button
          onClick={() => {
            showData();
          }}
        >
          Sign Up
        </button>
      </div>
    </div>
  );
}
