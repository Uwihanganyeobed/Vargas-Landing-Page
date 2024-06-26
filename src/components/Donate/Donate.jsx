import React from 'react';
import assets from "../../assets";
import bg_img from '../../assets/jonathan-bean-sbZU1j31ggE-unsplash.jpg'
const Donate = () => {
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
        <h1 className="text-2xl text-white font-bold mb-10">Donate</h1>
        <p className=' text-2xl text-white mb-8'>Thanks for supporting the Obed channel!</p>
        <p className=' text-2xl  text-white mb-8'>I have coding projects because I believe it can completely transform a company's life and help them become financially secure.</p>
        <p className=' text-2xl  text-white mb-8'>Your donation will help cover the costs of running the website and will help purchase necessary equipment and software for making videos.</p>
        <p className=" text-2xl text-orange-500 mb-8">(Note: Vargas tech is not an officially registered charity so a tax slip currently cannot be provided for your donation)</p>
        <div className=" mt-4 flex justify-center space-x-5 mb-10">
          <button className="bg-white border border-green-500 text-green-500 hover:bg-green-500 hover:text-white rounded px-10 py-2">$5</button>
          <button className="bg-white border border-green-500 text-green-500 hover:bg-green-500 hover:text-white rounded px-10 py-2">$20</button>
          <button className="bg-white border border-green-500 text-green-500 hover:bg-green-500 hover:text-white rounded px-10 py-2">$50</button>
        </div>
        <div className="mt-4 flex items-center space-x-2">
          <input 
            type="number" 
            placeholder="Custom amount" 
            className="border border-green-500 rounded-l px-1 py-2 flex-1"
          />
          <button className="bg-green-500 text-white rounded-r px-4 py-2">Donate</button>
        </div>
      </div>
      <div className="flex-1 p-4">
        <img src={assets.user} alt="SupportImage" className="w-100"/>
      </div>
    </div>
  );
};

export default Donate;
