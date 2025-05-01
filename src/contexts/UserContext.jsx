// src/contexts/UserContext.jsx
import { createContext, useState, useContext } from "react";

// Create user context
const UserContext = createContext({
  user: null,
  login: (userData) => {},
  logout: () => {},
});

// Custom hook for using this context
export const useUser = () => useContext(UserContext);

// Provider component
export function UserProvider({ children }) {
  const [user, setUser] = useState(null);

  const login = (userData) => {
    setUser(userData);
  };

  const logout = () => {
    setUser(null);
  };

  // Value to be provided
  const value = { user, login, logout };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}
