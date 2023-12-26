import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Layout/Header";

import About from "./components/Pages/About";
import Home from "./components/Pages/Home";

import Store from "./components/Pages/Store";
// import Header from "./components/Layout/Header";
// import Generic from "./components/Layout/Generic";
// import ProductList from "./components/Products/ProductList";
// import Cart from "./components/Cart/Cart";
// import { useState } from "react";

function App() {
  // const [showCart, setShowCart] = useState(false);

  // const showCartHandler = () => {
  //   setShowCart(true);
  // };

  // const hideCartHandler = () => {
  //   setShowCart(false);
  // };

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Store />} />
        <Route path="/about" element={<About />} />
        <Route path="/home" element={<Home />} />
      </Routes>

      {/* <Store /> */}
    </div>
  );
}

export default App;
