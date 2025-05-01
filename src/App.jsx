// src/App.jsx
import "./App.css";
import Card from "./components/Card";
import Greeting from "./components/Greeting";
import Profile from "./components/Profile";

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
