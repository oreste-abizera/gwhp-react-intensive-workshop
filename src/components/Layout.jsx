import { NavLink, Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="app">
      <header>
        <h1>React Router Demo</h1>
        <nav className="nav">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/products">Products</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/dashboard">Dashboard</NavLink>
        </nav>
      </header>

      {/* Outlet renders the current route's element */}
      <main>
        <Outlet />
      </main>

      <footer>
        <p>React Router Workshop © 2025</p>
      </footer>
    </div>
  );
}
