import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="flex relative top-10 md:top-5 justify-center font-roboto-mono text-white m-auto">
      <div className="relative right-2 md:right-100">
        <Link to="/"><h1 className="text-s md:text-xl  cursor-pointer">Siva Kumar</h1></Link>
      </div>
      <div className="cursor-pointer relative md:right-10 flex justify-center">
        <ul className="flex space-x-4 md:space-x-8 text-base">
          <li>
            <Link to="/about" className="hover:text-gray-400">About</Link>
          </li>
          <li>
            <Link to="/projects" className="hover:text-gray-400">Projects</Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-gray-400">Contact Me</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
