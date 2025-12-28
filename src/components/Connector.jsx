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
import { FaHtml5, FaCss3Alt, FaJs, FaGitAlt, FaJava, FaDocker, FaAws } from 'react-icons/fa';
import { SiPostman, SiVercel, SiTypescript, SiNextdotjs, SiFlutter, SiAndroid, SiNestjs, SiPostgresql, SiSupabase, SiPrisma, SiMysql, SiRedis, SiNginx } from 'react-icons/si';
import { VscGithubAction } from 'react-icons/vsc';
import BottomNav from './BottomNav';
import OnekoLoader from './Onekoloader';

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
    <div className="overflow-x-hidden bg-white dark:bg-black bg-no-repeat bg-center bg-fixed min-h-screen transition-colors duration-300">
      <div className="px-4 py-8 space-y-8 max-w-3xl mx-auto">
        {/* Profile Section */}
        <div className="scroll-fade-in text-black dark:text-white flex flex-col items-center sm:flex-row sm:items-start font-roboto-mono rounded-xl p-6 space-y-4 sm:space-y-0 sm:space-x-6">
          <img
            src={mobImage}
            alt="Profile"
            className="w-28 h-28 object-cover rounded-xl shadow-lg"
          />
          <div className="text-center sm:text-left">
            <h1 className="text-3xl sm:text-4xl font-semibold font-montserrat">Hi, I'm Siva Kumar</h1>
            <p className="text-base font-lato mb-2 text-neutral-700 dark:text-neutral-300">Web Developer</p>
            <div className="flex justify-center sm:justify-start items-center space-x-3 mt-1">
              <div className='border flex space-x-1 rounded-md px-2 py-1 border-black dark:border-white'>
                <span className='blink_me relative top-1.5'></span>
                <p className='text-xs text-black dark:text-white'>Available</p>
              </div>
              <div className='text-neutral-600 dark:text-neutral-400'>
                <p className='text-xs'>{`${hours % 12 === 0 ? 12 : String(hours % 12).padStart(2, '0')}:${String(minutes).padStart(2, '0')} ${ampm}`}</p>
              </div>
            </div>
          </div>
        </div>

        {/* About Section */}
        <div className="scroll-fade-in text-black dark:text-white flex flex-col font-roboto-mono rounded-xl p-6 space-y-4">
          <div>
            <h1 className="text-2xl font-lato font-semibold mb-2">About Me</h1>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
              Hey! I'm <span className='text-black dark:text-white font-semibold'>Sivakumar</span>, an undergraduate computer science student and <span className='text-black dark:text-white font-semibold'>a fullstack developer</span> who loves turning ideas into reality.
            </p>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed mt-2">
              I primarily work with <span className='text-black dark:text-white font-semibold'>React</span>, <span className='text-black dark:text-white font-semibold'>Node.js</span>, <span className='text-black dark:text-white font-semibold'>Express</span>, <span className='text-black dark:text-white font-semibold'>MongoDB</span>, and <span className='text-black dark:text-white font-semibold'>Tailwind</span>. I have experience with MySQL, but I'm flexible and quick to adapt to other technologies and stacks as needed.
            </p>
          </div>
          <div>
            <h1 className="text-2xl font-lato font-semibold mb-2">Hire Me</h1>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
              I'm currently <span className='text-black dark:text-white font-semibold'>available</span> for <span className='text-black dark:text-white font-semibold'>internships</span> and <span className='text-black dark:text-white font-semibold'>freelance</span> work—ready to jump in and bring my skills to your team.
            </p>
          </div>
        </div>

        {/* Projects Section */}
        <div className="scroll-fade-in text-black dark:text-white font-roboto-mono rounded-xl p-6">
          <h1 className="text-2xl font-lato font-semibold text-center sm:text-left mb-6">
            Projects
          </h1>

          {/* Grid container */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* Project 1: BackdropUi */}
            <div className="group bg-white dark:bg-neutral-900 border-2 border-neutral-200 dark:border-neutral-800 rounded-xl overflow-hidden transition-all duration-300 hover:border-neutral-400 dark:hover:border-neutral-600 hover:shadow-lg dark:hover:shadow-neutral-900/50">
              <div className="relative overflow-hidden">
                <img
                  src={Image1}
                  alt="Backdrop UI"
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-5">
                {/* Card Header with Title and Links */}
                <div className="flex justify-between items-start mb-3">
                  <h2 className="text-xl font-bold text-black dark:text-white font-lato">BackdropUi</h2>
                  <div className="flex gap-2">
                    <a
                      href="https://github.com/sivakumar232/BackdropUI"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors"
                      aria-label="View on GitHub"
                    >
                      <BsGithub className="text-lg text-neutral-700 dark:text-neutral-300" />
                    </a>
                    <a
                      href="https://sivakumar232.github.io/BackdropUI/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors"
                      aria-label="View live demo"
                    >
                      <FaLink className="text-lg text-neutral-700 dark:text-neutral-300" />
                    </a>
                  </div>
                </div>

                <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed mb-4">
                  Go-to place to find background gradients, ready to use in your projects, made with Tailwind.
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  <div className="flex items-center gap-1.5 bg-neutral-100 dark:bg-neutral-800 text-black dark:text-white rounded-md px-3 py-1.5 text-xs font-medium border border-neutral-200 dark:border-neutral-700">
                    <FaReact className="text-sky-500" /> React
                  </div>
                  <div className="flex items-center gap-1.5 bg-neutral-100 dark:bg-neutral-800 text-black dark:text-white rounded-md px-3 py-1.5 text-xs font-medium border border-neutral-200 dark:border-neutral-700">
                    <SiTailwindcss className="text-cyan-500" /> Tailwind
                  </div>
                </div>
              </div>
            </div>

            {/* Project 2: Sync AI */}
            <div className="group bg-white dark:bg-neutral-900 border-2 border-neutral-200 dark:border-neutral-800 rounded-xl overflow-hidden transition-all duration-300 hover:border-neutral-400 dark:hover:border-neutral-600 hover:shadow-lg dark:hover:shadow-neutral-900/50">
              <div className="relative overflow-hidden">
                <img
                  src={timetableimg}
                  alt="Sync AI"
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-5">
                {/* Card Header with Title and Links */}
                <div className="flex justify-between items-start mb-3">
                  <h2 className="text-xl font-bold text-black dark:text-white font-lato">Sync AI</h2>
                  <div className="flex gap-2">
                    <a
                      href="https://github.com/sivakumar232/timetable-frontend"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors"
                      aria-label="View on GitHub"
                    >
                      <BsGithub className="text-lg text-neutral-700 dark:text-neutral-300" />
                    </a>
                  </div>
                </div>

                <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed mb-4">
                  An AI-powered scheduling engine that uses a Genetic Algorithm to automatically generate optimized, clash-free timetables.
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  <div className="flex items-center gap-1.5 bg-neutral-100 dark:bg-neutral-800 text-black dark:text-white rounded-md px-3 py-1.5 text-xs font-medium border border-neutral-200 dark:border-neutral-700">
                    <FaReact className="text-sky-500" /> React
                  </div>
                  <div className="flex items-center gap-1.5 bg-neutral-100 dark:bg-neutral-800 text-black dark:text-white rounded-md px-3 py-1.5 text-xs font-medium border border-neutral-200 dark:border-neutral-700">
                    <FaNodeJs className="text-green-500" /> Node
                  </div>
                  <div className="flex items-center gap-1.5 bg-neutral-100 dark:bg-neutral-800 text-black dark:text-white rounded-md px-3 py-1.5 text-xs font-medium border border-neutral-200 dark:border-neutral-700">
                    <SiExpress className="text-neutral-600 dark:text-neutral-400" /> Express
                  </div>
                  <div className="flex items-center gap-1.5 bg-neutral-100 dark:bg-neutral-800 text-black dark:text-white rounded-md px-3 py-1.5 text-xs font-medium border border-neutral-200 dark:border-neutral-700">
                    <SiMongodb className="text-emerald-500" /> MongoDB
                  </div>
                  <div className="flex items-center gap-1.5 bg-neutral-100 dark:bg-neutral-800 text-black dark:text-white rounded-md px-3 py-1.5 text-xs font-medium border border-neutral-200 dark:border-neutral-700">
                    <FaPython className="text-blue-500" /> Python
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Skills Section */}
        <div className="scroll-fade-in text-black dark:text-white rounded-xl p-6">
          <h1 className="text-2xl font-lato font-semibold mb-6">Skills & Tools</h1>

          {/* Languages */}
          <div className="mb-6">
            <h3 className="text-sm font-semibold text-neutral-600 dark:text-neutral-400 mb-3">Languages</h3>
            <div className="flex flex-wrap items-center gap-2">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 shadow-sm text-sm font-semibold transition-all hover:shadow-md hover:-translate-y-0.5">
                <FaJava className="text-[#007396] text-base" />
                <span>Java</span>
              </div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 shadow-sm text-sm font-semibold transition-all hover:shadow-md hover:-translate-y-0.5">
                <SiTypescript className="text-[#3178C6] text-base" />
                <span>TypeScript</span>
              </div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 shadow-sm text-sm font-semibold transition-all hover:shadow-md hover:-translate-y-0.5">
                <FaJs className="text-[#F7DF1E] text-base" />
                <span>JavaScript</span>
              </div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 shadow-sm text-sm font-semibold transition-all hover:shadow-md hover:-translate-y-0.5">
                <FaPython className="text-[#3776AB] text-base" />
                <span>Python</span>
              </div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 shadow-sm text-sm font-semibold transition-all hover:shadow-md hover:-translate-y-0.5">
                <FaHtml5 className="text-[#E34F26] text-base" />
                <span>HTML</span>
              </div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 shadow-sm text-sm font-semibold transition-all hover:shadow-md hover:-translate-y-0.5">
                <FaCss3Alt className="text-[#1572B6] text-base" />
                <span>CSS</span>
              </div>
            </div>
          </div>

          {/* Frontend */}
          <div className="mb-6">
            <h3 className="text-sm font-semibold text-neutral-600 dark:text-neutral-400 mb-3">Frontend</h3>
            <div className="flex flex-wrap items-center gap-2">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 shadow-sm text-sm font-semibold transition-all hover:shadow-md hover:-translate-y-0.5">
                <FaReact className="text-[#61DAFB] text-base" />
                <span>React</span>
              </div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 shadow-sm text-sm font-semibold transition-all hover:shadow-md hover:-translate-y-0.5">
                <SiNextdotjs className="text-black dark:text-white text-base" />
                <span>Next.js</span>
              </div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 shadow-sm text-sm font-semibold transition-all hover:shadow-md hover:-translate-y-0.5">
                <SiAndroid className="text-[#3DDC84] text-base" />
                <span>Android</span>
              </div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 shadow-sm text-sm font-semibold transition-all hover:shadow-md hover:-translate-y-0.5">
                <SiTailwindcss className="text-[#38BDF8] text-base" />
                <span>Tailwind</span>
              </div>
            </div>
          </div>

          {/* Backend */}
          <div className="mb-6">
            <h3 className="text-sm font-semibold text-neutral-600 dark:text-neutral-400 mb-3">Backend</h3>
            <div className="flex flex-wrap items-center gap-2">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 shadow-sm text-sm font-semibold transition-all hover:shadow-md hover:-translate-y-0.5">
                <FaNodeJs className="text-[#339933] text-base" />
                <span>Node.js</span>
              </div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 shadow-sm text-sm font-semibold transition-all hover:shadow-md hover:-translate-y-0.5">
                <SiNestjs className="text-[#E0234E] text-base" />
                <span>NestJS</span>
              </div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 shadow-sm text-sm font-semibold transition-all hover:shadow-md hover:-translate-y-0.5">
                <SiExpress className="text-neutral-600 dark:text-white text-base" />
                <span>Express</span>
              </div>
            </div>
          </div>

          {/* Databases & ORM */}
          <div className="mb-6">
            <h3 className="text-sm font-semibold text-neutral-600 dark:text-neutral-400 mb-3">Databases & ORM</h3>
            <div className="flex flex-wrap items-center gap-2">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 shadow-sm text-sm font-semibold transition-all hover:shadow-md hover:-translate-y-0.5">
                <SiPostgresql className="text-[#4169E1] text-base" />
                <span>PostgreSQL</span>
              </div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 shadow-sm text-sm font-semibold transition-all hover:shadow-md hover:-translate-y-0.5">
                <SiMongodb className="text-[#47A248] text-base" />
                <span>MongoDB</span>
              </div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 shadow-sm text-sm font-semibold transition-all hover:shadow-md hover:-translate-y-0.5">
                <SiSupabase className="text-[#3ECF8E] text-base" />
                <span>Supabase</span>
              </div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 shadow-sm text-sm font-semibold transition-all hover:shadow-md hover:-translate-y-0.5">
                <SiPrisma className="text-[#2D3748] dark:text-white text-base" />
                <span>Prisma</span>
              </div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 shadow-sm text-sm font-semibold transition-all hover:shadow-md hover:-translate-y-0.5">
                <SiMysql className="text-[#4479A1] text-base" />
                <span>MySQL</span>
              </div>
            </div>
          </div>

          {/* DevOps & Cloud */}
          <div className="mb-6">
            <h3 className="text-sm font-semibold text-neutral-600 dark:text-neutral-400 mb-3">DevOps & Cloud</h3>
            <div className="flex flex-wrap items-center gap-2">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 shadow-sm text-sm font-semibold transition-all hover:shadow-md hover:-translate-y-0.5">
                <FaAws className="text-[#FF9900] text-base" />
                <span>AWS</span>
              </div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 shadow-sm text-sm font-semibold transition-all hover:shadow-md hover:-translate-y-0.5">
                <FaDocker className="text-[#2496ED] text-base" />
                <span>Docker</span>
              </div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 shadow-sm text-sm font-semibold transition-all hover:shadow-md hover:-translate-y-0.5">
                <SiRedis className="text-[#DC382D] text-base" />
                <span>Redis</span>
              </div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 shadow-sm text-sm font-semibold transition-all hover:shadow-md hover:-translate-y-0.5">
                <SiNginx className="text-[#009639] text-base" />
                <span>Nginx</span>
              </div>
            </div>
          </div>

          {/* Tools */}
          <div>
            <h3 className="text-sm font-semibold text-neutral-600 dark:text-neutral-400 mb-3">Tools</h3>
            <div className="flex flex-wrap items-center gap-2">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 shadow-sm text-sm font-semibold transition-all hover:shadow-md hover:-translate-y-0.5">
                <FaGitAlt className="text-[#F05032] text-base" />
                <span>Git</span>
              </div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 shadow-sm text-sm font-semibold transition-all hover:shadow-md hover:-translate-y-0.5">
                <FaGithub className="text-black dark:text-white text-base" />
                <span>GitHub</span>
              </div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 shadow-sm text-sm font-semibold transition-all hover:shadow-md hover:-translate-y-0.5">
                <SiPostman className="text-[#FF6C37] text-base" />
                <span>Postman</span>
              </div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 shadow-sm text-sm font-semibold transition-all hover:shadow-md hover:-translate-y-0.5">
                <VscGithubAction className="text-[#2088FF] text-base" />
                <span>GitHub Actions</span>
              </div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 shadow-sm text-sm font-semibold transition-all hover:shadow-md hover:-translate-y-0.5">
                <SiVercel className="text-black dark:text-white text-base" />
                <span>Vercel</span>
              </div>
            </div>
          </div>
        </div>

        {/* GitHub Activity */}
        <div className="scroll-fade-in text-black dark:text-white font-roboto-mono rounded-xl p-6">
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
            />
          </div>
        </div>

        {/* Contact Section */}
        <div className="scroll-fade-in text-black dark:text-white rounded-xl p-6">
          <h1 className="text-2xl font-lato font-semibold mb-6">Get In Touch</h1>

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
                <p className="text-sm font-medium">sivakumar232@example.com</p>
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
        <div className="w-full text-center border-t border-neutral-300 dark:border-neutral-700 py-4 text-sm text-neutral-600 dark:text-neutral-400">
          <span className="font-semibold text-black dark:text-white">Made with ❤️ by Siva Kumar</span>
        </div>
      </div>

      {/* Bottom Navigation */}
      <BottomNav />

      {/* Oneko Cat Animation */}
      <OnekoLoader />
    </div>
  );
};

export default Connector;
