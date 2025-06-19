'use client';
import React, { useState } from 'react';
import { FaLinkedin, FaGithub, FaReact } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { IoPinOutline } from 'react-icons/io5';
import { SiTailwindcss } from 'react-icons/si';
import Typewriter from 'typewriter-effect';
import GitHubCalendar from 'react-github-calendar';
import { ScrollProgress } from './Component/scroll-progress';
import { Spotlight } from './ui/Spotlight';
import Marque from './Marque';
import Experience from './Experience';
import Projects from './Projects';
import Contact from './Contact';
import { useLocation } from 'react-router-dom';

const Connector = () => {
  const location = useLocation();
  const [exp, setExp] = useState(location.pathname);

  const handlebtn = (path) => {
    setExp(path);
  };

  return (
    <>
      {/* ✅ Scroll progress bar tracking window */}
      <ScrollProgress
        className="fixed top-0 left-0 h-0.5 w-full bg-[linear-gradient(to_right,rgba(0,0,0,0),#111_75%,#111_100%)] dark:bg-[linear-gradient(to_right,rgba(255,255,255,0),#fff_75%,#fff_100%)] z-50"
        springOptions={{
          stiffness: 300,
          damping: 20,
          mass: 0.8,
        }}
      />

      {/* Main content */}
      <div className="overflow-x-hidden">
        <div className="px-4 sm:px-6 lg:px-8">

          {/* 🟣 Spotlight Profile Card */}
          <div className="text-white flex relative top-20 justify-center font-roboto-mono m-auto border border-gray-600 rounded-xl p-8 sm:p-10 w-full max-w-4xl shadow-lg backdrop-blur-md bg-black overflow-hidden">
            <div className="flex flex-col sm:flex-row justify-between w-full relative">
              <Spotlight size={300} />

              {/* Left */}
              <div>
                <h1 className="text-3xl sm:text-4xl font-semibold">
                  <Typewriter
                    options={{
                      strings: ['Siva Kumar'],
                      autoStart: true,
                      loop: true,
                      cursor: '_',
                    }}
                  />
                </h1>
                <p className="flex text-gray-400 text-base mt-3">
                  <IoPinOutline className="relative top-[0.15rem] mr-1 text-lg" />
                  Location
                </p>
                <p className="mt-3 text-base max-w-md">
                  Hello, I'm a web developer who loves technologies and trying to learn what I like.
                </p>
                <button className="sm:mt-5 p-1 relative top-2 sm:top-0 sm:p-3 cursor-pointer bg-white text-black rounded-xl">
                  Resume
                </button>
              </div>

              {/* Social Links */}
              <div className="flex space-x-6 items-start mt-6 sm:mt-0">
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin className="text-2xl sm:text-3xl hover:text-slate-400 transition duration-300" />
                </a>
                <a href="https://github.com/sivakumar232" target="_blank" rel="noopener noreferrer">
                  <FaGithub className="text-2xl sm:text-3xl hover:text-slate-400 transition duration-300" />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                  <FaXTwitter className="text-2xl sm:text-3xl hover:text-slate-400 transition duration-300" />
                </a>
              </div>
            </div>
          </div>

          {/* ⚙️ Tech & GitHub */}
          <div className="text-white relative top-20 font-roboto-mono mx-auto w-full max-w-4xl rounded-xl p-8 sm:p-10 overflow-hidden">
            <h1 className="text-2xl sm:text-3xl font-bold text-center sm:text-left">
              What I work with
            </h1>

            <div className="relative mt-5">
              <Marque />
            </div>

            <div className="mt-10 w-full">
              <div className="w-full overflow-hidden">
                <div className="flex justify-center sm:justify-start">
                  <GitHubCalendar
                    username="sivakumar232"
                    blockSize={12}
                    blockMargin={3}
                    fontSize={14}
                    weeks={20}
                    colorScheme="dark"
                    style={{
                      maxWidth: '100%',
                      fontSize: '13px',
                    }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* 🧪 Experience & Projects */}
          <div className="text-white relative top-12 font-roboto-mono m-auto w-full max-w-4xl rounded-xl p-8 sm:p-8">
            <Experience />
            <Projects />
          </div>

          {/* 📬 Contact */}
          <div className="text-white relative space-y-5 font-roboto-mono m-auto w-full max-w-4xl rounded-xl p-8 sm:p-10">
            <h1 className="text-2xl font-semibold text-left">Contact Me</h1>
            <Contact />
          </div>
        </div>
      </div>

      {/* Footer */}
      <br />
      <footer className="w-full text-center py-4 border-t mt-10">
        <p className="text-sm text-gray-600">
          Made with <span className="text-red-500">❤️</span> by Your Name
        </p>
      </footer>
    </>
  );
};

export default Connector;
