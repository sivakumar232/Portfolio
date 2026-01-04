import React from 'react';
import { FaGithub, FaLinkedin, FaReact, FaNodeJs } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { SiLeetcode, SiNextdotjs, SiTypescript, SiSupabase } from 'react-icons/si';
import mobImage from '../assets/mob.jpg';
import darkBannerImage from '../assets/forest_banner.jpg';
import lightBannerImage from '../assets/light_banner.jpg';

const Banner = ({ isDarkMode }) => {
    return (
        <div className="relative mb-2 rounded-xl overflow-hidden">
            {/* Banner Image */}
            <div className="h-32 sm:h-48 w-full bg-neutral-200 dark:bg-neutral-800 overflow-hidden">
                <img
                    src={isDarkMode ? darkBannerImage : lightBannerImage}
                    alt="Cover"
                    className="w-full h-full object-cover"
                    loading="eager"
                />
            </div>

            <div className="px-6 pb-6 relative">
                {/* Profile Image - Overlapping */}
                <div className="-mt-12 sm:-mt-16 mb-4 flex justify-between items-end">
                    <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full border-4 border-neutral-50 dark:border-neutral-900 overflow-hidden bg-white dark:bg-black shadow-sm">
                        <img src={mobImage} alt="Profile" className="w-full h-full object-cover" loading="eager" />
                    </div>

                    {/* Social Links */}
                    <div className="flex gap-2 mb-1">
                        <a href="https://github.com/sivakumar232" target="_blank" rel="noopener noreferrer" className="p-2 bg-white dark:bg-neutral-800 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-colors border border-neutral-200 dark:border-neutral-700 group">
                            <FaGithub className="text-xl text-neutral-700 dark:text-neutral-200 group-hover:text-black dark:group-hover:text-white transition-colors" />
                        </a>
                        <a href="https://www.linkedin.com/in/sivakumarvemuri" target="_blank" rel="noopener noreferrer" className="p-2 bg-white dark:bg-neutral-800 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-colors border border-neutral-200 dark:border-neutral-700 group">
                            <FaLinkedin className="text-xl text-[#0077b5] dark:text-[#0a66c2]" />
                        </a>
                        <a href="https://x.com/sivakumarr3105" target="_blank" rel="noopener noreferrer" className="p-2 bg-white dark:bg-neutral-800 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-colors border border-neutral-200 dark:border-neutral-700 group">
                            <FaXTwitter className="text-xl text-black dark:text-white" />
                        </a>
                        <a href="https://leetcode.com/u/sivakumarrrrrr2005/" target="_blank" rel="noopener noreferrer" className="p-2 bg-white dark:bg-neutral-800 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-colors border border-neutral-200 dark:border-neutral-700 group">
                            <SiLeetcode className="text-xl text-[#fea116]" />
                        </a>
                    </div>
                </div>

                {/* Profile Info */}
                <div>
                    <h1 className="text-4xl font-hanken font-bold mb-4 text-black dark:text-white">
                        Hi, I'm SivaKumar
                    </h1>

                    {/* Tech Stack Description */}
                    <div className="space-y-4">
                        <div>
                            <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-3 font-hanken">
                                I build production ready applications using
                            </p>
                            <div className="flex flex-wrap items-center gap-2">
                                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md border border-dashed border-neutral-400 dark:border-neutral-600 bg-white dark:bg-neutral-800 shadow-sm text-sm font-semibold font-hanken transition-all hover:shadow-md hover:-translate-y-0.5 cursor-pointer">
                                    <FaReact className="text-[#61DAFB] text-base" />
                                    <span className="text-black dark:text-white">React</span>
                                </div>
                                <span className="text-neutral-500 dark:text-neutral-500">,</span>
                                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md border border-dashed border-neutral-400 dark:border-neutral-600 bg-white dark:bg-neutral-800 shadow-sm text-sm font-semibold font-hanken transition-all hover:shadow-md hover:-translate-y-0.5 cursor-pointer">
                                    <SiNextdotjs className="text-black dark:text-white text-base" />
                                    <span className="text-black dark:text-white">Next.js</span>
                                </div>
                                <span className="text-neutral-500 dark:text-neutral-500">,</span>
                                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md border border-dashed border-neutral-400 dark:border-neutral-600 bg-white dark:bg-neutral-800 shadow-sm text-sm font-semibold font-hanken transition-all hover:shadow-md hover:-translate-y-0.5 cursor-pointer">
                                    <SiTypescript className="text-[#3178C6] text-base" />
                                    <span className="text-black dark:text-white">TypeScript</span>
                                </div>
                                <span className="text-neutral-500 dark:text-neutral-500">,</span>
                                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md border border-dashed border-neutral-400 dark:border-neutral-600 bg-white dark:bg-neutral-800 shadow-sm text-sm font-semibold font-hanken transition-all hover:shadow-md hover:-translate-y-0.5 cursor-pointer">
                                    <FaNodeJs className="text-[#339933] text-base" />
                                    <span className="text-black dark:text-white">Node.js</span>
                                </div>
                                <span className="text-neutral-500 dark:text-neutral-500">and</span>
                                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md border border-dashed border-neutral-400 dark:border-neutral-600 bg-white dark:bg-neutral-800 shadow-sm text-sm font-semibold font-hanken transition-all hover:shadow-md hover:-translate-y-0.5 cursor-pointer">
                                    <SiSupabase className="text-[#3ECF8E] text-base" />
                                    <span className="text-black dark:text-white">Supabase</span>
                                </div>
                                <span className="text-neutral-500 dark:text-neutral-500">.</span>
                            </div>
                        </div>
                        <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed font-hanken">
                            Passionate about solving real world problems.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
