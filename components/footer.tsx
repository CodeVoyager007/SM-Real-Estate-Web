"use client";
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowUpward } from '@mui/icons-material';
import { FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa';

export default function Footer() {
  const [isVisible, setIsVisible] = useState(false);

 
  useEffect(() => {
    setTimeout(() => setIsVisible(true), 500);
  }, []);

  // Back-to-top functionality 
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className={`w-full ${isVisible ? 'opacity-100' : 'opacity-0'} transition-opacity duration-1000 bg-black text-white py-10`}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Contact Information with collapsible sections for mobile */}
          <div>
            <h2 className="text-lg font-bold text-white">Contact Us</h2>
            <div className="space-y-1 mt-2">
              <p>Email: contact@realestate.com</p>
              <p>Phone: +1 234 567 890</p>
              <p>Address: 123 Real Estate St, Futuristic City</p>
            </div>
          </div>

          {/* Social Media Links with hover effects */}
          <div className="text-center">
            <h2 className="text-lg font-bold text-white">Follow Us</h2>
            <div className="flex justify-center space-x-4 mt-2">
              <div className="social-links">
                <a href="https://www.instagram.com/mughal.shiraz?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" className="social-icon">
                  <FaInstagram size={32} />
                </a>
                <a href="https://www.facebook.com/p/SM-Marketing-Property-Consultant-100095063778358/?_rdr" target="_blank" className="social-icon">
                  <FaFacebook size={32} />
                </a>
                <a href="https://www.twitter.com" target="_blank" className="social-icon">
                  <FaTwitter size={32} />
                </a>
              </div>
            </div>
          </div>

          {/* Copyright Information */}
          <div className="text-right">
            <h2 className="text-lg font-bold text-white">© 2024 SM Marketing Property Consultant Inc.</h2>
            <p>All rights reserved.</p>
          </div>
        </div>
        
       
        <div className="text-center mt-10">
          <Button
            onClick={scrollToTop}
            className="hover:bg-gradient-to-r hover:from-pink-500 hover:to-blue-500 bg-neon-blue text-black rounded-full px-4 py-2 transition-all duration-300 flex items-center justify-center animate-bounce"
            style={{
              boxShadow: '0 0 10px 2px rgba(255, 20, 147, 0.8), 0 0 20px 4px rgba(30, 144, 255, 0.8)', 
            }}
          >
            <ArrowUpward className="mr-2" fontSize="small" />
            Back to Top
          </Button>
        </div>
      </div>
    </footer>
  );
}
