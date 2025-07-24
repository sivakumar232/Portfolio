import React from "react";  
import { useEffect, useState } from "react";
import { Sun, Moon } from 'lucide-react';

const DarkThemeToggle = () => {
  const [isDark, setIsDark] = useState(() => {
    return localStorage.getItem("theme") === "dark";
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
      className="px-4 py-2 bg-gray-200 dark:bg-gray-700 dark:text-white rounded"
      onClick={() => setIsDark(!isDark)}
    >
      {isDark ? <Sun /> :<Moon/>}
    </button>
  );
};

export default DarkThemeToggle;
