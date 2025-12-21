import React from "react";
import { useEffect, useState } from "react";
import { Sun, Moon } from 'lucide-react';

const DarkThemeToggle = () => {
  const [isDark, setIsDark] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme === "dark" || savedTheme === null; // Default to dark
  });

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  return (
    <button
      className="fixed top-6 right-6 z-50 p-3 bg-white dark:bg-black border-2 border-black dark:border-white rounded-full hover:scale-110 transition-transform duration-200 shadow-lg"
      onClick={() => setIsDark(!isDark)}
      aria-label="Toggle theme"
    >
      {isDark ? (
        <Sun className="w-5 h-5 text-black dark:text-white" />
      ) : (
        <Moon className="w-5 h-5 text-black dark:text-white" />
      )}
    </button>
  );
};

export default DarkThemeToggle;
