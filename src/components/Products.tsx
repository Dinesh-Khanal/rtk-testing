import React from "react";
import { IProduct } from "../types/productTypes";
type PProps = {
  products: IProduct[];
};
const Products = ({ products }: PProps) => {
  return (
    <div>
      <h2>Products List</h2>
      <h4>Available product are:</h4>
      <ul>
        {products.map((p) => (
          <li key={p.id}>{p.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Products;
