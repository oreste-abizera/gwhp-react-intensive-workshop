import { useTheme } from "../contexts/ThemeContext";
import { useUser } from "../contexts/UserContext";
import { Link, NavLink, Outlet } from "react-router-dom";

export default function Layout() {
  const { theme, toggleTheme } = useTheme();
  const { user, logout } = useUser();

  return (
    <div className={`app ${theme === "dark" ? "theme-dark" : "theme-light"}`}>
      <header>
        <div className="header-top">
          <h1>Context API Demo</h1>
          <div className="header-controls">
            <button onClick={toggleTheme}>
              {theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
            </button>

            {user ? (
              <div className="user-info">
                <span>Welcome, {user.name}!</span>
                <button onClick={logout}>Logout</button>
              </div>
            ) : (
              <Link to="/login">Login</Link>
            )}
          </div>
        </div>

        <nav className="nav">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/profile">Profile</NavLink>
          <NavLink to="/settings">Settings</NavLink>
        </nav>
      </header>

      <main>
        <Outlet />
      </main>

      <footer>
        <p>Context API Workshop © 2025</p>
      </footer>
    </div>
  );
}
