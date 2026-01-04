import React from 'react';
import { BsGithub } from 'react-icons/bs';
import { FaLink } from 'react-icons/fa6';
import Image1 from '../assets/image.png';
import timetableimg from '../assets/timtable.png';
import whoamiBanner from '../assets/whoami_full.jpg';
import bushidoBanner from '../assets/bushido_full.png';

const Projects = () => {
  return (
    <div id="projects" className="text-black dark:text-white rounded-xl px-6 py-4">
      <h1 className="text-sm font-hanken font-semibold text-neutral-400 ">Featured</h1>
      <h1 className="text-2xl font-hanken font-semibold mb-6">Projects</h1>

      <div className="space-y-6">
        {/* Project: Dynamic Portfolio Builder (whoami-core) */}
        <div className="group bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded overflow-hidden hover:border-neutral-400 dark:hover:border-neutral-600 transition-all relative">
          {/* Corner Accents - Permanent */}
          <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-neutral-400 dark:border-neutral-500"></div>
          <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-neutral-400 dark:border-neutral-500"></div>
          <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-neutral-400 dark:border-neutral-500"></div>
          <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-neutral-400 dark:border-neutral-500"></div>
          <div className="flex flex-col md:flex-row">
            <div className="md:w-2/5 overflow-hidden bg-neutral-100 dark:bg-neutral-800">
              <img src={whoamiBanner} alt="whoami" className="w-full h-full object-cover" loading="lazy" />
            </div>
            <div className="md:w-3/5 p-6 flex flex-col">
              <div className="flex items-start justify-between mb-3">
                <h2 className="text-xl font-bold text-black dark:text-white">whoami</h2>
                <div className="flex gap-2">
                  <a href="https://github.com/sivakumar232/whoami-core" target="_blank" rel="noopener noreferrer" className="p-1.5 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded transition-colors" title="GitHub">
                    <BsGithub className="text-base text-neutral-600 dark:text-neutral-400" />
                  </a>
                </div>
              </div>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4">
                A multi-user portfolio platform featuring Clerk authentication, dynamic username routing, and ownership detection. Built for scalability.
              </p>
              <div className="flex flex-wrap gap-2 mt-auto">
                <span className="px-3 py-1 text-xs bg-neutral-100 dark:bg-neutral-800 rounded-full">Next.js</span>
                <span className="px-3 py-1 text-xs bg-neutral-100 dark:bg-neutral-800 rounded-full">Clerk</span>
                <span className="px-3 py-1 text-xs bg-neutral-100 dark:bg-neutral-800 rounded-full">Prisma</span>
                <span className="px-3 py-1 text-xs bg-neutral-100 dark:bg-neutral-800 rounded-full">PostgreSQL</span>
              </div>
            </div>
          </div>
        </div>

        {/* Project 1: Bushido Quotes */}
        <div className="group bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded overflow-hidden hover:border-neutral-400 dark:hover:border-neutral-600 transition-all relative">
          {/* Corner Accents - Permanent */}
          <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-neutral-400 dark:border-neutral-500"></div>
          <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-neutral-400 dark:border-neutral-500"></div>
          <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-neutral-400 dark:border-neutral-500"></div>
          <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-neutral-400 dark:border-neutral-500"></div>
          <div className="flex flex-col md:flex-row">
            <div className="md:w-2/5 overflow-hidden bg-neutral-100 dark:bg-neutral-800">
              <img src={bushidoBanner} alt="Bushido Quotes" className="w-full h-full object-cover" loading="lazy" />
            </div>
            <div className="md:w-3/5 p-6 flex flex-col">
              <div className="flex items-start justify-between mb-3">
                <h2 className="text-xl font-bold text-black dark:text-white">Bushido Quotes</h2>
                <div className="flex gap-2">
                  <a href="https://bushido-zeta.vercel.app/" target="_blank" rel="noopener noreferrer" className="p-1.5 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded transition-colors" title="Live">
                    <FaLink className="text-base text-neutral-600 dark:text-neutral-400" />
                  </a>
                  <a href="https://github.com/sivakumar232/Bushido" target="_blank" rel="noopener noreferrer" className="p-1.5 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded transition-colors" title="GitHub">
                    <BsGithub className="text-base text-neutral-600 dark:text-neutral-400" />
                  </a>
                </div>
              </div>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4">
                A quotes API featuring wisdom from Bushido philosophy. Supports JSON and SVG embeds for easy integration.
              </p>
              <div className="flex flex-wrap gap-2 mt-auto">
                <span className="px-3 py-1 text-xs bg-neutral-100 dark:bg-neutral-800 rounded-full">React</span>
                <span className="px-3 py-1 text-xs bg-neutral-100 dark:bg-neutral-800 rounded-full">Node.js</span>
                <span className="px-3 py-1 text-xs bg-neutral-100 dark:bg-neutral-800 rounded-full">Vercel</span>
              </div>
            </div>
          </div>
        </div>

        {/* Project 2: BackdropUi */}
        <div className="group bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded overflow-hidden hover:border-neutral-400 dark:hover:border-neutral-600 transition-all relative">
          {/* Corner Accents - Permanent */}
          <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-neutral-400 dark:border-neutral-500"></div>
          <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-neutral-400 dark:border-neutral-500"></div>
          <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-neutral-400 dark:border-neutral-500"></div>
          <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-neutral-400 dark:border-neutral-500"></div>
          <div className="flex flex-col md:flex-row">
            <div className="md:w-2/5 overflow-hidden bg-neutral-100 dark:bg-neutral-800">
              <img src={Image1} alt="BackdropUi" className="w-full h-full object-cover" loading="lazy" />
            </div>
            <div className="md:w-3/5 p-6 flex flex-col">
              <div className="flex items-start justify-between mb-3">
                <h2 className="text-xl font-bold text-black dark:text-white">BackdropUi</h2>
                <div className="flex gap-2">
                  <a href="https://sivakumar232.github.io/BackdropUI/" target="_blank" rel="noopener noreferrer" className="p-1.5 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded transition-colors" title="Live">
                    <FaLink className="text-base text-neutral-600 dark:text-neutral-400" />
                  </a>
                  <a href="https://github.com/sivakumar232/BackdropUI" target="_blank" rel="noopener noreferrer" className="p-1.5 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded transition-colors" title="GitHub">
                    <BsGithub className="text-base text-neutral-600 dark:text-neutral-400" />
                  </a>
                </div>
              </div>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4">
                Go-to place to find background gradients, ready to use in your projects, made with Tailwind.
              </p>
              <div className="flex flex-wrap gap-2 mt-auto">
                <span className="px-3 py-1 text-xs bg-neutral-100 dark:bg-neutral-800 rounded-full">React</span>
                <span className="px-3 py-1 text-xs bg-neutral-100 dark:bg-neutral-800 rounded-full">Tailwind CSS</span>
              </div>
            </div>
          </div>
        </div>

        {/* Project 3: Sync AI */}
        <div className="group bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded overflow-hidden hover:border-neutral-400 dark:hover:border-neutral-600 transition-all relative">
          {/* Corner Accents - Permanent */}
          <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-neutral-400 dark:border-neutral-500"></div>
          <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-neutral-400 dark:border-neutral-500"></div>
          <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-neutral-400 dark:border-neutral-500"></div>
          <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-neutral-400 dark:border-neutral-500"></div>
          <div className="flex flex-col md:flex-row">
            <div className="md:w-2/5 overflow-hidden bg-neutral-100 dark:bg-neutral-800">
              <img src={timetableimg} alt="Sync AI" className="w-full h-full object-cover" loading="lazy" />
            </div>
            <div className="md:w-3/5 p-6 flex flex-col">
              <div className="flex items-start justify-between mb-3">
                <h2 className="text-xl font-bold text-black dark:text-white">Sync AI</h2>
                <div className="flex gap-2">
                  <a href="https://github.com/sivakumar232/timetable-frontend" target="_blank" rel="noopener noreferrer" className="p-1.5 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded transition-colors" title="GitHub">
                    <BsGithub className="text-base text-neutral-600 dark:text-neutral-400" />
                  </a>
                </div>
              </div>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4">
                An AI-powered scheduling engine that uses a Genetic Algorithm to automatically generate optimized, clash-free timetables.
              </p>
              <div className="flex flex-wrap gap-2 mt-auto">
                <span className="px-3 py-1 text-xs bg-neutral-100 dark:bg-neutral-800 rounded-full">React</span>
                <span className="px-3 py-1 text-xs bg-neutral-100 dark:bg-neutral-800 rounded-full">Tailwind CSS</span>
                <span className="px-3 py-1 text-xs bg-neutral-100 dark:bg-neutral-800 rounded-full">Supabase</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
