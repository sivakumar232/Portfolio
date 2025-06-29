import React, { useState } from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { IoPinOutline } from 'react-icons/io5';
import GitHubCalendar from 'react-github-calendar';
import { Spotlight } from './ui/Spotlight';
import Marque from './Marque';
import Experience from './Experience';
import Projects from './Projects';
import { useLocation } from 'react-router-dom';
import bgImage from '../assets/bg2.jpg';
import { GlowEffect } from '@/components/glow-effect';
import { Dock } from '@/components/dock';const Connector = () => {
  const location = useLocation();

  return (

    <>

      <div
      
        className="overflow-x-hidden bg-no-repeat bg-center bg-fixed min-h-screen"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: 'cover',
          backgroundAttachment: 'fixed',
        }}
      >



        <div className="px-4 sm:px-6 lg:px-8 pt-20">

          {/* Name Container */}
          <div className="text-white flex justify-center font-roboto-mono m-auto border border-gray-600 rounded-xl p-8 sm:p-10 w-full max-w-4xl shadow-lg bg-black/60 backdrop-blur-md">
            <div className="flex flex-col sm:flex-row justify-between w-full relative">
              <Spotlight size={300} />
              <div>
                <div className='flex'>
                  <h1 className="text-3xl sm:text-4xl font-semibold"> Siva Kumar<h1 />
                  </h1>
                </div>
                <p className="mt-3 text-base max-w-md">
                  Hello, I'm a who loves technologies and trying to learn what I like.
                </p>
                <div className="relative inline-flex px-2 py-1 items-center justify-center mt-5">
                  <div className="absolute inset-0 flex items-center justify-center z-0 pointer-events-none">
                    <GlowEffect
                      mode="colorShift"
                      colors={['#FF5733', '#33FF57', '#3357FF', '#F1C40F']}
                      blur="soft"
                      scale={0.8}
                      duration={9}
                      className="rounded-xl "
                    />
                  </div>
                  <button className="relative z-10 text-bold px-6 py-3 bg-white text-black rounded-xl font-semibold shadow-md">
                    Resume
                  </button>
                </div>


              </div>

              {/* Social Links */}
              <div className="flex space-x-6 items-start mt-6 sm:mt-0">
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin className="text-2xl sm:text-3xl hover:text-slate-400 transition duration-300" />
                </a>
                <a href="https://github.com/sivakumar232" target="_blank" rel="noopener noreferrer">
                  <FaGithub className="text-2xl sm:text-3xl hover:text-slate-400 transition duration-300" />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                  <FaXTwitter className="text-2xl sm:text-3xl hover:text-slate-400 transition duration-300" />
                </a>
              </div>
            </div>
          </div>
          {/* Tech + GitHub Section */}
          <div className="text-white mt-5  mx-auto w-full max-w-4xl border border-gray-600 rounded-xl p-8 sm:p-10 bg-black/60 backdrop-blur-md">
            <h1 className="text-2xl sm:text-3xl font-bold font-orbitron text-center ">
              What I work with
            </h1>

            <div className="relative mt-5">
              <Marque />
            </div>


          </div>
          <div className="text-white mt-5 font-roboto-mono mx-auto w-full max-w-4xl border border-gray-600 rounded-xl p-8 sm:p-10 bg-black/60 backdrop-blur-md">
            <h1 className="text-2xl sm:text-3xl font-orbitron font-bold text-center ">
              Github Activity
            </h1>
            <div className="mt-10 w-full">
              <div className="w-full overflow-hidden">
                <div className="flex justify-center sm:justify-start">
                  <GitHubCalendar
                    username="sivakumar232"
                    blockSize={12}
                    blockMargin={3}
                    fontSize={14}
                    weeks={20}
                    colorScheme="dark"
                    style={{
                      maxWidth: '100%',
                      fontSize: '13px',
                    }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Experience & Projects */}
          <div className="text-white mt-5 font-roboto-mono mx-auto w-full max-w-4xl border border-gray-600 rounded-xl p-8 sm:p-10 bg-black/60 backdrop-blur-md">
            <Projects />
          </div>
          <div className="text-white mt-5 font-roboto-mono mx-auto w-full max-w-4xl border border-gray-600 rounded-xl p-8 sm:p-10 bg-black/60 backdrop-blur-md">
            <Experience />
          </div>

          <div className="w-full cursor-pointer text-center py-4  mt-10 text-sm text-gray-400 ">
            <span className="font-semibold text-white">" Its not who I am underneath, but what I do that defines me "</span>
          </div>
        </div>
      </div>


    </>
  );
};

export default Connector;
