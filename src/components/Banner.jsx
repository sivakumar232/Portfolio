import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { SiLeetcode } from 'react-icons/si';
import mobImage from '../assets/mob.jpg';
import darkBannerImage from '../assets/forest_banner.jpg';
import lightBannerImage from '../assets/light_banner.jpg';

const Banner = ({ isDarkMode }) => {
    return (
        <div className="relative mb-4 rounded-xl overflow-hidden">
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
                    <h1 className="text-4xl font-lato font-bold mb-2 text-black dark:text-white">
                        Hi, I'm SivaKumar
                    </h1>
                </div>
            </div>
        </div>
    );
};

export default Banner;
