import React from 'react';
import { FaReact, FaHtml5, FaCss3Alt, FaNodeJs, FaGitAlt, FaGithub } from 'react-icons/fa';
import { SiTailwindcss, SiNextdotjs, SiExpress, SiPostgresql, SiMongodb, SiSupabase, SiPrisma, SiTypescript, SiPostman, SiVercel } from 'react-icons/si';

const Skills = () => {
    return (
        <div id="skills" className="text-black dark:text-white rounded-xl px-6 py-4">
            <h1 className="text-2xl font-lato font-semibold mb-6">Skills & Tools</h1>

            <div className="flex flex-wrap items-center gap-2">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md border border-dashed border-neutral-400 dark:border-neutral-600 bg-white dark:bg-neutral-800 shadow-sm text-sm font-semibold transition-all hover:shadow-md hover:-translate-y-0.5">
                    <SiTypescript className="text-[#3178C6] text-base" />
                    <span>TypeScript</span>
                </div>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md border border-dashed border-neutral-400 dark:border-neutral-600 bg-white dark:bg-neutral-800 shadow-sm text-sm font-semibold transition-all hover:shadow-md hover:-translate-y-0.5">
                    <FaReact className="text-[#61DAFB] text-base" />
                    <span>React.js</span>
                </div>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md border border-dashed border-neutral-400 dark:border-neutral-600 bg-white dark:bg-neutral-800 shadow-sm text-sm font-semibold transition-all hover:shadow-md hover:-translate-y-0.5">
                    <SiNextdotjs className="text-black dark:text-white text-base" />
                    <span>Next.js</span>
                </div>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md border border-dashed border-neutral-400 dark:border-neutral-600 bg-white dark:bg-neutral-800 shadow-sm text-sm font-semibold transition-all hover:shadow-md hover:-translate-y-0.5">
                    <SiTailwindcss className="text-[#38BDF8] text-base" />
                    <span>Tailwind</span>
                </div>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md border border-dashed border-neutral-400 dark:border-neutral-600 bg-white dark:bg-neutral-800 shadow-sm text-sm font-semibold transition-all hover:shadow-md hover:-translate-y-0.5">
                    <FaHtml5 className="text-[#E34F26] text-base" />
                    <span>HTML</span>
                </div>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md border border-dashed border-neutral-400 dark:border-neutral-600 bg-white dark:bg-neutral-800 shadow-sm text-sm font-semibold transition-all hover:shadow-md hover:-translate-y-0.5">
                    <FaCss3Alt className="text-[#1572B6] text-base" />
                    <span>CSS</span>
                </div>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md border border-dashed border-neutral-400 dark:border-neutral-600 bg-white dark:bg-neutral-800 shadow-sm text-sm font-semibold transition-all hover:shadow-md hover:-translate-y-0.5">
                    <FaNodeJs className="text-[#339933] text-base" />
                    <span>Node.js</span>
                </div>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md border border-dashed border-neutral-400 dark:border-neutral-600 bg-white dark:bg-neutral-800 shadow-sm text-sm font-semibold transition-all hover:shadow-md hover:-translate-y-0.5">
                    <SiExpress className="text-neutral-600 dark:text-white text-base" />
                    <span>Express</span>
                </div>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md border border-dashed border-neutral-400 dark:border-neutral-600 bg-white dark:bg-neutral-800 shadow-sm text-sm font-semibold transition-all hover:shadow-md hover:-translate-y-0.5">
                    <SiPostgresql className="text-[#4169E1] text-base" />
                    <span>Postgres</span>
                </div>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md border border-dashed border-neutral-400 dark:border-neutral-600 bg-white dark:bg-neutral-800 shadow-sm text-sm font-semibold transition-all hover:shadow-md hover:-translate-y-0.5">
                    <SiMongodb className="text-[#47A248] text-base" />
                    <span>MongoDB</span>
                </div>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md border border-dashed border-neutral-400 dark:border-neutral-600 bg-white dark:bg-neutral-800 shadow-sm text-sm font-semibold transition-all hover:shadow-md hover:-translate-y-0.5">
                    <SiSupabase className="text-[#3ECF8E] text-base" />
                    <span>Supabase</span>
                </div>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md border border-dashed border-neutral-400 dark:border-neutral-600 bg-white dark:bg-neutral-800 shadow-sm text-sm font-semibold transition-all hover:shadow-md hover:-translate-y-0.5">
                    <SiPrisma className="text-[#2D3748] dark:text-white text-base" />
                    <span>Prisma</span>
                </div>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md border border-dashed border-neutral-400 dark:border-neutral-600 bg-white dark:bg-neutral-800 shadow-sm text-sm font-semibold transition-all hover:shadow-md hover:-translate-y-0.5">
                    <FaGitAlt className="text-[#F05032] text-base" />
                    <span>Git</span>
                </div>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md border border-dashed border-neutral-400 dark:border-neutral-600 bg-white dark:bg-neutral-800 shadow-sm text-sm font-semibold transition-all hover:shadow-md hover:-translate-y-0.5">
                    <FaGithub className="text-black dark:text-white text-base" />
                    <span>GitHub</span>
                </div>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md border border-dashed border-neutral-400 dark:border-neutral-600 bg-white dark:bg-neutral-800 shadow-sm text-sm font-semibold transition-all hover:shadow-md hover:-translate-y-0.5">
                    <SiPostman className="text-[#FF6C37] text-base" />
                    <span>Postman</span>
                </div>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md border border-dashed border-neutral-400 dark:border-neutral-600 bg-white dark:bg-neutral-800 shadow-sm text-sm font-semibold transition-all hover:shadow-md hover:-translate-y-0.5">
                    <SiVercel className="text-black dark:text-white text-base" />
                    <span>Vercel</span>
                </div>
            </div>
        </div>
    );
};

export default Skills;
