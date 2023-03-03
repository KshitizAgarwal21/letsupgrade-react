import "./App.css";
import Home from "./Components/Home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Products from "./Components/Products/Products";
import Services from "./Components/Services/Services";
import Header from "./Components/Common/Header/Header";
import Electronics from "./Components/Electronics/Electronics";
import Fashion from "./Components/Fashion/Fashion";
import MyOrders from "./Components/MyOrders/MyOrders";
import ProtectedRoute from "./utils/ProtectedRoute";
import { useState } from "react";
import Sidenav from "./Components/Common/Sidenav/Sidenav";
import AppsChild from "./Components/AppsChild/AppsChild";
import Signup from "./Components/Signup/Signup";

function App() {
  var [visitcounter, setvisitCounter] = useState(0);
  var [toggle, setToggle] = useState(true);
  var [data, setData] = useState({ name: "Letsupgrade" });
  return (
    <>
      <BrowserRouter>
        <Header
          visitCounter={visitcounter}
          toggle={toggle}
          setToggle={setToggle}
        />
        {/* <Sidenav myowntoggle={toggle} />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/products" element={<Products />}>
              <Route path="electronics" element={<Electronics />}></Route>
              <Route path="fashion" element={<Fashion />}></Route>
            </Route>
            <Route path="/services" element={<Services />}></Route>

            <Route
              path="/myorders"
              element={
                <ProtectedRoute>
                  <MyOrders />
                </ProtectedRoute>
              }
            />
          </Routes>
        </div>
        <button
          onClick={() => {
            setvisitCounter(++visitcounter);
          }}
        >
          Click me
        </button> */}
        {/* <AppsChild data={data} /> */}
        <Signup />
      </BrowserRouter>
    </>
  );
}

export default App;
