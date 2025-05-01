// src/App.jsx
import "./App.css";

// Simple functional component with props
function Greeting({ name, role }) {
  return (
    <div className="greeting">
      <h2>Hello, {name}!</h2>
      <p>Role: {role}</p>
    </div>
  );
}

// Component with children props
function Card({ title, children }) {
  return (
    <div className="card">
      <h3>{title}</h3>
      <div className="card-content">{children}</div>
    </div>
  );
}

// Profile component using composition
function Profile({ user }) {
  return (
    <Card title={`${user.name}'s Profile`}>
      <img
        src={user.avatar || "https://placehold.co/400"}
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

function App() {
  const user = {
    name: "Alex Johnson",
    email: "alex@example.com",
    role: "Developer",
    joinDate: "January 2023",
    avatar: "https://placehold.co/400",
  };

  return (
    <div className="app">
      <h1>React Components Demo</h1>

      <Greeting name="Student" role="React Developer" />

      <Card title="About Components">
        <p>Components are the building blocks of React applications.</p>
        <p>They can be composed together to build complex UIs.</p>
      </Card>

      <Profile user={user} />
    </div>
  );
}

export default App;
