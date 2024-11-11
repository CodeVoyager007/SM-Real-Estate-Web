'use client';
import React from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
export default function HomePage() {
  const [text] = useTypewriter({
    words: [
      'SM Marketing',
      'We Believe in Long-term Customer Relationships',
      'Get Your Dream Home',
      'Your Dream Home Awaits',
      'The Keys To Your Home',
    ],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <div className="relative min-h-screen bg-black flex flex-col md:flex-row items-center text-white overflow-x-hidden page-container">
      {/* Left Side Content */}
      <div className="w-full md:w-1/2 p-8 md:p-12 lg:p-24 z-10">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-neonBlue mb-4">
          <span>{text}</span>
          <Cursor cursorColor="#00ffff" />
        </h1>
        <div className="flex flex-col md:flex-row space-x-0 md:space-x-6 mt-6">
          <a 
            href="/properties" 
            className="px-6 py-2 bg-gradient-to-r from-blue-500 to-green-500 text-black rounded-lg font-semibold hover:bg-opacity-90 transition"
          >
            View Properties
          </a>
          <a 
            href="/contact" 
            className="px-6 py-2 bg-gradient-to-r from-blue-500 to-green-500 text-black rounded-lg font-semibold hover:bg-opacity-90 transition"
          >
            Get in Touch
          </a>
        </div>
      </div>

      {/* Right Side: Video Background with Overlay */}
      <div className="absolute top-0 right-0 w-full md:w-1/2 h-full overflow-hidden">
        <video
          src="/home.mp4"
          autoPlay
          loop
          muted
          className="w-full h-full object-cover"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30"></div>
      </div>
    </div>
  );
}
