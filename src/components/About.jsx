import React from 'react';
import srkrLogo from '../assets/srkr_logo.jpg';

const About = () => {
    return (
        <div id="about">
            {/* About Section Text */}
            <div className="text-black dark:text-white flex flex-col font-roboto-mono rounded-xl px-6 py-4">
                <div>
                    <h1 className="text-2xl font-lato font-semibold mb-2">About Me</h1>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                        A full stack engineer from India, currently learning about backend technologies and building interactive user interfaces.
                    </p>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed mt-2">
                        Most of my time goes into working on personal projects. If you're looking to collaborate or need help with something, feel free to reach out.
                    </p>
                </div>
            </div>

            {/* Education Section */}
            <div className="text-black dark:text-white font-roboto-mono rounded-xl px-6 py-4">
                <h1 className="text-2xl font-lato font-semibold mb-6">Education</h1>
                <div className="flex items-start gap-3 group">
                    <div className="w-10 h-10 shrink-0 border border-neutral-200 dark:border-neutral-800 rounded-sm overflow-hidden">
                        <img src={srkrLogo} alt="SRKR Engineering College" className="w-full h-full object-cover" />
                    </div>
                    <div className="flex flex-col w-full">
                        <div className="flex justify-between items-start">
                            <h2 className="text-sm font-bold text-black dark:text-white hover:underline transition-colors">
                                Sagi Ramakrishnam Raju Engineering College
                            </h2>
                            <span className="text-xs text-neutral-500 dark:text-neutral-500 whitespace-nowrap ml-4">2023 — 2027</span>
                        </div>
                        <p className="text-sm text-neutral-500 dark:text-neutral-500">
                            Artificial Intelligence and Machine Learning
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
