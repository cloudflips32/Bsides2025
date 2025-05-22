import React, { useState, useEffect } from 'react';

const CallForSpeakersModal = ({ isOpen, onClose }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-4 rounded-lg mx-auto md:max-w-md md:w-1/2 md:h-[55%] md:items-center md:flex-col items-center justify-center shadow-lg w-full h-3/4 relative">
        <button
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-900 text-2xl"
          onClick={onClose}
        >
          &times;
        </button>
        <div className="w-full h-full flex flex-col md:flex-row md:items-center md:justify-between">
          <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 w-full max-w-2xl">
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-2xl font-semibold text-gray-800">Call for Speakers</h1>
              <span className="bg-green-100 text-green-700 text-sm font-medium px-3 py-1 rounded-full">
                open, 4 months left
              </span>
            </div>

            <div class="grid md:grid-cols-2 gap-y-4 md:gap-y-0 md:gap-x-6 mb-6 pb-6 border-b border-gray-200">
              <div>
                <p class="text-gray-600 text-sm mb-1">Call opens at 12:00 AM</p>
                <p class="text-lg font-bold text-gray-800">15 May 2025</p>
              </div>
              <div class="md:text-right">
                <p class="text-gray-600 text-sm mb-1">Call closes at 11:59 PM</p>
                <p class="text-lg font-bold text-gray-800">30 Sep 2025</p>
              </div>
            </div>

            <div class="flex flex-col md:flex-row md:justify-between md:items-center mb-6">
              <div class="text-gray-600 text-sm mb-4 md:mb-0">
                <p>Call closes in Eastern Daylight Time (UTC-04:00) timezone.</p>
                <p>Closing time in your timezone (America/New_York) is <span class="font-semibold">30 Sep 2025 11:59 pm</span>.</p>
              </div>
              <button class="bg-gray-200 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-300 transition-colors duration-200 flex items-center justify-center md:justify-start">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Add to calendar
              </button>
            </div>

            <div class="mb-8">
              <div class="flex items-center text-gray-600 mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M21 13.255A23.564 23.564 0 0112 15c-3.185 0-6.223-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span class="text-lg font-semibold">event fee</span>
              </div>
              <p class="text-green-700 text-xl font-bold ml-7">free for speakers</p>
            </div>

            <div class="text-center">
              <button class="bg-teal-600 text-white font-bold py-3 px-8 rounded-lg shadow-md hover:bg-teal-700 transition-colors duration-200 w-full md:w-auto">
                Submit a session
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallForSpeakersModal;
