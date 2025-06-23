import React from "react";
import { assets } from "./../assets/assets";

const Footer = () => {
  return (
    <div className="md: mx-10">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        <div>
          <img src={assets.logo} alt="" />
          <p className="w-full md:w-2/3 text-gray-600 leading-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum earum
            optio explicabo quia. Ipsam vitae laboriosam consequatur? Modi quis
            culpa, id veritatis iste perferendis minima accusantium ea dolore
            nam quas?
          </p>
        </div>
        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>Home</li>
            <li>About us</li>
            <li> Contact us</li>
            <li> Privacy Policy</li>
          </ul>
        </div>
        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>phone-no</li>
            <li>email</li>
          </ul>
        </div>
      </div>

      <div>
        <hr />
        <p>copyrights reserved</p>
      </div>
    </div>
  );
};

export default Footer;
