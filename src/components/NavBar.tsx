import React from 'react';

const NavBar: React.FC = () => {
  return (
    <nav className="bg-gray-800 py-2">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex items-center">
            <span className="text-white text-lg font-semibold">TaskMaster</span>
          </div>
          <div className="flex items-center">
            <button className="bg-gray-700 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
              <img className="h-6 w-6 rounded-full" src="https://cdn2.iconfinder.com/data/icons/membership-account-outline/200/coder-512.png" alt="Profile" />
            </button>
            <button className="ml-4 bg-gray-700 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
