import { useUser } from "../contexts/UserContext";
import { Navigate } from "react-router-dom";

export default function Profile() {
  const { user } = useUser();

  if (!user) {
    return <Navigate to="/login" />;
  }

  return (
    <div>
      <h2>Profile</h2>
      <div className="card">
        <h3>{user.name}'s Profile</h3>
        <p>
          <strong>Email:</strong> {user.email}
        </p>
        <p>
          <strong>Role:</strong> {user.role}
        </p>
        <p>
          <strong>Member since:</strong> {user.memberSince}
        </p>
      </div>
    </div>
  );
}
