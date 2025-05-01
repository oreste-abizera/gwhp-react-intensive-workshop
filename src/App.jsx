// src/App.jsx
import "./App.css";
import Counter from "./components/Counter";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="app">
      <h1>React State and Events</h1>
      <Counter />
      <TodoList />
    </div>
  );
}

export default App;
