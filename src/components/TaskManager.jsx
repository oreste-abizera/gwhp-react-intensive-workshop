import { useReducer } from "react";
import useFormField from "../hooks/useFormField";

export default function TaskManager() {
  // Reducer function
  const taskReducer = (state, action) => {
    switch (action.type) {
      case "ADD_TASK":
        return [
          ...state,
          {
            id: Date.now(),
            text: action.payload,
            completed: false,
          },
        ];
      case "TOGGLE_TASK":
        return state.map((task) =>
          task.id === action.payload
            ? { ...task, completed: !task.completed }
            : task
        );
      case "DELETE_TASK":
        return state.filter((task) => task.id !== action.payload);
      case "CLEAR_COMPLETED":
        return state.filter((task) => !task.completed);
      default:
        return state;
    }
  };

  // Initialize useReducer with initial state
  const [tasks, dispatch] = useReducer(taskReducer, [
    { id: 1, text: "Study React Hooks", completed: false },
    { id: 2, text: "Build a project", completed: true },
  ]);

  // Form handling with custom hook
  const taskInput = useFormField("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskInput.value.trim()) {
      dispatch({ type: "ADD_TASK", payload: taskInput.value });
      taskInput.reset();
    }
  };

  return (
    <div className="task-manager">
      <h2>Task Manager (useReducer)</h2>

      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Add a new task" {...taskInput} />
        <button type="submit">Add Task</button>
      </form>

      <ul>
        {tasks.map((task) => (
          <li key={task.id} className={task.completed ? "completed" : ""}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() =>
                dispatch({
                  type: "TOGGLE_TASK",
                  payload: task.id,
                })
              }
            />
            {task.text}
            <button
              onClick={() =>
                dispatch({
                  type: "DELETE_TASK",
                  payload: task.id,
                })
              }
            >
              Delete
            </button>
          </li>
        ))}
      </ul>

      <button onClick={() => dispatch({ type: "CLEAR_COMPLETED" })}>
        Clear Completed
      </button>
    </div>
  );
}
