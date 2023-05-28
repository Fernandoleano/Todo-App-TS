import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left">
            <h4 className="text-lg font-semibold text-white mb-2">Our Mission</h4>
            <p className="text-sm text-gray-400">
              At TaskMaster, we are dedicated to helping you stay organized, focused, and achieve your goals. We provide a user-friendly platform to manage your tasks effectively, prioritize your work, and make progress towards your objectives. Let us be your companion on your journey to success.
            </p>
          </div>
          <a href="https://github.com/fernandoleano" className="text-gray-400 hover:text-white mt-4 md:mt-0">
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 1C5.372 1 0 6.373 0 12c0 5.303 3.438 9.8 8.205 11.385.6.11.819-.255.819-.57 0-.282-.01-1.022-.015-2.005-3.338.724-4.042-1.61-4.042-1.61C3.536 18.07 2.275 17.7 2.275 17.7c-1.091-.745.082-.73.082-.73 1.207.086 1.843 1.24 1.843 1.24 1.07 1.832 2.809 1.304 3.49.997.108-.776.417-1.305.758-1.605-2.653-.3-5.44-1.326-5.44-5.903 0-1.305.465-2.368 1.234-3.204-.127-.3-.534-1.52.117-3.16 0 0 1.005-.32 3.3 1.227A11.527 11.527 0 0 1 12 6.485c1.08 0 2.165.146 3.194.426 2.29-1.547 3.294-1.227 3.294-1.227.653 1.64.247 2.86.12 3.16.768.836 1.233 1.9 1.233 3.204 0 4.587-2.79 5.6-5.446 5.894.428.367.81 1.096.81 2.214 0 1.599-.014 2.886-.014 3.283 0 .315.213.686.825.568C20.567 21.795 24 17.298 24 12c0-5.627-5.372-10-12-10z"
              />
            </svg>
          </a>
        </div>
        <p className="text-center text-gray-400 mt-4">© 2023 Fernando Leano. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
