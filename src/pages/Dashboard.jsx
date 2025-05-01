import { useState } from "react";

export default function Dashboard() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  if (!isAuthenticated) {
    return (
      <div>
        <h2>Dashboard</h2>
        <p>You need to login to view this page.</p>
        <button onClick={() => setIsAuthenticated(true)}>Login</button>
      </div>
    );
  }

  return (
    <div>
      <h2>Dashboard</h2>
      <p>Welcome to your dashboard!</p>
      <p>This is a protected route that requires authentication.</p>
      <button onClick={() => setIsAuthenticated(false)}>Logout</button>
    </div>
  );
}
