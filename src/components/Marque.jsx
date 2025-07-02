import React from 'react'
import Marquee from "react-fast-marquee";
import { FaHtml5 } from 'react-icons/fa';
import { FaCss3Alt } from 'react-icons/fa';
import { FaJs } from 'react-icons/fa';
import { FaReact } from 'react-icons/fa';
import { FaGitAlt } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { SiTailwindcss } from 'react-icons/si';

const Marque = () => {
  return (
<div className="space-y-4">
  <Marquee pauseOnHover={true} autoFill={true} speed={30}>
    <div className="flex gap-10 items-center">
      <span className="flex items-center gap-2"><FaHtml5 className='text-orange-600' /> HTML</span>
      <span className="flex items-center gap-2"><FaJs className='text-yellow-400'/> JavaScript</span>
      <span className="flex items-center gap-2"><FaCss3Alt className='text-blue-600' /> CSS</span>
      <span className="flex items-center gap-2"><FaReact className='text-cyan-400'/> React</span>
      <span className="flex items-center gap-2"><FaGitAlt className='text-orange-400' /> Git</span>
      <span className="flex items-center gap-2"><SiTailwindcss className='text-sky-400'/> Tailwind CSS</span>
      <span className="flex items-center gap-2"><FaGithub /> GitHub</span>
    </div>
  </Marquee>

  <Marquee pauseOnHover={true} autoFill={true} speed={30} direction='right'>
    <div className="flex gap-10 items-center">
      <span className="flex items-center gap-2"><FaGithub  /> GitHub</span>
      <span className="flex items-center gap-2"><SiTailwindcss className='text-sky-400'/> Tailwind CSS</span>
      <span className="flex items-center gap-2"><FaGitAlt className='text-orange-400'/> Git</span>
      <span className="flex items-center gap-2"><FaReact className='text-cyan-400'/> React</span>
      <span className="flex items-center gap-2"><FaCss3Alt className='text-blue-600' /> CSS</span>
      <span className="flex items-center gap-2"><FaJs className='text-yellow-400' /> JavaScript</span>
      <span className="flex items-center gap-2 mr-2"><FaHtml5 className='text-orange-600'/> HTML</span>
    </div>  
  </Marquee>
</div>

  )
}

export default Marque;