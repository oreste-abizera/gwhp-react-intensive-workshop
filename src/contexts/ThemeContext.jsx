// src/contexts/ThemeContext.jsx
import { createContext, useState, useContext } from "react";

// Create a context with default values
const ThemeContext = createContext({
  theme: "light",
  toggleTheme: () => {},
});

// Custom hook for using this context
export const useTheme = () => useContext(ThemeContext);

// Provider component
export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  // Value that will be provided to consumers
  const value = { theme, toggleTheme };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}
