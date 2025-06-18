import React from 'react';
import { FaLinkedin, FaGithub, FaReact } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";
import Experience from './Experience';
import { IoPinOutline } from 'react-icons/io5';
import { SiTailwindcss } from 'react-icons/si';
import Typewriter from 'typewriter-effect';
import Marque from './Marque';
import Projects from './Projects';
import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import Contact from './Contact';
import Navbar from './Navbar';
import { useState } from 'react';
import GitHubCalendar from 'react-github-calendar';

const Connector = () => {
  const location = useLocation();
  const [exp, setExp] = useState(location.pathname);
  const handlebtn = (path) => {
    setExp(path);
  };

  return (<><div className="overflow-x-hidden">
    {/* your entire app */}

    <Navbar />
    <div className="px-4 sm:px-6 lg:px-8">
      <div className='text-white flex relative top-20 justify-center font-roboto-mono m-auto border border-gray-600 rounded-xl p-8 sm:p-10 w-full max-w-4xl shadow-lg backdrop-blur-md'>
        <div className='flex flex-col sm:flex-row justify-between w-full'>

          <div>
            <h1 className='text-3xl sm:text-4xl font-semibold'>
              <Typewriter
                options={{
                  strings: ['Siva Kumar'],
                  autoStart: true,
                  loop: true,
                  cursor: '_',
                }}
              />
            </h1>
            <p className='flex text-gray-400 text-base mt-3'>
              <IoPinOutline className='relative top-[0.15rem] mr-1 text-lg' />
              Location
            </p>
            <p className='mt-3 text-base max-w-md'>
              Hello, I'm a web developer who loves technologies and trying learn what i like.
            </p>
            <button className='sm:mt-5  p-1 relative top-2 sm:top-0 sm:p-3 cursor-pointer bg-white tex-black rounded-xl text-black'>Resume</button>
          </div>

          <div className='flex space-x-6 items-start mt-6 sm:mt-0'>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className='text-2xl sm:text-3xl hover:text-slate-400 transition duration-300' />
            </a>
            <a href="https://github.com/sivakumar232" target="_blank" rel="noopener noreferrer">
              <FaGithub className='text-2xl sm:text-3xl hover:text-slate-400 transition duration-300' />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaXTwitter className='text-2xl sm:text-3xl hover:text-slate-400 transition duration-300' />
            </a>
          </div>

        </div>
      </div>
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
                colorScheme='dark'
                style={{
                  maxWidth: '100%',
                  fontSize: '13px'
                }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="text-white relative top-12 space-y-5 font-roboto-mono m-auto w-full max-w-4xl rounded-xl p-8 sm:p-10">
        <div className='flex space-x-5 bg-transparent justify-center m-auto p-4 rounded-xl'>
          <Link to="/projects">
            <h1 className={`border p-3 rounded-xl cursor-pointer w-full ${location.pathname === '/projects' ? 'bg-white text-black' : ''
              }`} onClick={() => handlebtn("/projects")}>Projects</h1>
          </Link>

          <Link to="/">
            <h1 className={`border p-3 rounded-xl cursor-pointer w-full ${location.pathname === '/' ? 'bg-white text-black' : ''
              }`} onClick={() => handlebtn("/")}>Experience</h1>
          </Link>

        </div>

        <Routes>
          <Route path="/" element={<Experience />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </div>
      <div className='text-white relative space-y-5 font-roboto-mono m-auto w-full max-w-4xl rounded-xl p-8 sm:p-10'>
        <h1 className="text-2xl font-semibold text-left">Contact Me</h1>

        <Contact />
      </div>

    </div>
  </div>
  </>

  );
};

export default Connector;