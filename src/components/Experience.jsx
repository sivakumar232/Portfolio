import React from 'react'

const Experience = () => {
  return (
    <div className='sm:p-4 relative sm:right-2 cursor-pointer'>
      <div>
        <h1 className='text-2xl sm:text-xl  text-center sm:text-left font=lato mb-4 '>Experience</h1>
        <ol className=" relative border-s border-white ">
          <li className="mb-12 ms-6">
            <time className="block mb-2 text-sm text-gray-400">june 2025</time>
            <h3 className="text-xl font-semibold text-white">Personal Projects</h3>
            <p className="mt-2 text-base text-gray-400">
              Made some personal projects in part of my learning curve
            </p>
          </li>
        </ol>
        <ol className='relative border-s border-white'>
          <li className="mb-12 ms-6">
            <time className="block mb-2 text-sm text-gray-400">March 2025 - Present</time>
            <h3 className="text-xl font-semibold text-white">Open Source</h3>
            <p className="mt-2 text-base text-gray-400">
              Contributing on open source
            </p>
          </li>

        </ol>
      </div>

    </div>
  )
}

export default Experience