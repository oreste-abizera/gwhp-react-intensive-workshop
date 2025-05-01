import { useUser } from "../contexts/UserContext";

export default function Login() {
  const { login } = useUser();

  const handleLogin = () => {
    // Simulate a login
    const userData = {
      name: "John Doe",
      email: "test@gmail.com",
      role: "Admin",
      memberSince: "2025-01-01",
    };
    login(userData);
  };
  return (
    <div>
      <h2>Login</h2>
      <button onClick={handleLogin}>Login as John Doe</button>
    </div>
  );
}
