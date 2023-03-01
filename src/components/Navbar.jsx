import React from 'react'

const Navbar = () => {
  return (
    <div className=" bg-teal-600 w-full py-7 flex justify-between ">
      <div className="text-white text-3xl pl-3">SearchYourImages.com</div>
      <div className="text-white text-lg pl-3">
        <ul>
          <li className="inline-block px-3">Home</li>
          <li className="inline-block px-3">Services</li>
          <li className="inline-block px-3">About</li>
          <li className="inline-block px-3">Contact</li>
        </ul>
      </div>
      <div className="text-white text-lg pl-3 px-3  ">
        <ul>
          <li className="inline-block px-3 border-2 border-white mx-2 hover:bg-teal-700 rounded-sm">
            Login
          </li>
          <li className="inline-block px-2 border-2 border-white hover:bg-teal-700 rounded-sm">
            Sign Up
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar