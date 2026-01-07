import React from 'react';
import srkrLogo from '../assets/srkr_logo.jpg';
import { FaReact, FaNodeJs } from 'react-icons/fa';
import { SiNextdotjs, SiTypescript, SiSupabase } from 'react-icons/si';

const About = () => {
    return (
        <div id="about" className="-mt-10">
            {/* About Section Text */}
            <div className="text-black dark:text-white flex flex-col font-hanken rounded-xl px-4 sm:px-6 ">
                <div>
                    {/* <h1 className="text-sm font-hanken font-semibold text-neutral-400 ">About</h1>
                    <h1 className="text-2xl font-hanken font-semibold mb-2">Me</h1> */}

                    <p className="text-sm sm:text-md text-neutral-600 dark:text-neutral-400 leading-relaxed">
                        A full stack engineer from India, I build production-ready applications using{' '}
                        <span className="inline-flex items-center gap-1.5 sm:gap-2 px-2 sm:px-3 py-1 sm:py-1.5 rounded-md border border-dashed border-neutral-400 dark:border-neutral-600 bg-white dark:bg-neutral-800 shadow-sm text-xs sm:text-sm font-semibold transition-all hover:shadow-md hover:-translate-y-0.5 cursor-pointer">
                            <FaReact className="text-[#61DAFB] text-sm sm:text-base" />
                            <span className="text-black dark:text-white">React</span>
                        </span>
                        ,{' '}
                        <span className="inline-flex items-center gap-1.5 sm:gap-2 px-2 sm:px-3 py-1 sm:py-1.5 rounded-md border border-dashed border-neutral-400 dark:border-neutral-600 bg-white dark:bg-neutral-800 shadow-sm text-xs sm:text-sm font-semibold transition-all hover:shadow-md hover:-translate-y-0.5 cursor-pointer">
                            <SiNextdotjs className="text-black dark:text-white text-sm sm:text-base" />
                            <span className="text-black dark:text-white">Next.js</span>
                        </span>
                        ,{' '}
                        <span className="inline-flex items-center gap-1.5 sm:gap-2 px-2 sm:px-3 py-1 sm:py-1.5 rounded-md border border-dashed border-neutral-400 dark:border-neutral-600 bg-white dark:bg-neutral-800 shadow-sm text-xs sm:text-sm font-semibold transition-all hover:shadow-md hover:-translate-y-0.5 cursor-pointer">
                            <SiTypescript className="text-[#3178C6] text-sm sm:text-base" />
                            <span className="text-black dark:text-white">TypeScript</span>
                        </span>
                        , and{'  '}
                        <span className="inline-flex items-center gap-1.5 sm:gap-2 px-2 sm:px-3 py-1 sm:py-1.5 rounded-md border border-dashed border-neutral-400 dark:border-neutral-600 bg-white dark:bg-neutral-800 shadow-sm text-xs sm:text-sm font-semibold transition-all hover:shadow-md hover:-translate-y-0.5 cursor-pointer">
                            <FaNodeJs className="text-[#339933] text-sm sm:text-base" />
                            <span className="text-black dark:text-white">Node.js</span>
                        </span>
                        . Currently diving deeper into backend technologies while crafting interactive user interfaces that deliver exceptional user experiences.
                    </p>
                    <p className="text-sm sm:text-md text-neutral-600 dark:text-neutral-400 leading-relaxed mt-3 sm:mt-2">
                        With a focus on clean architecture and scalable solutions, I'm passionate about solving real-world problems through innovative web technologies. Most of my time goes into working on personal projects that push the boundaries of what's possible.
                    </p>
                    <p className="text-sm sm:text-md text-neutral-600 dark:text-neutral-400 leading-relaxed mt-3 sm:mt-2">
                        If you're looking to collaborate or need help with something, feel free to reach out—I'm always excited to work on meaningful projects.
                    </p>
                </div>
            </div>

            {/* Education Section - Original Style */}
            <div className="text-black dark:text-white font-hanken rounded-xl px-4 sm:px-6 py-4">
                <h1 className="text-xl sm:text-2xl font-hanken font-semibold mb-4 sm:mb-6">Education</h1>
                <div className="flex items-start gap-3 group">
                    <div className="w-10 h-10 shrink-0 border border-neutral-200 dark:border-neutral-800 rounded-sm overflow-hidden">
                        <img src={srkrLogo} alt="SRKR Engineering College" className="w-full h-full object-cover" />
                    </div>
                    <div className="flex flex-col w-full">
                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1 sm:gap-0">
                            <h2 className="text-sm font-bold text-black dark:text-white hover:underline transition-colors">
                                Sagi Ramakrishnam Raju Engineering College
                            </h2>
                            <span className="text-xs text-neutral-500 dark:text-neutral-500 whitespace-nowrap sm:ml-4">2023 — 2027</span>
                        </div>
                        <p className="text-sm text-neutral-500 dark:text-neutral-500 mt-1">
                            Artificial Intelligence and Machine Learning
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
