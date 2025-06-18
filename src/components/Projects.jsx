import React from 'react';

const Projects = () => {
  return (
    
    <div className="text-white font-roboto-mono px-4 flex flex-col items-center mt-20">
      <div className="w-full max-w-2xl  rounded-md p-6">
        <h1 className="text-2xl font-semibold text-center mb-6">Projects</h1>

        <div className="grid gap-6 sm:grid-cols-1">
          
          <div className=" rounded-lg  border border-gray-600 p-4 h-90 hover:shadow-lg transition">
            <div className='justify-bottom'>
            <h2 className="text-xl font-semibold mb-2">Portfolio Website</h2>
            <p className="text-gray-400 mb-3">
              A responsive personal portfolio website built using React, Tailwind CSS, and React Router.
            </p>
            <a href="https://yourprojectlink.com" target="_blank" rel="noopener noreferrer" className="text-sm text-blue-400 hover:underline">
              View Project
            </a>
            </div>
          </div>

          <div className="border border-gray-500 rounded-lg p-4 hover:shadow-lg transition">
            <h2 className="text-xl font-semibold mb-2">Hospital Management System</h2>
            <p className="text-gray-400 mb-3">
              A full-stack hospital management app with bed allocation, OPD queuing, and inventory control using PHP and MySQL.
            </p>
            <a href="https://yourprojectlink.com" target="_blank" rel="noopener noreferrer" className="text-sm text-blue-400 hover:underline">
              View Project
            </a>
          </div>


        </div>
      </div>
    </div>
  );
};

export default Projects;
