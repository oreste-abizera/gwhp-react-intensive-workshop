import { useTheme } from "../contexts/ThemeContext";
import { useUser } from "../contexts/UserContext";
import { Navigate } from "react-router-dom";

export default function Settings() {
  const { theme, toggleTheme } = useTheme();
  const { user } = useUser();

  if (!user) {
    return <Navigate to="/login" />;
  }

  return (
    <div>
      <h2>Settings</h2>

      <div className="card">
        <h3>Account Settings</h3>
        <p>
          <strong>Email:</strong> {user.email}
        </p>
        <p>
          <strong>Role:</strong> {user.role}
        </p>
        <p>
          <strong>Member since:</strong> {user.memberSince}
        </p>
        <button onClick={toggleTheme}>
          {theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
        </button>
      </div>
      <div className="card">
        <h3>Theme Settings</h3>
        <p>
          Current theme: <strong>{theme}</strong>
        </p>
        <button onClick={toggleTheme}>
          {theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
        </button>
      </div>
    </div>
  );
}
