import React, { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin, FaHome } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { Sun, Moon, BookOpen } from 'lucide-react';

const BottomNav = () => {
    const [isHovered, setIsHovered] = useState(false);
    const [isDark, setIsDark] = useState(() => {
        const savedTheme = localStorage.getItem("theme");
        return savedTheme === "dark" || savedTheme === null;
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

    const toggleTheme = () => {
        setIsDark(!isDark);
    };

    return (
        <nav
            className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-300"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div
                className={`flex items-center gap-4 px-6 py-3 rounded-full bg-white/80 dark:bg-black/80 backdrop-blur-md border border-black/20 dark:border-white/20 shadow-lg transition-all duration-300 ${isHovered ? 'px-8 gap-6' : 'px-6 gap-4'
                    }`}
            >
                {/* Home */}
                <a
                    href="#"
                    className="flex items-center justify-center w-10 h-10 rounded-full text-black dark:text-white hover:bg-black/10 dark:hover:bg-white/10 hover:scale-110 transition-all duration-200"
                    aria-label="Home"
                >
                    <FaHome className="text-xl" />
                </a>

                {/* Blog */}
                <a
                    href="#blog"
                    className="flex items-center justify-center w-10 h-10 rounded-full text-black dark:text-white hover:bg-black/10 dark:hover:bg-white/10 hover:scale-110 transition-all duration-200"
                    aria-label="Blog"
                >
                    <BookOpen className="w-5 h-5" />
                </a>

                {/* Separator */}
                <div className="h-6 w-px bg-black/20 dark:bg-white/20"></div>

                {/* Social Links */}
                <a
                    href="https://github.com/sivakumar232"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-black dark:text-white hover:scale-110 transition-transform duration-200"
                    aria-label="GitHub"
                >
                    <FaGithub className="text-xl" />
                </a>

                <a
                    href="https://twitter.com/sivakumarr3105"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-black dark:text-white hover:scale-110 transition-transform duration-200"
                    aria-label="Twitter"
                >
                    <FaXTwitter className="text-xl" />
                </a>

                <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-black dark:text-white hover:scale-110 transition-transform duration-200"
                    aria-label="LinkedIn"
                >
                    <FaLinkedin className="text-xl" />
                </a>

                {/* Separator */}
                {/* <div className="h-6 w-px bg-black/20 dark:bg-white/20"></div> */}

                {/* Theme Toggle (Removed) */}
                {/* <button
                    onClick={toggleTheme}
                    className="flex items-center justify-center w-8 h-8 rounded-full hover:bg-black/10 dark:hover:bg-white/10 transition-all duration-200 hover:scale-110"
                    aria-label="Toggle theme"
                >
                    {isDark ? (
                        <Sun className="w-5 h-5 text-black dark:text-white" />
                    ) : (
                        <Moon className="w-5 h-5 text-black dark:text-white" />
                    )}
                </button> */}
            </div>
        </nav>
    );
};

export default BottomNav;
