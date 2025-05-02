// src/App.jsx with Redux integration
import { Routes, Route, NavLink, Outlet } from "react-router-dom";
import ProductList from "./pages/ProductList";
import Cart from "./pages/Cart";
import "./App.css";

// Layout component
function Layout() {
  return (
    <div className="app">
      <header>
        <h1>Redux Shop</h1>
        <nav className="nav">
          <NavLink to="/">Products</NavLink>
          <NavLink to="/cart">Cart</NavLink>
        </nav>
      </header>

      <main>
        <Outlet />
      </main>

      <footer>
        <p>Redux Workshop © 2025</p>
      </footer>
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<ProductList />} />
        <Route path="cart" element={<Cart />} />
      </Route>
    </Routes>
  );
}

export default App;
