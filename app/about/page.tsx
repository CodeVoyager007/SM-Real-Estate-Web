import React from 'react';
import Image from 'next/image';
import { FaBullhorn, FaHandsHelping, FaUsers, FaPhoneAlt } from 'react-icons/fa';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section 
        className="relative h-[60vh] bg-cover bg-center" 
        style={{ backgroundImage: "url('hero_image.jpg')" }}
      >
        <div className="bg-black bg-opacity-50 h-full flex items-center justify-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white text-center">𝖠𝖻𝗈𝗎𝗍 𝖲𝖬 𝖬𝖺𝗋𝗄𝖾𝗍𝗂𝗇𝗀</h1>
        </div>
      </section>

      {/* Company Overview */}
      <section className="px-4 py-16 flex flex-col md:flex-row items-center max-w-6xl mx-auto space-y-8 md:space-y-0 md:space-x-12">
        <Image 
          src="/about.png" 
          alt="Company Overview" 
          width={192} 
          height={192} 
          className="w-48 h-48 md:w-72 md:h-72 rounded-full shadow-lg" 
        />
        <div className="text-lg md:w-1/2 space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold">𝖶𝗁𝗈 𝖶𝖾 𝖠𝗋𝖾</h2>
          <p className="text-sm md:text-base">
            SM Marketing specializes in premium property offerings from top housing societies like HMR Waterfront, North Town Residency, and Saima Residency. Our expertise lies in connecting clients to top-tier plots, apartments, and houses, ensuring satisfaction at every level.
          </p>
        </div>
      </section>

      {/* Icons and Highlights Section */}
      <section className="px-4 py-12 bg-black">
        <div className="max-w-5xl mx-auto grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          <div className="flex items-center space-x-4">
            <FaBullhorn className="text-neonBlue text-4xl" /> 
            <div>
              <h3 className="text-xl md:text-2xl font-semibold">𝖲𝗉𝖾𝖼𝗂𝖺𝗅𝗂𝗓𝖺𝗍𝗂𝗈𝗇</h3>
              <p className="text-sm md:text-base">Offering a wide range of top properties to suit every need.&quot;</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <FaHandsHelping className="text-neonBlue text-4xl" /> 
            <div>
              <h3 className="text-xl md:text-2xl font-semibold">𝖮𝗎𝗋 𝖬𝗂𝗌𝗌𝗂𝗈𝗇</h3>
              <p className="text-sm md:text-base">Building lasting relationships through exceptional service.&quot;</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <FaUsers className="text-neonBlue text-4xl" /> 
            <div>
              <h3 className="text-xl md:text-2xl font-semibold">𝖮𝗎𝗿 𝖵𝖺𝗅𝗎𝖾𝗌</h3>
              <p className="text-sm md:text-base">Integrity, transparency, and excellence in every interaction.&quot;</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <FaPhoneAlt className="text-neonBlue text-4xl" />
            <div>
              <h3 className="text-xl md:text-2xl font-semibold">C𝗈𝗇𝖼𝖺𝗍 𝖴𝗌</h3>
              <p className="text-sm md:text-base">Email: <a href="mailto:shiraz.mughal@hotmail.com" className="text-neonBlue">shiraz.mughal@hotmail.com</a><br />Phone: (+92) 3222666066</p>
            </div>
          </div>
        </div>
      </section>

      
    </div>
  );
};

export default AboutPage;

