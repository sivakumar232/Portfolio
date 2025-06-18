import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { IoPinOutline } from 'react-icons/io5';
import Typewriter from 'typewriter-effect';

const About = () => {
  return (
    <div className="text-white font-roboto-mono px-4 flex flex-col items-center">

      {/* Top Profile Card */}
      <div className="mt-20 border border-gray-600 rounded-md p-6 w-full max-w-2xl">
        <div className="flex flex-col md:flex-row justify-between gap-4">
          <div>
            <h1 className="text-2xl">
              <Typewriter
                options={{
                  strings: ['Siva Kumar'],
                  autoStart: true,
                  loop: true,
                  cursor: '_',
                }}
              />
            </h1>
            <p className="flex text-gray-400 text-sm font-ubuntu mt-1">
              <IoPinOutline className="relative top-1 text-base mr-1" />
              Location
            </p>
            <p className="mt-2 text-sm">Description....</p>
          </div>
          <div className="flex space-x-5 items-start">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-xl hover:text-slate-400 transition duration-300" />
            </a>
            <a href="https://github.com/sivakumar232" target="_blank" rel="noopener noreferrer">
              <FaGithub className="text-xl hover:text-slate-400 transition duration-300" />
            </a>
          </div>
        </div>
      </div>

      {/* Experience Card */}
      <div className="mt-1  rounded-md p-6 w-full max-w-2xl">
        <h1 className="text-xl font-semibold text-center mb-6">Experience</h1>
        <ol className="relative border-s border-gray-200 dark:border-gray-700">
          <li className="mb-10 ms-4">
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                        <time className="mb-1 text-xs font-normal leading-none text-gray-400 dark:text-gray-500">February 2022</time>
            <h3 className="text-l font-semibold text-white">Experience-1</h3>
            <p className="mb-4 text-s font-normal text-gray-400">
              Description of Experience
            </p>

          </li>

          <li className="mb-10 ms-4">
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time className="mb-1 text-xs font-normal leading-none text-gray-400 dark:text-gray-500">March 2022</time>
            <h3 className="text-l font-semibold text-white">Experince-2</h3>
            <p className="text-s font-normal text-gray-400">
              Description of Experience 2
            </p>
          </li>

          <li className="ms-4">
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time className="mb-1 text-xs font-normal leading-none text-gray-400 dark:text-gray-500">April 2022</time>
            <h3 className="text-l font-semibold text-white">Experience-3</h3>
            <p className="text- font-normal text-gray-400">
              Description of Experince 3
            </p>
          </li>
        </ol>
      </div>

      <div className="mt-10 w-full max-w-2xl  rounded-md p-6">
        <h1 className="text-xl font-semibold text-center">Education</h1>
        <h1>Education.. goes here</h1>
      </div>
    </div>
  );
};

export default About;
