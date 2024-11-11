'use client';
import React, { useState, useEffect } from 'react';

// Array of images
const images = [
  'image1.jpg',
  'image2.jpg',
  'image3.jpg',
  'image4.jpg',
  'image5.jpg',
  'image7.jpg',
  'image8.jpg',
  'image9.jpg',
  'image10.jpg',
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Move to next slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Move to previous slide
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  // Autoplay: Move to next image every 4 seconds
  useEffect(() => {
    const autoSlideInterval = setInterval(nextSlide, 4000); // 4 seconds
    return () => clearInterval(autoSlideInterval); // Cleanup interval on component unmount
  }, []);

  return (
    <div className="flex flex-col justify-center items-center bg-black relative">

      {/* Heading - Placed above the carousel */}
      <div className="w-full text-center text-white z-20 mb-6 sm:mb-8 md:mb-12">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-neon-blue">
          Explore the Visuals
        </h2>
      </div>

      {/* Image Carousel */}
      <div className="relative w-full sm:w-11/12 md:w-4/5 lg:w-3/4 h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-[90vh] overflow-hidden perspective-1000">

        {/* Left Arrow Button */}
        <button
          className="absolute top-1/2 left-5 transform -translate-y-1/2 text-3xl text-neon-blue hover:text-neon-green z-30"
          onClick={prevSlide}
        >
          &#10094;
        </button>

        {/* Right Arrow Button */}
        <button
          className="absolute top-1/2 right-5 transform -translate-y-1/2 text-3xl text-neon-blue hover:text-neon-green z-30"
          onClick={nextSlide}
        >
          &#10095;
        </button>

        {/* Image Slide */}
        <div className="relative h-full w-full flex items-center justify-center">
          {images.map((image, index) => {
            const position =
              index === currentIndex
                ? 'active-slide'
                : index === (currentIndex - 1 + images.length) % images.length
                ? 'left-slide'
                : index === (currentIndex + 1) % images.length
                ? 'right-slide'
                : 'hidden-slide';

            return (
              <img
                src={image}
                alt={`Slide ${index}`}
                key={index}
                className={`absolute w-full sm:w-3/4 md:w-2/3 lg:w-3/4 h-full object-cover border-4 border-white rounded-lg transition-opacity duration-800 ease-in-out transform ${
                  position === 'active-slide'
                    ? 'opacity-100 scale-100 z-20 rotate-y-0'
                    : position === 'left-slide'
                    ? 'opacity-50 scale-75 -translate-x-64 rotate-y-20 z-10'
                    : position === 'right-slide'
                    ? 'opacity-50 scale-75 translate-x-64 rotate-y--20 z-10'
                    : 'opacity-0 scale-50 rotate-y-90'
                }`}
                style={{
                  transition: 'transform 0.8s ease, opacity 0.8s ease',
                }}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
