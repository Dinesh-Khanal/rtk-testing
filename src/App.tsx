import React, { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { fetchProduct } from "./redux/productSlice";
import { useAppDispatch, useAppSelector } from "./redux/hooks";
import Home from "./components/Home";
import Products from "./components/Products";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);
  const { products, isLoading, errMessage } = useAppSelector(
    (state) => state.products
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProduct());
  }, []);
  if (isLoading) return <div>Loading...</div>;
  return (
    <div className="App">
      {errMessage && <div>Error: {errMessage}</div>}
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <div>
        <Link to="/">Home</Link>
        <Link to="/product">Product</Link>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Products products={products} />} />
      </Routes>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;
