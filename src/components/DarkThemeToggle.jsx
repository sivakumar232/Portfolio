import React, { useState, useEffect } from "react";

const DarkThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      return document.documentElement.classList.contains('dark');
    }
    return true; // default to dark
  });

  useEffect(() => {
    // Watch for dark class changes to sync state if changed externally
    const observer = new MutationObserver(() => {
      setIsDarkMode(document.documentElement.classList.contains('dark'));
    });
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    });
    return () => observer.disconnect();
  }, []);

  const handleClick = (e) => {
    const toggleTheme = () => {
      const newTheme = !isDarkMode;

      // Add blur effect during transition
      document.body.classList.add('theme-transitioning');

      // We don't rely on setIsDarkMode here to trigger the change, but to reflect it.
      // Actually, we should manipulate the DOM directly for the theme class as per Connector logic.
      if (newTheme) {
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
      }
      setIsDarkMode(newTheme);

      // Remove blur effect after transition
      setTimeout(() => {
        document.body.classList.remove('theme-transitioning');
      }, 400);
    };

    if (!document.startViewTransition) {
      toggleTheme();
      return;
    }

    const x = e.clientX;
    const y = e.clientY;
    const endRadius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y)
    );

    const transition = document.startViewTransition(() => {
      toggleTheme();
    });

    transition.ready.then(() => {
      document.documentElement.animate(
        {
          clipPath: [
            `circle(0px at ${x}px ${y}px)`,
            `circle(${endRadius}px at ${x}px ${y}px)`,
          ],
        },
        {
          duration: 1000,
          easing: 'ease-in-out',
          pseudoElement: '::view-transition-new(root)',
        }
      );
    });
  };

  return (
    <button
      onClick={handleClick}
      className="fixed top-6 right-6 z-50 p-2 rounded-full bg-white/80 dark:bg-black/80 backdrop-blur-md border border-neutral-200 dark:border-neutral-800 shadow-sm hover:scale-110 transition-all duration-200 group"
      aria-label="Toggle theme"
    >
      {isDarkMode ? (
        <div className="text-yellow-500 group-hover:rotate-90 transition-transform duration-500">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5" /><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" /></svg>
        </div>
      ) : (
        <div className="text-neutral-600 group-hover:-rotate-12 transition-transform duration-500">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" /></svg>
        </div>
      )}
    </button>
  );
};

export default DarkThemeToggle;
