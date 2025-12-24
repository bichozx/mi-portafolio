import { useEffect, useState } from "react";

const getInitialTheme = () => {
  if (typeof window === "undefined") return "light";
  return localStorage.getItem("theme") || "light";
};

export default function ThemeToggle() {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <button
      onClick={toggleTheme}
      className="px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700
                 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
    >
      {theme === "light" ? "🌙 Dark" : "☀️ Light"}
    </button>
  );
}
