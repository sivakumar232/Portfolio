import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import GitHubCalendar from 'react-github-calendar';
import { useLocation } from 'react-router-dom';
import { FaReact } from 'react-icons/fa';
import { SiTailwindcss } from 'react-icons/si';
import { BsGithub } from 'react-icons/bs';
import { FaLink } from 'react-icons/fa6';
import { SiLeetcode } from 'react-icons/si';
import { useState, useEffect } from 'react';
import mobImage from '../assets/mob.jpg';
import Image1 from '../assets/image.png';
import timetableimg from '../assets/timtable.png';
import srkrLogo from '../assets/srkr_logo.jpg';
import bannerImage from '../assets/forest_banner.jpg';
import { FaNodeJs } from 'react-icons/fa';
import { SiExpress } from 'react-icons/si';
import { SiMongodb } from 'react-icons/si';
import { FaPython } from 'react-icons/fa';
import { FaHtml5, FaCss3Alt, FaJs, FaGitAlt, FaJava, FaDocker, FaAws } from 'react-icons/fa';
import { SiPostman, SiVercel, SiTypescript, SiNextdotjs, SiFlutter, SiAndroid, SiNestjs, SiPostgresql, SiSupabase, SiPrisma, SiMysql, SiRedis, SiNginx } from 'react-icons/si';
import { VscGithubAction } from 'react-icons/vsc';
import BottomNav from './BottomNav';
import OnekoLoader from './Onekoloader';
import SectionNav from './SectionNav';

const Connector = () => {
  const [time, setTime] = useState(new Date());
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      return document.documentElement.classList.contains('dark');
    }
    return true; // default to dark
  });

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

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const elements = document.querySelectorAll('.scroll-fade-in');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const hours = time.getHours();
  const minutes = time.getMinutes();
  const location = useLocation();
  const ampm = time.getHours >= 12 ? 'AM' : 'PM';
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <div className="overflow-x-hidden bg-white dark:bg-black bg-no-repeat bg-center bg-fixed min-h-screen transition-colors duration-300 relative bg-[radial-gradient(#d4d4d8_1px,transparent_1px)] dark:bg-[radial-gradient(#ffffff33_1px,transparent_1px)] [background-size:16px_16px]">
      {/* Left margin line */}
      {/* Left margin line */}
      <div className="fixed left-0 top-0 bottom-0 border-l border-dotted border-neutral-300 dark:border-neutral-700 hidden lg:block" style={{ left: 'calc((100vw - 832px) / 2 - 4rem)' }}></div>

      {/* Right margin line */}
      <div className="fixed right-0 top-0 bottom-0 border-r border-dotted border-neutral-300 dark:border-neutral-700 hidden lg:block" style={{ right: 'calc((100vw - 832px) / 2 - 4rem)' }}></div>

      {/* Theme Toggle - Top Right */}
      <button
        onClick={() => {
          const newTheme = !isDarkMode;
          setIsDarkMode(newTheme);
          if (newTheme) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
          } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
          }
        }}
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

      <div className="px-4 py-8 space-y-8" style={{ maxWidth: '832px', margin: '0 auto' }}>
        {/* About Section Group (Profile + Bio + Education) */}
        <div id="about" className="scroll-fade-in no-translate">
          {/* Profile Header Section with Overlapping Banner */}
          <div className="relative mb-8 rounded-xl overflow-hidden">
            {/* Banner Image */}
            <div className="h-32 sm:h-48 w-full bg-neutral-200 dark:bg-neutral-800 overflow-hidden">
              <img src={bannerImage} alt="Cover" className="w-full h-full object-cover" />
            </div>

            <div className="px-6 pb-6 relative">
              {/* Profile Image - Overlapping */}
              <div className="-mt-12 sm:-mt-16 mb-4 flex justify-between items-end">
                <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full border-4 border-neutral-50 dark:border-neutral-900 overflow-hidden bg-white dark:bg-black shadow-sm">
                  <img src={mobImage} alt="Profile" className="w-full h-full object-cover" />
                </div>

                {/* Social Links (Restored) */}
                <div className="flex gap-2 mb-1">
                  <a href="https://github.com/sivakumar232" target="_blank" rel="noopener noreferrer" className="p-2 bg-white dark:bg-neutral-800 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-colors border border-neutral-200 dark:border-neutral-700 group">
                    <FaGithub className="text-xl text-neutral-700 dark:text-neutral-200 group-hover:text-black dark:group-hover:text-white transition-colors" />
                  </a>
                  <a href="https://linkedin.com/in/sivakumar-r-3105" target="_blank" rel="noopener noreferrer" className="p-2 bg-white dark:bg-neutral-800 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-colors border border-neutral-200 dark:border-neutral-700 group">
                    <FaLinkedin className="text-xl text-[#0077b5] dark:text-[#0a66c2]" />
                  </a>
                  <a href="https://x.com/sivakumarr3105" target="_blank" rel="noopener noreferrer" className="p-2 bg-white dark:bg-neutral-800 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-colors border border-neutral-200 dark:border-neutral-700 group">
                    <FaXTwitter className="text-xl text-black dark:text-white" />
                  </a>
                  <a href="https://leetcode.com/u/sivakumar3105/" target="_blank" rel="noopener noreferrer" className="p-2 bg-white dark:bg-neutral-800 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-colors border border-neutral-200 dark:border-neutral-700 group">
                    <SiLeetcode className="text-xl text-[#fea116]" />
                  </a>
                </div>
              </div>

              {/* Profile Info (Restored) */}
              <div>
                <h1 className="text-3xl font-bold font-rubik-glitch mb-2 text-black dark:text-white">Siva Kumar</h1>
                <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4 flex items-center gap-2">
                  Engineer
                  <span className="w-2 h-2 rounded-full bg-black dark:bg-white animate-pulse"></span>
                  Developer
                  <span className="w-2 h-2 rounded-full bg-black dark:bg-white animate-pulse"></span>
                  Builder
                </p>
              </div>
            </div>
          </div>

          {/* About Section Text */}
          <div className="text-black dark:text-white flex flex-col font-roboto-mono rounded-xl p-6 ">
            <div>
              <h1 className="text-2xl font-lato font-semibold mb-2">About Me</h1>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                I'm <span className='text-black dark:text-white font-semibold'>Sivakumar</span>, a developer who loves building things that are both beautiful and functional. I enjoy turning complex problems into simple, elegant solutions.
              </p>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed mt-2">
                When I'm not coding, you'll probably find me reading <span className='text-black dark:text-white font-semibold'>philosophy</span>, listening to <span className='text-black dark:text-white font-semibold'>music</span>, or watching great <span className='text-black dark:text-white font-semibold'>movies</span>. I believe in continuous learning—or as I like to call it, <span className='text-black dark:text-white font-semibold'>Kaizen</span>.
              </p>
            </div>
          </div>

          {/* Education Section */}
          <div className="text-black dark:text-white font-roboto-mono rounded-xl p-6 mb-8">
            <h1 className="text-2xl font-lato font-semibold mb-6">Education</h1>
            <div className="flex items-start gap-3 group">
              <div className="w-10 h-10 shrink-0 border border-neutral-200 dark:border-neutral-800 rounded-sm overflow-hidden">
                <img src={srkrLogo} alt="SRKR Engineering College" className="w-full h-full object-cover" />
              </div>
              <div className="flex flex-col w-full">
                <div className="flex justify-between items-start">
                  <h2 className="text-sm font-bold text-black dark:text-white hover:underline transition-colors">
                    Sagi Ramakrishnam Raju Engineering College
                  </h2>
                  <span className="text-xs text-neutral-500 dark:text-neutral-500 whitespace-nowrap ml-4">2023 — 2027</span>
                </div>
                <p className="text-sm text-neutral-500 dark:text-neutral-500">
                  Artificial Intelligence and Machine Learning
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Projects Section */}
        <div id="projects" className="text-black dark:text-white rounded-xl p-6">
          <h1 className="text-2xl font-lato font-semibold mb-6">Projects</h1>

          <div className="space-y-6">
            {/* Project 1: Bushido Quotes */}
            <div className="scroll-fade-in group bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded overflow-hidden hover:border-neutral-400 dark:hover:border-neutral-600 transition-all relative">
              {/* Corner Accents - Permanent */}
              <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-neutral-400 dark:border-neutral-500"></div>
              <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-neutral-400 dark:border-neutral-500"></div>
              <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-neutral-400 dark:border-neutral-500"></div>
              <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-neutral-400 dark:border-neutral-500"></div>
              <div className="flex flex-col md:flex-row">
                <div className="md:w-2/5 overflow-hidden bg-neutral-100 dark:bg-neutral-800">
                  <img src={Image1} alt="Bushido Quotes" className="w-full h-full object-cover" />
                </div>
                <div className="md:w-3/5 p-6 flex flex-col">
                  <div className="flex items-start justify-between mb-3">
                    <h2 className="text-xl font-bold text-black dark:text-white">Bushido Quotes</h2>
                    <div className="flex gap-2">
                      <a href="https://bushido-zeta.vercel.app/" target="_blank" rel="noopener noreferrer" className="p-1.5 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded transition-colors" title="Live">
                        <FaLink className="text-base text-neutral-600 dark:text-neutral-400" />
                      </a>
                      <a href="https://github.com/sivakumar232/Bushido" target="_blank" rel="noopener noreferrer" className="p-1.5 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded transition-colors" title="GitHub">
                        <BsGithub className="text-base text-neutral-600 dark:text-neutral-400" />
                      </a>
                    </div>
                  </div>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4">
                    A quotes API featuring wisdom from Bushido philosophy. Supports JSON and SVG embeds for easy integration.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    <span className="px-3 py-1 text-xs bg-neutral-100 dark:bg-neutral-800 rounded-full">React</span>
                    <span className="px-3 py-1 text-xs bg-neutral-100 dark:bg-neutral-800 rounded-full">Node.js</span>
                    <span className="px-3 py-1 text-xs bg-neutral-100 dark:bg-neutral-800 rounded-full">Vercel</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Project 2: BackdropUi */}
            <div className="scroll-fade-in group bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded overflow-hidden hover:border-neutral-400 dark:hover:border-neutral-600 transition-all relative">
              {/* Corner Accents - Permanent */}
              <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-neutral-400 dark:border-neutral-500"></div>
              <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-neutral-400 dark:border-neutral-500"></div>
              <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-neutral-400 dark:border-neutral-500"></div>
              <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-neutral-400 dark:border-neutral-500"></div>
              <div className="flex flex-col md:flex-row">
                <div className="md:w-2/5 overflow-hidden bg-neutral-100 dark:bg-neutral-800">
                  <img src={Image1} alt="BackdropUi" className="w-full h-full object-cover" />
                </div>
                <div className="md:w-3/5 p-6 flex flex-col">
                  <div className="flex items-start justify-between mb-3">
                    <h2 className="text-xl font-bold text-black dark:text-white">BackdropUi</h2>
                    <div className="flex gap-2">
                      <a href="https://sivakumar232.github.io/BackdropUI/" target="_blank" rel="noopener noreferrer" className="p-1.5 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded transition-colors" title="Live">
                        <FaLink className="text-base text-neutral-600 dark:text-neutral-400" />
                      </a>
                      <a href="https://github.com/sivakumar232/BackdropUI" target="_blank" rel="noopener noreferrer" className="p-1.5 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded transition-colors" title="GitHub">
                        <BsGithub className="text-base text-neutral-600 dark:text-neutral-400" />
                      </a>
                    </div>
                  </div>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4">
                    Go-to place to find background gradients, ready to use in your projects, made with Tailwind.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    <span className="px-3 py-1 text-xs bg-neutral-100 dark:bg-neutral-800 rounded-full">React</span>
                    <span className="px-3 py-1 text-xs bg-neutral-100 dark:bg-neutral-800 rounded-full">Tailwind CSS</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Project 3: Sync AI */}
            <div className="scroll-fade-in group bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded overflow-hidden hover:border-neutral-400 dark:hover:border-neutral-600 transition-all relative">
              {/* Corner Accents - Permanent */}
              <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-neutral-400 dark:border-neutral-500"></div>
              <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-neutral-400 dark:border-neutral-500"></div>
              <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-neutral-400 dark:border-neutral-500"></div>
              <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-neutral-400 dark:border-neutral-500"></div>
              <div className="flex flex-col md:flex-row">
                <div className="md:w-2/5 overflow-hidden bg-neutral-100 dark:bg-neutral-800">
                  <img src={timetableimg} alt="Sync AI" className="w-full h-full object-cover" />
                </div>
                <div className="md:w-3/5 p-6 flex flex-col">
                  <div className="flex items-start justify-between mb-3">
                    <h2 className="text-xl font-bold text-black dark:text-white">Sync AI</h2>
                    <div className="flex gap-2">
                      <a href="https://github.com/sivakumar232/timetable-frontend" target="_blank" rel="noopener noreferrer" className="p-1.5 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded transition-colors" title="GitHub">
                        <BsGithub className="text-base text-neutral-600 dark:text-neutral-400" />
                      </a>
                    </div>
                  </div>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4">
                    An AI-powered scheduling engine that uses a Genetic Algorithm to automatically generate optimized, clash-free timetables.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    <span className="px-3 py-1 text-xs bg-neutral-100 dark:bg-neutral-800 rounded-full">React</span>
                    <span className="px-3 py-1 text-xs bg-neutral-100 dark:bg-neutral-800 rounded-full">Tailwind CSS</span>
                    <span className="px-3 py-1 text-xs bg-neutral-100 dark:bg-neutral-800 rounded-full">Supabase</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div id="skills" className="scroll-fade-in text-black dark:text-white rounded-xl p-6">
          <h1 className="text-2xl font-lato font-semibold mb-6">Skills & Tools</h1>

          <div className="flex flex-wrap items-center gap-2">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md border border-dashed border-neutral-400 dark:border-neutral-600 bg-white dark:bg-neutral-800 shadow-sm text-sm font-semibold transition-all hover:shadow-md hover:-translate-y-0.5">
              <SiTypescript className="text-[#3178C6] text-base" />
              <span>TypeScript</span>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md border border-dashed border-neutral-400 dark:border-neutral-600 bg-white dark:bg-neutral-800 shadow-sm text-sm font-semibold transition-all hover:shadow-md hover:-translate-y-0.5">
              <FaReact className="text-[#61DAFB] text-base" />
              <span>React.js</span>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md border border-dashed border-neutral-400 dark:border-neutral-600 bg-white dark:bg-neutral-800 shadow-sm text-sm font-semibold transition-all hover:shadow-md hover:-translate-y-0.5">
              <SiNextdotjs className="text-black dark:text-white text-base" />
              <span>Next.js</span>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md border border-dashed border-neutral-400 dark:border-neutral-600 bg-white dark:bg-neutral-800 shadow-sm text-sm font-semibold transition-all hover:shadow-md hover:-translate-y-0.5">
              <SiTailwindcss className="text-[#38BDF8] text-base" />
              <span>Tailwind</span>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md border border-dashed border-neutral-400 dark:border-neutral-600 bg-white dark:bg-neutral-800 shadow-sm text-sm font-semibold transition-all hover:shadow-md hover:-translate-y-0.5">
              <FaHtml5 className="text-[#E34F26] text-base" />
              <span>HTML</span>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md border border-dashed border-neutral-400 dark:border-neutral-600 bg-white dark:bg-neutral-800 shadow-sm text-sm font-semibold transition-all hover:shadow-md hover:-translate-y-0.5">
              <FaCss3Alt className="text-[#1572B6] text-base" />
              <span>CSS</span>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md border border-dashed border-neutral-400 dark:border-neutral-600 bg-white dark:bg-neutral-800 shadow-sm text-sm font-semibold transition-all hover:shadow-md hover:-translate-y-0.5">
              <FaNodeJs className="text-[#339933] text-base" />
              <span>Node.js</span>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md border border-dashed border-neutral-400 dark:border-neutral-600 bg-white dark:bg-neutral-800 shadow-sm text-sm font-semibold transition-all hover:shadow-md hover:-translate-y-0.5">
              <SiExpress className="text-neutral-600 dark:text-white text-base" />
              <span>Express</span>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md border border-dashed border-neutral-400 dark:border-neutral-600 bg-white dark:bg-neutral-800 shadow-sm text-sm font-semibold transition-all hover:shadow-md hover:-translate-y-0.5">
              <SiPostgresql className="text-[#4169E1] text-base" />
              <span>Postgres</span>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md border border-dashed border-neutral-400 dark:border-neutral-600 bg-white dark:bg-neutral-800 shadow-sm text-sm font-semibold transition-all hover:shadow-md hover:-translate-y-0.5">
              <SiMongodb className="text-[#47A248] text-base" />
              <span>MongoDB</span>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md border border-dashed border-neutral-400 dark:border-neutral-600 bg-white dark:bg-neutral-800 shadow-sm text-sm font-semibold transition-all hover:shadow-md hover:-translate-y-0.5">
              <SiSupabase className="text-[#3ECF8E] text-base" />
              <span>Supabase</span>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md border border-dashed border-neutral-400 dark:border-neutral-600 bg-white dark:bg-neutral-800 shadow-sm text-sm font-semibold transition-all hover:shadow-md hover:-translate-y-0.5">
              <SiPrisma className="text-[#2D3748] dark:text-white text-base" />
              <span>Prisma</span>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md border border-dashed border-neutral-400 dark:border-neutral-600 bg-white dark:bg-neutral-800 shadow-sm text-sm font-semibold transition-all hover:shadow-md hover:-translate-y-0.5">
              <FaGitAlt className="text-[#F05032] text-base" />
              <span>Git</span>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md border border-dashed border-neutral-400 dark:border-neutral-600 bg-white dark:bg-neutral-800 shadow-sm text-sm font-semibold transition-all hover:shadow-md hover:-translate-y-0.5">
              <FaGithub className="text-black dark:text-white text-base" />
              <span>GitHub</span>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md border border-dashed border-neutral-400 dark:border-neutral-600 bg-white dark:bg-neutral-800 shadow-sm text-sm font-semibold transition-all hover:shadow-md hover:-translate-y-0.5">
              <SiPostman className="text-[#FF6C37] text-base" />
              <span>Postman</span>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md border border-dashed border-neutral-400 dark:border-neutral-600 bg-white dark:bg-neutral-800 shadow-sm text-sm font-semibold transition-all hover:shadow-md hover:-translate-y-0.5">
              <SiVercel className="text-black dark:text-white text-base" />
              <span>Vercel</span>
            </div>
          </div>
        </div>

        {/* GitHub Activity */}
        <div id="github" className="scroll-fade-in text-black dark:text-white font-roboto-mono rounded-xl p-6">
          <h1 className="text-2xl font-lato font-semibold text-center sm:text-left">GitHub Activity</h1>
          <div className="mt-3 flex justify-center sm:justify-start overflow-hidden">
            <GitHubCalendar
              username="sivakumar232"
              blockSize={11}
              blockMargin={3}
              fontSize={13}
              weeks={17}
              colorScheme={isDarkMode ? 'dark' : 'light'}
              style={{ maxWidth: '100%' }}
              theme={{
                light: ['#f1f5f9', '#cbd5e1', '#94a3b8', '#64748b', '#475569'],
                dark: ['#1e293b', '#334155', '#475569', '#64748b', '#94a3b8'],
              }}
            />
          </div>
        </div>

        {/* Contact Section */}
        <div id="contact" className="scroll-fade-in text-black dark:text-white rounded-xl p-6">
          <h1 className="text-2xl font-lato font-semibold mb-6">Let's Connect</h1>

          <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed mb-6">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Feel free to reach out!
          </p>

          {/* Contact Methods */}
          <div className="space-y-4">
            {/* Email */}
            <a
              href="mailto:sivakumar232@example.com"
              className="flex items-center gap-3 text-black dark:text-white hover:text-neutral-600 dark:hover:text-neutral-400 transition-colors group"
            >
              <div className="p-3 rounded-lg bg-neutral-100 dark:bg-neutral-800 group-hover:bg-neutral-200 dark:group-hover:bg-neutral-700 transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <p className="text-xs text-neutral-500 dark:text-neutral-500">Email</p>
                <p className="text-sm font-medium">sivakumarr3105@gmail.com</p>
              </div>
            </a>

            {/* Social Links */}
            <div className="flex gap-3 pt-2">
              <a
                href="https://github.com/sivakumar232"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors"
                aria-label="GitHub"
              >
                <FaGithub className="text-xl text-black dark:text-white" />
              </a>
              <a
                href="https://twitter.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors"
                aria-label="Twitter"
              >
                <FaXTwitter className="text-xl text-black dark:text-white" />
              </a>
              <a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="text-xl text-black dark:text-white" />
              </a>
            </div>
          </div>
        </div>

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
          <div className="text-neutral-500 dark:text-neutral-500 font-mono">
            {time.getHours() % 12 || 12}:{time.getMinutes().toString().padStart(2, '0')} {time.getHours() >= 12 ? 'PM' : 'AM'}
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
