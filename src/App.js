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

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
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
      </BrowserRouter>
    </>
  );
}

export default App;
