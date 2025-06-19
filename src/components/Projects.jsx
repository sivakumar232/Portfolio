import React from 'react';
import { FaReact } from 'react-icons/fa';
import { SiTailwindcss } from 'react-icons/si';
import { BsGithub } from 'react-icons/bs';
import { FaSquareArrowUpRight } from 'react-icons/fa6';
import { FaLink } from 'react-icons/fa6';
const Projects = () => {
  return (
    <div className='text-white relative sm:right-6 space-y-5 font-roboto-mono m-auto sm:bottom-6 w-full max-w-4xl rounded-xl p-4 sm:p-6 lg:p-8'>
      <h1 className='text-xl sm:text-2xl lg:text-3xl font-bold text-center sm:text-left mb-4 sm:mb-6'>
        Projects
      </h1>

      <div className='relative w-full  h-64 sm:h-72 md:h-80 lg:h-90 border bg-stone-500 border-gray-600 rounded-xl overflow-hidden group'>


        <div className='flex gap-3 mt-1 m-auto justify-end w-full  sm:mt-1'>
          <button className=' text-white px-3 py-1.5  sm:px-4 sm:py-2 rounded-lg text-xs sm:text-sm font-medium transition-all duration-300 transform hover:scale-105'>
            <a href="https://sivakumar232.github.io/BackdropUI/"><FaLink className=' text-3xl text-black'/></a>
          </button>
          <button className=' hover:border-white text-gray-300 hover:text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg text-xs sm:text-sm font-medium transition-all duration-300'>
            <a href="https://github.com/sivakumar232/BackdropUI"><BsGithub className='text-black text-3xl'/></a>
          </button>
        </div>
        <div className='relative z-20 p-4 sm:p-6 lg:p-8 flex flex-col  h-full'>



          {/* Project Info */}
          <div className='space-y-1  sm:space-y-2'>
            <h2 className='text-lg sm:text-xl lg:text-2xl font-semibold text-white'>
              BackdropUi
            </h2>
            <p className='text-xs sm:text-sm lg:text-base text-gray-300 leading-relaxed max-w-md'>
              Go-to place to find background gradients
            </p>


            <div className='flex relative top-8 xs:flex-row gap-2   mb-3 sm:mb-4'>
              <div className='flex items-center space-x-2 scale-60 sm:scale-80 bg-white text-black rounded-lg px-3 py-2 transition-all duration-300 transform hover:scale-105 w-fit'>
                <FaReact className='text-lg text-cyan-500 sm:text-xl' />
                <span className='text-sm  sm:text-base font-medium'>React</span>
              </div>
              <div className='flex items-center space-x-2 scale-60 sm:scale-80 bg-slate-600 hover:bg-slate-700 rounded-lg px-3 py-2 transition-all duration-300 transform hover:scale-105 w-fit'>
                <SiTailwindcss className='text-lg sm:text-xl' />
                <span className='text-sm sm:text-base font-medium'>Tailwind CSS</span>
              </div>
            </div>
          </div>
        </div>
      </div>


    </div>
  );
};

export default Projects;