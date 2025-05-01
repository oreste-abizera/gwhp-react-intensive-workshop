// src/App.jsx
import "./App.css";
import TaskManager from "./components/TaskManager";
import Timer from "./components/Timer";

function App() {
  return (
    <div className="app">
      <h1>React Hooks Demo</h1>
      <Timer />
      <TaskManager />
    </div>
  );
}

export default App;
