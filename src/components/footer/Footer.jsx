import assets from "../../assets";
import { FaSquareTwitter } from "react-icons/fa6";
import { CiLinkedin } from "react-icons/ci";
import { CiInstagram } from "react-icons/ci";
import { FaFacebookSquare } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="flex flex-col b-t-rad-3">
      <div className="bg-[#283440] flex flex-row items-stretch justify-between pb-4">
        <div className="flex-1 flex flex-col pl-8">
          <h3 className="text-[#faad14] text-lg font-bold">Powered By:</h3>
          <img src={assets.user} alt="Powered by" className="w-44 cursor-pointer" />
        </div>
        <div className="flex-1 flex flex-col gap-4">
          <h3 className="text-[#faad14] text-lg font-bold">Quick Links:</h3>
          <Link to='/'>
          <a href="/" className="text-[#bec6d4] text-base">
            <label>Home</label>
          </a>
          </Link>
          <Link to='/projects'>
          <a href="/" className="text-[#bec6d4] text-base">
            <label>Services</label>
          </a>
          </Link>
          <Link to='/donate'>
          <a href="/" className="text-[#bec6d4] text-base">
            <label>Donate</label>
          </a>
          </Link>
          <Link to='/Contact'>
          <a href="/" className="text-[#bec6d4] text-base">
            <label>Contacts</label>
          </a>
          </Link>
        </div>
        <div className="flex-1 flex flex-col gap-4">
          <h3 className="text-[#faad14] text-lg font-bold">Get in touch</h3>
          <span className="text-[#bec6d4]">
            <label>Questions or feedback?</label>
            <br />
            <label>We‘d love to hear from you</label>
          </span>
          <div className="flex flex-row gap-8">
            <a href="/" className="text-[#bec6d4]">
              <FaSquareTwitter className="w-6 h-6" />
            </a>
            <a href="/" className="text-[#bec6d4]">
              <CiLinkedin className="w-6 h-6" />
            </a>
            <a href="/" className="text-[#bec6d4]">
              <FaFacebookSquare className="w-6 h-6" />
            </a>
            <a href="/" className="text-[#bec6d4]">
              <CiInstagram className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
      <div className="py-4 bg-[#1c242c] flex justify-center items-center text-[#bec6d4]">
        <label>Vargas_Tec - © 2024 All rights reserved</label>
      </div>
    </div>
  );
};

export default Footer;
