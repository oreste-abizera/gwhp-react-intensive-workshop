import { useTheme } from "../contexts/ThemeContext";

export default function Home() {
  const { theme } = useTheme();

  return (
    <div>
      <h2>Home Page</h2>
      <p>Welcome to our Context API demonstration!</p>
      <p>
        Current theme: <strong>{theme}</strong>
      </p>
    </div>
  );
}
