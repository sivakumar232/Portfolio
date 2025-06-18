import React from 'react';
import { FaLinkedin, FaGithub, FaReact } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";

import { IoPinOutline } from 'react-icons/io5';
import { SiTailwindcss } from 'react-icons/si';
import Typewriter from 'typewriter-effect';
import Marque from './Marque';
import Myimage from '../assets/image.png'

const Connector = () => {
  return (
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
              Description goes here..
            </p>
          </div>

          <div className='flex space-x-6 items-start mt-6 sm:mt-0'>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className='text-2xl sm:text-3xl hover:text-slate-400 transition duration-300' />
            </a>
            <a href="https://github.com/sivakumar232" target="_blank" rel="noopener noreferrer">
              <FaGithub className='text-2xl sm:text-3xl hover:text-slate-400 transition duration-300' />
            </a>
                        <a href="https://github.com/sivakumar232" target="_blank" rel="noopener noreferrer">
              <FaXTwitter className='text-2xl sm:text-3xl hover:text-slate-400 transition duration-300' />
            </a>
          </div>

        </div>
      </div>

      <div className='text-white relative top-24 font-roboto-mono m-auto w-full max-w-4xl rounded-xl p-8 sm:p-10'>
        <h1 className='text-2xl sm:text-3xl font-bold text-center sm:text-left'>What I work with</h1>
        <div className='relative mt-5'>
          <Marque />
        </div>
      </div>

      <div className="text-white relative top-28 font-roboto-mono m-auto w-full max-w-4xl rounded-xl p-8 sm:p-10">
        <h1 className="text-2xl sm:text-3xl sm:text-left font-bold text-center mb-10">Experience</h1>

        <ol className="relative border-s border-gray-500">
          <li className="mb-12 ms-6">
            <div className="absolute w-4 h-4 bg-gray-300 rounded-full mt-1.5 -start-2 border-2 border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time className="block mb-2 text-sm text-gray-400">February 2022</time>
            <h3 className="text-xl font-semibold text-white">Experience 1</h3>
            <p className="mt-2 text-base text-gray-400">
              Description of Experience 1. Highlight key contributions, technologies used, or impact.
            </p>
          </li>

          <li className="mb-12 ms-6">
            <div className="absolute w-4 h-4 bg-gray-300 rounded-full mt-1.5 -start-2 border-2 border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time className="block mb-2 text-sm text-gray-400">March 2022</time>
            <h3 className="text-xl font-semibold text-white">Experience 2</h3>
            <p className="mt-2 text-base text-gray-400">
              Description of Experience 2. Focus on learnings, growth, or specific achievements.
            </p>
          </li>

          <li className="ms-6">
            <div className="absolute w-4 h-4 bg-gray-300 rounded-full mt-1.5 -start-2 border-2 border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time className="block mb-2 text-sm text-gray-400">April 2022</time>
            <h3 className="text-xl font-semibold text-white">Experience 3</h3>
            <p className="mt-2 text-base text-gray-400">
              Description of Experience 3. Summary of your responsibilities or technical skills practiced.
            </p>
          </li>
        </ol>
      </div>

      <div className='text-white relative space-y-5 top-28 font-roboto-mono m-auto w-full max-w-4xl rounded-xl p-8 sm:p-10'>
  <h1 className='text-2xl sm:text-3xl font-bold text-center sm:text-left'>Projects</h1>

  <div className='relative w-full h-120 border rounded-xl overflow-hidden'>

    <div
      className="absolute inset-0 z-0 bg-cover bg-center"
      style={{
        backgroundImage: `url(${Myimage})`,
      }}
    />

    <div className="absolute inset-0 bg-black/60 z-10 transition-all duration-300 hover:bg-black/40" />

    <div className='relative z-20 p-8 flex flex-col justify-end h-full'>
      <div className='flex space-x-3 mb-3'>
        <div className='flex space-x-2 bg-slate-800 rounded p-2 hover:bg-slate-700 transition'>
          <FaReact className='text-2xl' /><h1>React</h1>
        </div>
        <div className='flex space-x-2 bg-slate-800 rounded p-2 hover:bg-slate-700 transition'>
          <SiTailwindcss className='text-2xl' /><h1>Tailwindcss</h1>
        </div>
      </div>
      <h1 className='text-lg font-semibold'>Awesome Project Title</h1>
      <p className='text-sm text-gray-300'>Project description. Highlight the purpose or what it does.</p>
    </div>

  </div>
  <div className='relative w-full h-120 border rounded-xl overflow-hidden'>

    <div
      className="absolute inset-0 z-0 bg-cover bg-center"
      style={{
        backgroundImage: `url(${Myimage})`,
      }}
    />

    <div className="absolute inset-0 bg-black/60 z-10 transition-all duration-300 hover:bg-black/40" />

    <div className='relative z-20 p-8 flex flex-col justify-end h-full'>
      <div className='flex space-x-3 mb-3'>
        <div className='flex space-x-2 bg-slate-800 rounded p-2 hover:bg-slate-700 transition'>
          <FaReact className='text-2xl' /><h1>React</h1>
        </div>
        <div className='flex space-x-2 bg-slate-800 rounded p-2 hover:bg-slate-700 transition'>
          <SiTailwindcss className='text-2xl' /><h1>Tailwindcss</h1>
        </div>
      </div>
      <h1 className='text-lg font-semibold'>Awesome Project Title</h1>
      <p className='text-sm text-gray-300'>Project description. Highlight the purpose or what it does.</p>
    </div>

  </div>
</div>
    </div>
  );
};

export default Connector;
