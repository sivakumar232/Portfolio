import React from 'react';
import { MdEmail } from 'react-icons/md';
const Contact = () => {
  return (
    <div className="text-white relative  border rounded-xl border-gray-600 flex justify-center px-4">
      <div className="w-full max-w-lg space-y-6 font-roboto-mono  rounded-md p-6 shadow-lg">

        <div className="space-y-4 flex">
          <MdEmail/>
        </div>
      </div>
    </div>
  );
};

export default Contact;
