import React from 'react';
import Myimage from '../assets/image.png'
import { FaReact } from 'react-icons/fa';
import { SiTailwindcss } from 'react-icons/si';

const Projects = () => {
  return (
    <div className='text-white relative space-y-5 font-roboto-mono m-auto w-full max-w-4xl rounded-xl p-4 sm:p-6 lg:p-8'>
      <h1 className='text-xl sm:text-2xl lg:text-3xl font-bold text-center sm:text-left mb-4 sm:mb-6'>
        Projects
      </h1>

      <div className='relative w-full h-64 sm:h-72 md:h-80 lg:h-96 border border-gray-600 rounded-xl overflow-hidden group'>
        {/* Background Image */}
        <div
          className="absolute inset-0 z-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
          style={{
            backgroundImage: `url(${Myimage})`,
          }}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent z-10 transition-all duration-300 group-hover:from-black/70" />

        {/* Content */}
        <div className='relative z-20 p-4 sm:p-6 lg:p-8 flex flex-col justify-end h-full'>
          {/* Tech Stack Tags */}
          <div className='flex flex-col xs:flex-row gap-2 sm:gap-3 mb-3 sm:mb-4'>
            <div className='flex items-center space-x-2 bg-slate-600 hover:bg-slate-700 rounded-lg px-3 py-2 transition-all duration-300 transform hover:scale-105 w-fit'>
              <FaReact className='text-lg sm:text-xl' />
              <span className='text-sm sm:text-base font-medium'>React</span>
            </div>
            <div className='flex items-center space-x-2 bg-slate-600 hover:bg-slate-700 rounded-lg px-3 py-2 transition-all duration-300 transform hover:scale-105 w-fit'>
              <SiTailwindcss className='text-lg sm:text-xl' />
              <span className='text-sm sm:text-base font-medium'>Tailwind CSS</span>
            </div>
          </div>

          {/* Project Info */}
          <div className='space-y-1 sm:space-y-2'>
            <h2 className='text-lg sm:text-xl lg:text-2xl font-semibold text-white'>
              BackdropUi
            </h2>
            <p className='text-xs sm:text-sm lg:text-base text-gray-300 leading-relaxed max-w-md'>
              Go-to place to find background gradients
            </p>
            
            <div className='flex gap-3 mt-3 sm:mt-4'>
              <button className='bg-blue-500 hover:bg-blue-600 text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg text-xs sm:text-sm font-medium transition-all duration-300 transform hover:scale-105'>
                <a href="https://sivakumar232.github.io/BackdropUI/">Live Demo</a>
              </button>
              <button className='border border-gray-400 hover:border-white text-gray-300 hover:text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg text-xs sm:text-sm font-medium transition-all duration-300'>
               <a href="https://github.com/sivakumar232/BackdropUI">View Code</a> 
              </button>
            </div>
          </div>
        </div>
      </div>


    </div>
  );
};

export default Projects;