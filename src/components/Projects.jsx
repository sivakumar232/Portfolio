import React from 'react';
import { FaReact } from 'react-icons/fa';
import { SiTailwindcss } from 'react-icons/si';
import { BsGithub } from 'react-icons/bs';
import { FaLink } from 'react-icons/fa6';
import { Tilt } from "@/components/ui/Tilt";

const Projects = () => {
  return (
    <div className="relative w-full text-white font-roboto-mono px-4 sm:px-6 lg:px-8 pt-12">

      {/* Radial Background */}
      <div className="fixed top-0 left-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] pointer-events-none"></div>

      <h1 className="text-xl sm:text-xl lg:text-3xl font-bold text-center sm:text-left mb-8">
        Projects
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
              <div className="flex items-center gap-1 bg-slate-600 text-white rounded px-2 py-1 text-xs">
                <FaReact className="text-cyan-500" />
                React
              </div>
              <div className="flex items-center gap-1 bg-slate-600 text-white rounded px-2 py-1 text-xs">
                <SiTailwindcss />
                Tailwind CSS
              </div>
            </div>
          </div>
        </Tilt>
        <Tilt className="w-full sm:w-1/2">
          <div className="border border-gray-600 rounded-xl flex items-center justify-center p-6 text-center h-full min-h-[200px]">
          <p className="text-gray-200 text-sm sm:text-base">🚧 Coming Soon...</p>
        </div>
        </Tilt>
      </div>
    </div>
  );
};

export default Projects;
