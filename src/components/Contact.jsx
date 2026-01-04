import React from 'react';
import { FaLinkedin } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const Contact = () => {
    return (
        <div id="contact" className="text-black dark:text-white rounded-xl px-6 py-4">
            <h1 className="text-2xl font-hanken font-semibold mb-6">Let's Connect</h1>

            <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed mb-6 font-hanken">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Feel free to reach out!
            </p>

            {/* Cal.com Meeting Scheduler */}
            <a
                href="https://cal.com/siva-kumar-vdv1fl/15min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 mb-6 bg-black dark:bg-white text-white dark:text-black font-semibold rounded-lg hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors"
            >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Schedule a 15-min Meeting
            </a>

            {/* Contact Methods */}
            <div className="space-y-4">
                {/* Email */}
                <a
                    href="mailto:sivakumar232@example.com"
                    className="flex items-center gap-3 text-black dark:text-white hover:text-neutral-600 dark:hover:text-neutral-400 transition-colors group"
                >
                    <div className="p-3 rounded-lg bg-neutral-100 dark:bg-neutral-800 group-hover:bg-neutral-200 dark:group-hover:bg-neutral-700 transition-colors">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                    </div>
                    <div>
                        <p className="text-xs text-neutral-500 dark:text-neutral-500">Email</p>
                        <p className="text-sm font-medium">sivakumarr3105@gmail.com</p>
                    </div>
                </a>

                {/* Social Links */}
                <div>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-3">You can also contact me through:</p>
                    <div className="flex gap-3">
                        <a
                            href="https://www.linkedin.com/in/sivakumarvemuri"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="relative p-3 rounded-lg bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors group"
                            aria-label="LinkedIn"
                        >
                            <FaLinkedin className="text-xl text-black dark:text-white" />
                            <span className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-black dark:bg-white text-white dark:text-black text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                                LinkedIn
                            </span>
                        </a>
                        <a
                            href="https://x.com/sivakumarr3105"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="relative p-3 rounded-lg bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors group"
                            aria-label="Twitter"
                        >
                            <FaXTwitter className="text-xl text-black dark:text-white" />
                            <span className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-black dark:bg-white text-white dark:text-black text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                                Twitter / X
                            </span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
