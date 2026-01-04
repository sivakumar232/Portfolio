import React, { useState, useEffect } from 'react';
import Lenis from '@studio-freight/lenis';
import BottomNav from './BottomNav';
import OnekoLoader from './Onekoloader';
import SectionNav from './SectionNav';
import VisitorCounter from './VisitorCounter';
import DarkThemeToggle from './DarkThemeToggle';
import Banner from './Banner';
import About from './About';
import Projects from './Projects';
import Skills from './Skills';
import GithubActivity from './GithubActivity';
import Contact from './Contact';
import Quotes from './Quotes';

const Connector = () => {
  const [time, setTime] = useState(new Date());
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      return document.documentElement.classList.contains('dark');
    }
    return true; // default to dark
  });

  // Lenis Smooth Scroll
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      smoothTouch: false,
      touchMultiplier: 2,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  useEffect(() => {
    const timerId = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timerId);
  }, []);

  useEffect(() => {
    // Watch for dark class changes
    const observer = new MutationObserver(() => {
      setIsDarkMode(document.documentElement.classList.contains('dark'));
    });
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    });
    return () => observer.disconnect();
  }, []);

  return (
    <div className="overflow-x-hidden bg-white dark:bg-black bg-no-repeat bg-center bg-fixed min-h-screen transition-colors duration-300 relative bg-[radial-gradient(#d4d4d8_1px,transparent_1px)] dark:bg-[radial-gradient(#ffffff33_1px,transparent_1px)] [background-size:16px_16px]">

      {/* Theme Toggle */}
      <DarkThemeToggle />

      <div className="px-4 py-8 space-y-6" style={{ maxWidth: '832px', margin: '0 auto' }}>

        <Banner isDarkMode={isDarkMode} />

        <About isDarkMode={isDarkMode} />

        <Projects />

        <Skills />

        <GithubActivity isDarkMode={isDarkMode} />

        <Contact />

        <Quotes />

        {/* Footer */}
        <div className="w-full flex justify-between items-center border-t border-neutral-300 dark:border-neutral-700 py-4 text-sm">
          <div className="text-left">
            <div>
              <span className="text-neutral-500 dark:text-neutral-500">Designed and Developed by </span>
              <span className="font-bold text-black dark:text-white">Siva Kumar</span>
            </div>
            <div className="text-neutral-500 dark:text-neutral-500 text-xs mt-1">
              &copy; {new Date().getFullYear()} All rights reserved.
            </div>
          </div>
          <div className="flex flex-col items-end gap-1">
            <div className="text-neutral-500 dark:text-neutral-500 font-mono">
              <VisitorCounter />
            </div>
            <div className="text-neutral-500 dark:text-neutral-500 font-mono">
              {time.getHours() % 12 || 12}:{time.getMinutes().toString().padStart(2, '0')} {time.getHours() >= 12 ? 'PM' : 'AM'}
            </div>
          </div>
        </div>

      </div >

      {/* Section Navigation */}
      < SectionNav />

      {/* Oneko Cat Animation */}
      < OnekoLoader />
    </div >
  );
};

export default Connector;
