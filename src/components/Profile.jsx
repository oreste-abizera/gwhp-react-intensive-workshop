import Card from "./Card";

export default function Profile({ user }) {
  return (
    <Card title={`${user.name}'s Profile`}>
      <img
        src={user.avatar || "https://via.placeholder.com/100"}
        alt={user.name}
        className="avatar"
      />
      <p>
        <strong>Email:</strong> {user.email}
      </p>
      <p>
        <strong>Role:</strong> {user.role}
      </p>
      <p>
        <strong>Joined:</strong> {user.joinDate}
      </p>
    </Card>
  );
}
