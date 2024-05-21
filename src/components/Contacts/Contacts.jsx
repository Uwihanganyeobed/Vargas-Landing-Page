import React from 'react';
import { MdEmail } from "react-icons/md";
import { FaYoutube } from "react-icons/fa";
import assets from '../../assets';
import bg_img from '../../assets/jonathan-bean-sbZU1j31ggE-unsplash.jpg'

const DonateComponent = () => {

  return (
    <div className="flex flex-row md:flex-col gap-1 "
    style={{
      backgroundImage: `url(${bg_img})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      height: '100vh', // Adjust as needed
      width: '100%' // Adjust as needed
    }}
    >
      <div className="flex-1 p-4">
        <h1 className="text-2xl text-white font-bold mb-10">Contact</h1>
        <img src={assets.hand_icon} alt="" />
        <p className='text-white mb-8'>I'd love to hear from you!!</p>
        <p className='text-white mb-8'>Here's how to contact me and stay up to date:</p>

        <div className="flex flex-column justify-start space-x-5 mb-10">
          <a  href='https://www.youtube.com/channel/UCZtCsouMiJC7ZK7Pl9Qk3pw'className="text-black-600 focus:outline-none">
            <FaYoutube
             className="h-8 w-8 md:h-12 md:w-12"
             color='red'
             />
            <label className=" text-white text-sm md:text-base">YouTube Channel</label>
          </a>
          <a href='uwihanganyeobed@gmail.com'className="text-black-600 focus:outline-none">
            <MdEmail
            color='skyblue'
            className="h-8 w-8 md:h-12 md:w-12" />
            <label className=" text-white text-sm md:text-base">Email</label>
          </a>
        </div>
      </div>
    </div>
  );
};

export default DonateComponent;
