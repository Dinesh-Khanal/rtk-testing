import React, { useState } from "react";
import reactLogo from "../assets/react.svg";
import "../App.css";
import { Outlet, Link } from "react-router-dom";

function Layout() {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <div className="navbar">
        <Link to="/">Home</Link>
        <Link to="/product">Products</Link>
        <Link to="/users">Users</Link>
      </div>
      <Outlet />
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

export default Layout;
