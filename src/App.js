import "./App.css";
import Header from "./components/Layout/Header";
import Generic from "./components/Layout/Generic";
import ProductList from "./components/Products/ProductList";
import Cart from "./components/Cart/Cart";
import { useState } from "react";

function App() {
  const [showCart, setShowCart] = useState(false);

  const showCartHandler = () => {
    setShowCart(true);
  };

  const hideCartHandler = () => {
    setShowCart(false);
  };

  return (
    <div className="App">
      <Header onShow={showCartHandler} />
      <Generic />
      <ProductList />
      {showCart && <Cart onHide={hideCartHandler} />}
    </div>
  );
}

export default App;
