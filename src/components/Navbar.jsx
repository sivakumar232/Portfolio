import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="flex relative top-10 sm:top-5 justify-center font-roboto-mono text-white m-auto">
      <div className="relative right-2 sm:right-150">
        <Link to="/"><h1 className="text-s md:text-xl  cursor-pointer">Siva Kumar</h1></Link>
      </div>

    </div>
  );
};

export default Navbar;
