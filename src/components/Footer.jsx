import React from 'react'

const Footer = () => {
  return (
    <div>
      <div className="bg-teal-600 w-full h-72 mt-9 px-10 py-2 text-center">
        <p className="text-yellow-100 text-4xl  py-2">
          LET'S STAY IN TOUCH
        </p>
        <h2 className="text-black-100 text-lg py-3">
          Get our latest news and updates to your inbox
        </h2>
        <form className="max-w-2xl m-auto py-5">
          <div className="flex items-center border-b border-teal-700 py-2">
            <input
              className="appearance-none bg-transparent border-none  text-gray-700 mr-8 py-1  leading-tight focus:outline-none"
              type="text"
              placeholder="Enter Email Address"
              aria-label="Full name"
            />
            <button
              className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
              type="button"
            >
              Send
            </button>
          </div>
              </form>
              <p>By signing up, you consent to the privacy policys</p>
      </div>
    </div>
  );
}

export default Footer