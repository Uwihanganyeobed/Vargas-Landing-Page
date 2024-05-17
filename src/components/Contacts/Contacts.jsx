import React from 'react';
import { MdEmail } from "react-icons/md";
import { FaYoutube } from "react-icons/fa";

const DonateComponent = () => {

  return (
    <div className="flex flex-row md:flex-col gap-1 bg-gradient-to-r from-indigo-900 via-teal-400 to-blue-300">
      <div className="flex-1 p-4">
        <h1 className="text-2xl font-bold mb-10">Contact</h1>
        <p className='text-black-600 mb-8'>I'd love to hear from you!!</p>
        <p className='text-black-600 mb-8'>Here's how to contact me and stay up to date:</p>

        <div className="flex flex-column justify-start space-x-5 mb-10">
          <a  href='https://www.youtube.com/channel/UCZtCsouMiJC7ZK7Pl9Qk3pw'className="text-black-600 focus:outline-none">
            <FaYoutube className="h-8 w-8 md:h-12 md:w-12" />
            <label className="text-sm md:text-base">YouTube Channel</label>
          </a>
          <a href='uwihanganyeobed@gmail.com'className="text-black-600 focus:outline-none">
            <MdEmail className="h-8 w-8 md:h-12 md:w-12" />
            <label className="text-sm md:text-base">Email</label>
          </a>
        </div>
      </div>
    </div>
  );
};

export default DonateComponent;
