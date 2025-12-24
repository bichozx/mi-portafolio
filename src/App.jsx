import { useEffect, useState } from "react";

import AppRouter from "./ui/router/AppRouter";

export default function App() {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "dark"
  );

  useEffect(() => {
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors">
      <AppRouter toggleTheme={toggleTheme} theme={theme} />
    </div>
  );
}
