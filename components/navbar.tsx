'use client';
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="relative w-full bg-black text-white p-4 shadow-lg">
      <div className="flex justify-between items-center">
        <div className="text-2xl font-bold">SM Marketing</div>

        <nav className="hidden md:flex text-xl space-x-6">
          <a
            href="/home"
            className="hover:text-neonBlue transition-colors duration-300"
          >
            Home
          </a>
          <a
            href="/about"
            className="hover:text-neonBlue transition-colors duration-300"
          >
            About
          </a>
          <a
            href="/properties"
            className="hover:text-neonBlue transition-colors duration-300"
          >
            Properties
          </a>
          <a
            href="/contact"
            className="hover:text-neonBlue transition-colors duration-300"
          >
            Contact
          </a>
          
          {/* Wrap the Button with an anchor tag */}
          <a href="/contact">
            <Button className="bg-gradient-to-r from-blue-500 to-green-500 hover:bg-opacity-90 transition text-black rounded-md">
              Get in Touch
            </Button>
          </a>
        </nav>

        {/* Hamburger Menu for Small Screens */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            <div
              className={`w-6 h-0.5 bg-white mb-2 transition-all ease-in-out duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}
            />
            <div
              className={`w-6 h-0.5 bg-white mb-2 transition-all ease-in-out duration-300 ${isOpen ? 'opacity-0' : ''}`}
            />
            <div
              className={`w-6 h-0.5 bg-white mb-2 transition-all ease-in-out duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden ${isOpen ? 'block' : 'hidden'} transition-all duration-300`}
      >
        <nav className="flex flex-col space-y-4 mt-4">
          <a
            href="/home"
            className="hover:text-neonBlue transition-colors duration-300"
          >
            Home
          </a>
          <a
            href="/about"
            className="hover:text-neonBlue transition-colors duration-300"
          >
            About
          </a>
          <a
            href="/properties"
            className="hover:text-neonBlue transition-colors duration-300"
          >
            Properties
          </a>
          <a
            href="/contact"
            className="hover:text-neonBlue transition-colors duration-300"
          >
            Contact
          </a>

      
          <a href="/contact">
            <Button className="bg-gradient-to-r from-blue-500 to-green-500 hover:bg-opacity-90 transition text-black rounded-md">
              Get in Touch
            </Button>
          </a>
        </nav>
      </div>
    </header>
  );
}
