import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import GitHubCalendar from 'react-github-calendar';
import { useLocation } from 'react-router-dom';
import Marque from './Marque';
import Experience from './Experience';
import Projects from './Projects';
import { FaReact } from 'react-icons/fa';
import { SiTailwindcss } from 'react-icons/si';
import { BsGithub } from 'react-icons/bs';
import { FaLink } from 'react-icons/fa6';
import { Tilt } from "@/components/ui/Tilt";
import { SiLeetcode } from 'react-icons/si';

const Connector = () => {
  const location = useLocation();

  return (
    <div className="overflow-x-hidden bg-neutral-900 bg-no-repeat bg-center bg-fixed min-h-screen">
      <div className="px-4 sm:px-4 lg:px-4 mt-5 ">

        {/* Profile Section */}
        <div className="text-white  flex  font-roboto-mono m-auto rounded-xl p-6 sm:p-5 w-full max-w-4xl shadow-lg">
          <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-6">
            <img
              src="src/assets/mob.jpg"
              alt="Profile"
              className="w-24 h-24 object-cover rounded-xl shadow-md"
            />
            <div className="text-center sm:text-left">
              <h1 className="text-3xl sm:text-4xl font-semibold font-montserrat">
                Siva Kumar
              </h1>
              <p className="text-base font-lato mb-2 text-neutral-200">Software Engineer</p>
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
          </div>

        </div>
        <div className="text-neutral-200 space-y-2 flex  font-roboto-mono m-auto rounded-xl p-6 sm:p-5 w-full max-w-4xl shadow-lg">
          
          <div ><h1 className='text-xl font-lato sm:text-left  font-semibold text-center'>
            About Me.
          </h1>
          <p className='text-md text-neutral-300'>
            Hey! I'm Sivakumar, an undergraduate computer science student and full stack developer and loves to turn ideas into real.
          </p >
          <p className='text-md mt-2 text-neutral-300'>
            I primarily work with React, Node.js, and Express, Mongodb, PostgreSql but I’m flexible and quick to adapt to other technologies and stacks as needed.          </p>
          </div>
        </div>

        {/* Skills Section */}
        <div className="text-neutral-200 mx-auto w-full max-w-4xl rounded-xl p-6 sm:p-5">
          <h1 className="text-xl font-lato sm:text-left  font-semibold text-center">Skills & Tools</h1>
          <div className="mt-2">
            <Marque />
          </div>
        </div>
        {/* GitHub Activity */}
        <div className="text-neutral-200 font-roboto-mono mx-auto w-full max-w-4xl rounded-xl p-6 sm:p-5">
          <h1 className="text-xl font-lato sm:text-left font-semibold text-center">GitHub Activity</h1>
          <div className="mt-3">
            <div className="flex justify-center  sm:justify-start">
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

        {/* Projects */}
        <div className="text-white font-roboto-mono mx-auto w-full max-w-4xl rounded-xl p-6 sm:p-5">
          <h1 className="text-xl sm:text-xl  font-lato text-neutral-200 font-semibold sm:text-left text-center  mb-3">
            Proof of work
          </h1>

          <div className="space-y-5  ">
            <Tilt className="w-full ">
              <div className="border border-gray-600  rounded-xl flex flex-col justify-between p-6 h-full">
                <div className="flex justify-end gap-3 mb-4">
                  <a href="https://sivakumar232.github.io/BackdropUI/" target="_blank" rel="noopener noreferrer">
                    <FaLink className="text-2xl text-gray-200 hover:scale-110 transition" />
                  </a>
                  <a href="https://github.com/sivakumar232/BackdropUI" target="_blank" rel="noopener noreferrer">
                    <BsGithub className="text-2xl text-gray-200 hover:scale-110 transition" />
                  </a>
                </div>

                <div className="mb-4">
                  <h2 className="text-lg sm:text-xl font-semibold">BackdropUi</h2>
                  <p className="text-sm text-gray-200 mt-2">
                    Go-to place to find background gradients, ready to use in your projects, made with Tailwind.
                  </p>
                </div>

                <div className="flex gap-2">
                  <div className="flex items-center gap-1 bg-white text-black rounded px-2 py-1 text-xs">
                    <FaReact className="text-cyan-500" />
                    React
                  </div>
                  <div className="flex items-center gap-1 bg-white text-black rounded px-2 py-1 text-xs">
                    <SiTailwindcss className="text-cyan-600" />
                    Tailwind CSS
                  </div>
                </div>
              </div>
            </Tilt>
          </div>
        </div>

        {/* Experience */}
        {/* <div className="text-white font-roboto-mono mx-auto w-full max-w-4xl rounded-xl p-6 sm:p-4">
          <div>
            <h1 className='text-2xl sm:text-xl  text-center sm:text-left font=lato mb-4 '>Experience</h1>
            <ol className=" relative border-s border-white ">
              <li className="mb-12 ms-6">
                <time className="block mb-2 text-sm text-gray-400">june 2025</time>
                <h3 className="text-xl font-semibold text-white">Personal Projects</h3>
                <p className="mt-2 text-base text-gray-400">
                  Made some personal projects in part of my learning curve
                </p>
              </li>
            </ol>
            <ol className='relative border-s border-white'>
              <li className="mb-12 ms-6">
                <time className="block mb-2 text-sm text-gray-400">March 2025 - Present</time>
                <h3 className="text-xl font-semibold text-white">Open Source</h3>
                <p className="mt-2 text-base text-gray-400">
                  Contributing on open source
                </p>
              </li>

            </ol>
          </div>
        </div> */}

        {/* Footer Quote */}
        <div className="w-full  text-center py-4 mt-8 text-sm text-gray-400">
          <span className="font-semibold text-white">
             Made with ❤️ by Siva Kumar
          </span>
        </div>
      </div>
    </div>
  );
};

export default Connector;
