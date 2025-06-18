import React from 'react';
import Myimage from '../assets/image.png'
import { FaReact } from 'react-icons/fa';
import { SiTailwindcss } from 'react-icons/si';
const Projects = () => {
  return (
    
    <div className='text-white relative space-y-5   font-roboto-mono m-auto w-full max-w-4xl rounded-xl p-8 sm:p-4'>
  <h1 className='text-2xl sm:text-3xl font-bold text-center sm:text-left'>Projects</h1>

  <div className='relative w-full  h-80 border rounded-xl overflow-hidden'>

    <div
      className="absolute inset-0 z-0 bg-cover bg-center"
      style={{
        backgroundImage: `url(${Myimage})`,
      }}
    />

    <div className="absolute inset-0 bg-black/60 z-10 transition-all duration-300 hover:bg-black/40" />

    <div className='relative z-20 p-8 flex flex-col justify-end h-full'>
      <div className='md:flex sm:flex space-x-3 mb-3'>
        <div className='flex space-x-2 bg-slate-800 rounded p-2 hover:bg-slate-700 transition'>
          <FaReact className='text-2xl' /><h1>React</h1>
        </div>
        <div className='flex space-x-2 bg-slate-800 rounded p-2 hover:bg-slate-700 transition'>
          <SiTailwindcss className='text-2xl' /><h1>Tailwindcss</h1>
        </div>
      </div>
      <h1 className='text-lg font-semibold'>BackdropUi</h1>
      <p className='text-sm text-gray-300'>Go-to place to find background gradients</p>
    </div>

  </div>
 
</div>
  );
};

export default Projects;
