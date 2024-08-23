import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Subscribe Section */}
          <div className="flex flex-col">
            <h5 className="font-bold mb-4 text-lg">
              Subscribe to Our Newsletter
            </h5>
            <div className="relative rounded-lg overflow-hidden bg-white shadow-md">
              <input
                className="border-2 border-gray-300 focus:outline-none focus:border-blue-500 py-2 px-3 w-full"
                type="email"
                placeholder="Enter your email"
              />
              <button
                type="button"
                className="bg-blue-500 text-white font-bold rounded-md absolute top-0 right-0 mt-1 mr-1 px-4 py-2 hover:bg-blue-600 transition duration-300"
              >
                Subscribe
              </button>
            </div>
          </div>

          {/* About Us Section */}
          <div>
            <h5 className="font-bold mb-4">About Us</h5>
            <ul className="list-none space-y-2">
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="#" className="text-gray-300 hover:text-white">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="#" className="text-gray-300 hover:text-white">
                  Terms & Condition
                </Link>
              </li>
              <li>
                <Link to="/#" className="text-gray-300 hover:text-white">
                  Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Our Services Section */}
          <div>
            <h5 className="font-bold mb-4">Our Services</h5>
            <ul className="list-none space-y-2">
              <li>
                <Link to="/#" className="text-gray-300 hover:text-white">
                  Zero Waste Society
                </Link>
              </li>
              <li>
                <Link to="/charity" className="text-gray-300 hover:text-white">
                  Charity Plan
                </Link>
              </li>
              <li>
                <Link to="/#" className="text-gray-300 hover:text-white">
                  Do Not Recycling
                </Link>
              </li>
            </ul>
          </div>

          {/* Get In Touch Section */}
          <div>
            <h5 className="font-bold mb-4">Get In Touch</h5>
            <p className="mb-2">
              <i className="fas fa-map-marker-alt mr-2"></i>Ranchi, Jharkhand
            </p>
            <p className="mb-2">
              <i className="fas fa-phone-alt mr-2"></i>+91 9999999999
            </p>
            <p className="mb-2">
              <i className="fas fa-envelope mr-2"></i>ReScrapkro@example.com
            </p>
            <div className="flex space-x-4 mt-4">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white"
              >
                <i className="fab fa-youtube"></i>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto mt-12 px-4">
        <div className="flex flex-col md:flex-row justify-between items-center border-t border-gray-700 pt-6">
          <p className="mb-4 md:mb-0">
            &copy; <span className="font-semibold">ReScrap</span>, All Rights
            Reserved.
          </p>
          <p className="mb-4 md:mb-0">
            Designed By <span className="font-semibold">Surya Kant Prasad</span>
          </p>
          <div className="flex space-x-4">
            <Link to="/home" className="text-gray-300 hover:text-white">
              Home
            </Link>
            <Link to="/cookies" className="text-gray-300 hover:text-white">
              Cookies
            </Link>
            <Link to="/help" className="text-gray-300 hover:text-white">
              Help
            </Link>
            <Link to="/faqs" className="text-gray-300 hover:text-white">
              FAQs
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
