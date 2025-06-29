import React from 'react';
import { FaReact } from 'react-icons/fa';
import { SiTailwindcss } from 'react-icons/si';
import { BsGithub } from 'react-icons/bs';
import { FaLink } from 'react-icons/fa6';
import { Tilt } from "@/components/ui/Tilt";

const Projects = () => {
  return (
    <div className="sm:p-4 relative sm:right-2 cursor-pointer">


      <h1 className="text-xl sm:text-xl lg:text-3xl font-orbitron font-bold text-center  mb-8">
        Proof of work
      </h1>

      <div className="flex flex-col sm:flex-row gap-6">
        
    
        <Tilt className="w-full sm:w-1/2">
          <div className="border border-gray-600 rounded-xl flex flex-col justify-between p-6 h-full">
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
        <Tilt className="w-full sm:w-1/2">
          <div className="border border-gray-600 rounded-xl flex items-center justify-center p-6 text-center h-full min-h-[200px] backdrop-blur-md bg-black/50">
            <p className="text-gray-200 text-sm sm:text-base">🚧 Coming Soon...</p>
          </div>
        </Tilt>

      </div>
    </div>
  );
};

export default Projects;
