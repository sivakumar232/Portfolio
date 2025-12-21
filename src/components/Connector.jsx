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
import { FaNodeJs } from 'react-icons/fa';
import { SiExpress } from 'react-icons/si';
import { SiMongodb } from 'react-icons/si';
import { FaPython } from 'react-icons/fa';
import { FaHtml5, FaCss3Alt, FaJs, FaGitAlt } from 'react-icons/fa';
import { SiPostman, SiVercel } from 'react-icons/si';
import BottomNav from './BottomNav';

const Connector = () => {
  const [time, setTime] = useState(new Date());
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
    <div className="overflow-x-hidden bg-white dark:bg-black bg-no-repeat bg-center bg-fixed min-h-screen transition-colors duration-300">
      <div className="px-4 mt-5 space-y-6">
        {/* Profile Section */}
        <div className="text-black dark:text-white flex flex-col items-center sm:flex-row sm:items-start font-roboto-mono m-auto rounded-xl p-6 w-full max-w-4xl space-y-4 sm:space-y-0 sm:space-x-6">
          <img
            src={mobImage}
            alt="Profile"
            className="w-28 h-28 object-cover rounded-xl shadow-lg"
          />
          <div className="text-center sm:text-left">
            <h1 className="text-3xl sm:text-4xl font-semibold font-montserrat">Siva Kumar</h1>
            <p className="text-base font-lato mb-2 text-neutral-700 dark:text-neutral-300">Web Developer</p>
            <div className="flex justify-center sm:justify-start space-x-4 mt-1">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="text-2xl hover:scale-110 hover:text-neutral-500 dark:hover:text-neutral-400 transition duration-300" />
              </a>
              <a href="https://github.com/sivakumar232" target="_blank" rel="noopener noreferrer">
                <FaGithub className="text-2xl hover:scale-110 hover:text-neutral-500 dark:hover:text-neutral-400 transition duration-300" />
              </a>
              <a href="https://twitter.com/sivakumarr3105" target="_blank" rel="noopener noreferrer">
                <FaXTwitter className="text-2xl hover:scale-110 hover:text-neutral-500 dark:hover:text-neutral-400 transition duration-300" />
              </a>
              <a href="https://leetcode.com/sivakumarrrrrr2005" target="_blank" rel="noopener noreferrer">
                <SiLeetcode className="text-2xl hover:scale-110 hover:text-neutral-500 dark:hover:text-neutral-400 transition duration-300" />
              </a>
            </div>
          </div>
          <div className='border flex relative space-x-1 top-2 rounded-md p-1 border-black dark:border-white text-monospace'>
            <span className='blink_me relative top-1.5'></span><p className='text-xs text-black dark:text-white'>Available</p>
          </div>
          <div className='text-neutral-600 dark:text-neutral-400 fixed top-5 left-2'>
            <p>{`${hours % 12 === 0 ? 12 : String(hours % 12).padStart(2, '0')}:${String(minutes).padStart(2, '0')} ${ampm}`}</p>
          </div>
          <div className='text-neutral-400 fixed top-5 right-2'>
          </div>
        </div>

        {/* About Section */}
        <div className="text-black dark:text-white flex flex-col font-roboto-mono m-auto rounded-xl p-6 w-full max-w-4xl space-y-2">
          <h1 className="text-2xl font-lato font-semibold text-left">About Me.</h1>
          <p className="text-sm text-neutral-600 dark:text-neutral-400 text-left">
            Hey! I'm <span className='text-black dark:text-white font-semibold'>Sivakumar</span>, an undergraduate computerscience student and <span className='text-black dark:text-white font-semibold'>a fullstack developer</span> who loves turning ideas into reality.
          </p>
          <p className="text-sm text-neutral-600 dark:text-neutral-400 text-left">
            I primarily work with <span className='text-black dark:text-white font-semibold'>React</span>, <span className='text-black dark:text-white font-semibold'>Node.js</span>, <span className='text-black dark:text-white font-semibold'>Express</span>, <span className='text-black dark:text-white font-semibold'>MongoDB</span>, and <span className='text-black dark:text-white font-semibold'>Tailwind</span>. I have experience with MySql, but I'm flexible and quick to adapt to other technologies and stacks as needed.
          </p>
          <h1 className="text-2xl font-lato font-semibold text-left">Hire Me.</h1>
          <p className="text-sm text-neutral-600 dark:text-neutral-400 text-left">
            I'm currently <span className='text-black dark:text-white font-semibold'>available</span> for <span className='text-black dark:text-white font-semibold'>internships</span> and <span className='text-black dark:text-white font-semibold'>freelance</span> work—ready to jump in and bring my skills to your team.
          </p>
        </div>

        {/* Skills Section */}
        <div className="text-black dark:text-white w-full max-w-4xl mx-auto rounded-xl p-6">
          <h1 className="text-2xl font-lato font-semibold text-center sm:text-left mb-4">Skills & Tools</h1>
          <div className="flex flex-wrap items-center gap-2">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md border border-dashed border-black/50 dark:border-white/35 bg-white dark:bg-black shadow-sm text-sm font-semibold transition-transform hover:-translate-y-0.5">
              <FaHtml5 className="text-[#E34F26] text-base" />
              <span>HTML</span>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md border border-dashed border-black/50 dark:border-white/35 bg-white dark:bg-black shadow-sm text-sm font-semibold transition-transform hover:-translate-y-0.5">
              <FaCss3Alt className="text-[#1572B6] text-base" />
              <span>CSS</span>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md border border-dashed border-black/50 dark:border-white/35 bg-white dark:bg-black shadow-sm text-sm font-semibold transition-transform hover:-translate-y-0.5">
              <FaJs className="text-[#F7DF1E] text-base" />
              <span>JavaScript</span>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md border border-dashed border-black/50 dark:border-white/35 bg-white dark:bg-black shadow-sm text-sm font-semibold transition-transform hover:-translate-y-0.5">
              <FaReact className="text-[#61DAFB] text-base" />
              <span>React</span>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md border border-dashed border-black/50 dark:border-white/35 bg-white dark:bg-black shadow-sm text-sm font-semibold transition-transform hover:-translate-y-0.5">
              <FaNodeJs className="text-[#339933] text-base" />
              <span>Node.js</span>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md border border-dashed border-black/50 dark:border-white/35 bg-white dark:bg-black shadow-sm text-sm font-semibold transition-transform hover:-translate-y-0.5">
              <SiExpress className="text-neutral-600 dark:text-white text-base" />
              <span>Express</span>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md border border-dashed border-black/50 dark:border-white/35 bg-white dark:bg-black shadow-sm text-sm font-semibold transition-transform hover:-translate-y-0.5">
              <SiMongodb className="text-[#47A248] text-base" />
              <span>MongoDB</span>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md border border-dashed border-black/50 dark:border-white/35 bg-white dark:bg-black shadow-sm text-sm font-semibold transition-transform hover:-translate-y-0.5">
              <SiTailwindcss className="text-[#38BDF8] text-base" />
              <span>Tailwind</span>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md border border-dashed border-black/50 dark:border-white/35 bg-white dark:bg-black shadow-sm text-sm font-semibold transition-transform hover:-translate-y-0.5">
              <FaGitAlt className="text-[#F05032] text-base" />
              <span>Git</span>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md border border-dashed border-black/50 dark:border-white/35 bg-white dark:bg-black shadow-sm text-sm font-semibold transition-transform hover:-translate-y-0.5">
              <FaGithub className="text-black dark:text-white text-base" />
              <span>GitHub</span>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md border border-dashed border-black/50 dark:border-white/35 bg-white dark:bg-black shadow-sm text-sm font-semibold transition-transform hover:-translate-y-0.5">
              <SiPostman className="text-[#FF6C37] text-base" />
              <span>Postman</span>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md border border-dashed border-black/50 dark:border-white/35 bg-white dark:bg-black shadow-sm text-sm font-semibold transition-transform hover:-translate-y-0.5">
              <SiVercel className="text-black dark:text-white text-base" />
              <span>Vercel</span>
            </div>
          </div>
        </div>

        {/* GitHub Activity */}
        <div className="text-black dark:text-white font-roboto-mono w-full max-w-4xl mx-auto rounded-xl p-6">
          <h1 className="text-2xl font-lato font-semibold text-center sm:text-left">GitHub Activity</h1>
          <div className="mt-3 flex justify-center sm:justify-start">
            <GitHubCalendar
              username="sivakumar232"
              blockSize={12}
              blockMargin={3}
              fontSize={14}
              weeks={20}
              colorScheme={isDarkMode ? 'dark' : 'light'}
              style={{ maxWidth: '100%' }}
            />
          </div>
        </div>

        {/* Projects Section */}
        {/* --- Projects Section --- */}
        {/* Projects Section */}
        <div className="text-black dark:text-white font-roboto-mono w-full max-w-4xl mx-auto p-6">
          <h1 className="text-2xl font-lato font-semibold text-center sm:text-left mb-6">
            Projects
          </h1>

          {/* Grid container */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            {/* Project 1: BackdropUi */}
            <div className="bg-neutral-100 dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-700 rounded-lg transition-all duration-200 hover:-translate-y-1">
              <div>
                <img
                  src={Image1}
                  alt="Backdrop UI"
                  className="w-full h-48 object-cover rounded-t-lg"
                />
              </div>
              <div className="p-4">
                {/* Card Header with Title and Links */}
                <div className="flex justify-between items-center mb-2">
                  <h2 className="text-lg font-bold text-black dark:text-white">BackdropUi</h2>
                  <div className="flex gap-3">
                    <a href="https://github.com/sivakumar232/BackdropUI" target="_blank" rel="noopener noreferrer">
                      <BsGithub className="text-xl text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white transition" />
                    </a>
                    <a href="https://sivakumar232.github.io/BackdropUI/" target="_blank" rel="noopener noreferrer">
                      <FaLink className="text-xl text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white transition" />
                    </a>
                  </div>
                </div>

                <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-1">
                  Go-to place to find background gradients, ready to use in your projects, made with Tailwind.
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mt-4">
                  <div className="flex items-center gap-1.5 bg-white dark:bg-black text-black dark:text-white rounded px-2 py-1 text-xs border border-neutral-300 dark:border-neutral-700">
                    <FaReact className="text-sky-400" /> React
                  </div>
                  <div className="flex items-center gap-1.5 bg-white dark:bg-black text-black dark:text-white rounded px-2 py-1 text-xs border border-neutral-300 dark:border-neutral-700">
                    <SiTailwindcss className="text-cyan-600" /> Tailwind CSS
                  </div>
                </div>
              </div>
            </div>

            {/* Project 2: Sync AI */}
            <div className="bg-neutral-100 dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-700 rounded-lg transition-all duration-200 hover:-translate-y-1">
              <div>
                <img
                  src={timetableimg}
                  alt="Sync AI"
                  className="w-full h-48 object-cover rounded-t-lg"
                />
              </div>
              <div className="p-4">
                {/* Card Header with Title and Links */}
                <div className="flex justify-between items-center mb-2">
                  <h2 className="text-lg font-bold text-black dark:text-white">Sync AI</h2>
                  <div className="flex gap-3">
                    <a href="https://github.com/sivakumar232/timetable-frontend" target="_blank" rel="noopener noreferrer">
                      <BsGithub className="text-xl text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white transition" />
                    </a>
                    {/* Add live link if available, or remove this 'a' tag */}
                    {/* <a href="#" target="_blank" rel="noopener noreferrer">
            <FaLink className="text-xl text-neutral-400 hover:text-white transition" />
          </a> */}
                  </div>
                </div>

                <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-1">
                  An AI-powered scheduling engine that uses a Genetic Algorithm to automatically generate optimized, clash-free timetables.
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mt-4">
                  <div className="flex items-center gap-1.5 bg-white dark:bg-black text-black dark:text-white rounded px-2 py-1 text-xs border border-neutral-300 dark:border-neutral-700">
                    <FaReact className="text-sky-400" /> React
                  </div>
                  <div className="flex items-center gap-1.5 bg-white dark:bg-black text-black dark:text-white rounded px-2 py-1 text-xs border border-neutral-300 dark:border-neutral-700">
                    <FaNodeJs className="text-green-500" /> Node JS
                  </div>
                  <div className="flex items-center gap-1.5 bg-white dark:bg-black text-black dark:text-white rounded px-2 py-1 text-xs border border-neutral-300 dark:border-neutral-700">
                    <SiExpress className="text-neutral-600 dark:text-neutral-400" /> Express JS
                  </div>
                  <div className="flex items-center gap-1.5 bg-white dark:bg-black text-black dark:text-white rounded px-2 py-1 text-xs border border-neutral-300 dark:border-neutral-700">
                    <SiMongodb className="text-emerald-500" /> MongoDB
                  </div>
                  <div className="flex items-center gap-1.5 bg-white dark:bg-black text-black dark:text-white rounded px-2 py-1 text-xs border border-neutral-300 dark:border-neutral-700">
                    <FaPython className="text-blue-500" /> Python
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
        {/* Footer */}
        <div className="w-full text-center border-t border-neutral-300 dark:border-neutral-700 py-4 text-sm text-neutral-600 dark:text-neutral-400">
          <span className="font-semibold text-black dark:text-white">Made with ❤️ by Siva Kumar</span>
        </div>
      </div>

      {/* Bottom Navigation */}
      <BottomNav />
    </div>
  );
};

export default Connector;
