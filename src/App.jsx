// src/App.jsx
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout";
import Home from "./pages/HomePage";
import Profile from "./pages/ProfilePage";
import Settings from "./pages/SettingsPage";
import Login from "./pages/LoginPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="profile" element={<Profile />} />
        <Route path="settings" element={<Settings />} />
        <Route path="login" element={<Login />} />
      </Route>
    </Routes>
  );
}
export default App;
