import React, { useEffect } from "react";
import "./App.css";
import { fetchProduct } from "./redux/productSlice";
import { useAppDispatch, useAppSelector } from "./redux/hooks";
import Home from "./components/Home";
import Products from "./components/Products";
import Layout from "./components/Layout";
import { Routes, Route } from "react-router-dom";

function App() {
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
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="product" element={<Products products={products} />} />
        </Route>
        <Route
          path="*"
          element={
            <div>
              <h1>PAGE NOT FOUND (404)</h1>
            </div>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
