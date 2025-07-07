import React from 'react'
import Marquee from "react-fast-marquee";
import { FaHtml5 } from 'react-icons/fa';
import { FaCss3Alt } from 'react-icons/fa';
import { FaJs } from 'react-icons/fa';
import { FaReact } from 'react-icons/fa';
import { FaGitAlt } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { SiTailwindcss } from 'react-icons/si';
import { FaNodeJs } from 'react-icons/fa';
import { SiExpress } from 'react-icons/si';
import { SiPostman } from 'react-icons/si';
import { SiVercel } from 'react-icons/si';
import { SiMongodb } from 'react-icons/si';
const Marque = () => {
  return (
<div className="space-y-5">
  <Marquee pauseOnHover={true} autoFill={true} speed={8}>
  <div className="flex gap-10 items-center">
    <span className="flex hover:border-sky-500 border border-gray-600 bg-neutral-800 rounded px-2 py-1 items-center gap-2">
      <FaHtml5 className="text-[#E34F26]" /> HTML
    </span>
    <span className="flex hover:border-sky-500 border border-gray-600 bg-neutral-800 rounded px-2 py-1 items-center gap-2">
      <FaJs className="text-[#F7DF1E]" /> JavaScript
    </span>
    <span className="flex hover:border-sky-500 border border-gray-600 bg-neutral-800 rounded px-2 py-1 items-center gap-2">
      <FaCss3Alt className="text-[#1572B6]" /> CSS
    </span>
    <span className="flex hover:border-sky-500 border border-gray-600 bg-neutral-800 rounded px-2 py-1 items-center gap-2">
      <FaReact className="text-[#61DAFB]" /> React
    </span>
    <span className="flex hover:border-sky-500 border border-gray-600 bg-neutral-800 rounded px-2 py-1 items-center gap-2">
      <FaGitAlt className="text-[#F05032]" /> Git
    </span>
    <span className="mr-10 flex hover:border-sky-500 border border-gray-600 bg-neutral-800 rounded px-2 py-1 items-center gap-2">
      <SiTailwindcss className="text-[#38BDF8]" /> Tailwind CSS
    </span>
  </div>
</Marquee>

  <Marquee pauseOnHover={true} autoFill={true} speed={8} direction="right">
  <div className="flex items-center gap-10">
    <span className="ml-10 flex hover:border-sky-500 border border-gray-600 bg-neutral-800 rounded px-2 py-1 items-center gap-2">
      <SiMongodb className="text-[#47A248]" /> MongoDB
    </span>
    <span className="flex border hover:border-sky-500 border-gray-600 bg-neutral-800 rounded px-2 py-1 items-center gap-2">
      <SiVercel className="text-white" /> Vercel
    </span>
    <span className="flex border hover:border-sky-500 border-gray-600 bg-neutral-800 rounded px-2 py-1 items-center gap-2">
      <SiPostman className="text-[#FF6C37]" /> Postman
    </span>
    <span className="flex border hover:border-sky-500 border-gray-600 bg-neutral-800 rounded px-2 py-1 items-center gap-2">
      <SiExpress className="text-white" /> Express
    </span>
    <span className="flex border hover:border-sky-500 border-gray-600 bg-neutral-800 rounded px-2 py-1 items-center gap-2">
      <FaGithub className="text-white" /> GitHub
    </span>
    <span className="mr-2 flex hover:border-sky-500 border border-gray-600 bg-neutral-800 rounded px-2 py-1 items-center gap-2">
      <FaNodeJs className="text-[#339933]" /> NodeJS
    </span>
  </div>
</Marquee>

</div>

  )
}

export default Marque;