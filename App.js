import "./App.css";
import Header from "./components/Layout/Header";
import Generic from "./components/Layout/Generic";
import ProductList from "./components/Products/ProductList";

function App() {
  return (
    <div className="App">
      <Header />
      <Generic />
      <ProductList />
    </div>
  );
}

export default App;
