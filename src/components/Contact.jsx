import React from 'react';

const Contact = () => {
  return (
    <div className="text-white relative top-20 flex justify-center px-4">
      <div className="w-full max-w-lg space-y-6 font-roboto-mono rounded-md p-6 shadow-lg">
        <h1 className="text-2xl font-semibold text-center">Contact Me</h1>

        <div className="space-y-4">
          <input
            type="text"
            placeholder="Name"
            className="w-full h-10 px-3 border rounded-md bg-transparent border-gray-600 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="email"
            placeholder="Email"
            className="w-full h-10 px-3 border rounded-md bg-transparent border-gray-600 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <textarea
            rows="4"
            placeholder="Your message..."
            className="w-full px-3 py-2 border rounded-md bg-transparent border-gray-600 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
          ></textarea>

          <button
            className="w-full py-2 bg-gray-400 hover:bg-black hover:border hover:text-white text-black font-medium rounded-md transition duration-200"
          >
            Send Message
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
