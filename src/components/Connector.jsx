import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import GitHubCalendar from 'react-github-calendar';
import { useLocation } from 'react-router-dom';
import Marque from './Marque';
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
import { FlaskConical } from 'lucide-react';

const Connector = () => {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const timerId = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timerId);
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
    <div className="overflow-x-hidden bg-neutral-900 bg-no-repeat bg-center bg-fixed min-h-screen">

      <div className="px-4 mt-5 space-y-6">
        {/* Profile Section */}
        <div className="text-white  flex flex-col items-center sm:flex-row sm:items-start font-roboto-mono m-auto rounded-xl p-6 w-full max-w-4xl   space-y-4 sm:space-y-0 sm:space-x-6">
          <img
            src={mobImage}
            alt="Profile"
            className="w-28 h-28 object-cover rounded-xl shadow-lg"
          />
          <div className="text-center sm:text-left">
            <h1 className="text-3xl sm:text-4xl font-semibold font-montserrat">Siva Kumar</h1>
            <p className="text-base font-lato mb-2 text-neutral-200">Web Developer</p>
            <div className="flex justify-center sm:justify-start space-x-4 mt-1">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="text-2xl hover:scale-110 hover:text-slate-400 transition duration-300" />
              </a>
              <a href="https://github.com/sivakumar232" target="_blank" rel="noopener noreferrer">
                <FaGithub className="text-2xl hover:scale-110 hover:text-slate-400 transition duration-300" />
              </a>
              <a href="https://twitter.com/sivakumarr3105" target="_blank" rel="noopener noreferrer">
                <FaXTwitter className="text-2xl hover:scale-110 hover:text-slate-400 transition duration-300" />
              </a>
              <a href="https://leetcode.com/sivakumarrrrrr2005" target="_blank" rel="noopener noreferrer">
                <SiLeetcode className="text-2xl hover:scale-110 hover:text-slate-400 transition duration-300" />
              </a>
            </div>
          </div>
          <div className='border flex relative space-x-1 top-2 rounded-md p-1 border-green-400 text-monospace'>
            <span className='blink_me relative top-1.5'></span><p className='text-xs text-green-400'>Available</p>
          </div>
          <div className='text-neutral-400 fixed top-5 left-2'>
            <p>{`${hours % 12 === 0 ? 12 : String(hours % 12).padStart(2, '0')}:${String(minutes).padStart(2, '0')} ${ampm}`}</p>
          </div>
          <div className='text-neutral-400 fixed top-5 right-2'>
          </div>
        </div>

        {/* About Section */}
        <div className="text-neutral-200 flex flex-col font-roboto-mono m-auto rounded-xl p-6 w-full max-w-4xl  space-y-2">
          <h1 className="text-2xl font-lato font-semibold text-left">About Me.</h1>
          <p className="text-s text-slate-400 text-left">
            Hey! I'm <span className='text-white'>Sivakumar</span>, an undergraduate computerscience student and <span className='text-white'>a fullstack developer</span> who loves turning ideas into reality.
          </p>
          <p className="text-s text-slate-400 text-left"><span className='text-white'></span>
            I primarily work with <span className='text-white'>React</span>, <span className='text-white'>Node.js</span>, <span className='text-white'>Express</span>, <span className='text-white'>MomgoDb</span>, and <span className='text-white'>Tailwind</span>. I have experience with MySql, but I’m flexible and quick to adapt to other technologies and stacks as needed.
          </p>
          <h1 className="text-2xl font-lato font-semibold text-left">Hire Me.</h1>
          <p className="text-s text-slate-400 text-left">
            I’m currently <span className='text-white'>available</span> for <span className='text-white'>internships</span> and <span className='text-white'>freelance</span> work—ready to jump in and bring my skills to your team.
          </p>
        </div>

        {/* Skills Section */}
        <div className="text-neutral-200 w-full max-w-4xl mx-auto rounded-xl p-6">
          <h1 className="text-2xl font-lato font-semibold text-center sm:text-left">Skills & Tools</h1>
          <div className="mt-2">
            <Marque />
          </div>
        </div>

        {/* GitHub Activity */}
        <div className="text-neutral-200 font-roboto-mono w-full max-w-4xl mx-auto rounded-xl p-6 ">
          <h1 className="text-2xl font-lato font-semibold text-center sm:text-left">GitHub Activity</h1>
          <div className="mt-3 flex justify-center sm:justify-start">
            <GitHubCalendar
              username="sivakumar232"
              blockSize={12}
              blockMargin={3}
              fontSize={14}
              weeks={20}
              colorScheme="dark"
              style={{ maxWidth: '100%' }}
            />
          </div>
        </div>

        {/* Projects Section */}
       {/* --- Projects Section --- */}
{/* Projects Section */}
<div className="text-white font-roboto-mono w-full max-w-4xl mx-auto p-6">
  <h1 className="text-2xl text-neutral-200 font-lato font-semibold text-center sm:text-left mb-6">
    Projects
  </h1>

  {/* Grid container */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

    {/* Project 1: BackdropUi */}
    <div className="bg-neutral-800 border border-neutral-700 rounded-lg  transition-all duration-200 hover:shadow-[6px_6px_0px_rgba(110,110,110,0.2)] hover:-translate-y-1">
      <div>
        <img
          src={Image1}
          alt="Backdrop UI"
          className="w-full h-48 object-cover rounded-t-lg"
        />
      </div>
      <div className="p-4">
        <h2 className="text-lg font-bold text-neutral-100">BackdropUi</h2>
        <p className="text-sm text-neutral-400 mt-1">
          Go-to place to find background gradients, ready to use in your projects, made with Tailwind.
        </p>
        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mt-4">
          <div className="flex items-center gap-1.5 bg-neutral-900 text-white rounded px-2 py-1 text-xs border border-neutral-700">
            <FaReact className="text-sky-400" /> React
          </div>
          <div className="flex items-center gap-1.5 bg-neutral-900 text-white rounded px-2 py-1 text-xs border border-neutral-700">
            <SiTailwindcss className="text-cyan-600" /> Tailwind CSS
          </div>
        </div>
      </div>
    </div>

    {/* Project 2: Sync AI */}
    <div className="bg-neutral-800 border border-neutral-700 rounded-lg  transition-all duration-200 hover:shadow-[6px_6px_0px_rgba(110,110,110,0.2)] hover:-translate-y-1">
      <div>
        <img
          src={timetableimg}
          alt="Sync AI"
          className="w-full h-48 object-cover rounded-t-lg"
        />
      </div>
      <div className="p-4">
        <h2 className="text-lg font-bold text-neutral-100">Sync AI</h2>
        <p className="text-sm text-neutral-400 mt-1">
          An AI-powered scheduling engine that uses a Genetic Algorithm to automatically generate optimized, clash-free timetables.
        </p>
        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mt-4">
          <div className="flex items-center gap-1.5 bg-neutral-900 text-white rounded px-2 py-1 text-xs border border-neutral-700">
            <FaReact className="text-sky-400" /> React
          </div>
          <div className="flex items-center gap-1.5 bg-neutral-900 text-white rounded px-2 py-1 text-xs border border-neutral-700">
            <FaNodeJs className="text-green-500" /> Node JS
          </div>
          <div className="flex items-center gap-1.5 bg-neutral-900 text-white rounded px-2 py-1 text-xs border border-neutral-700">
            <SiExpress className="text-gray-200" /> Express JS
          </div>
          <div className="flex items-center gap-1.5 bg-neutral-900 text-white rounded px-2 py-1 text-xs border border-neutral-700">
            <SiMongodb className="text-emerald-500" /> MongoDB
          </div>
          <div className="flex items-center gap-1.5 bg-neutral-900 text-white rounded px-2 py-1 text-xs border border-neutral-700">
            <FaPython className="text-blue-500" /> Python
          </div>
        </div>
      </div>
    </div>

  </div>
</div>
        {/* Footer */}
        <div className="w-full text-center border-t py-4 text-sm text-gray-400">
          <span className="font-semibold text-white">Made with ❤️ by Siva Kumar</span>
        </div>
      </div>
    </div>
  );
};

export default Connector;
