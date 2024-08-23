import React from "react";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/pickup-request"); // Replace with the actual path to your PickupRequest component
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-center bg-gradient-to-r from-gray-800 to-gray-900 p-8">
      {/* Left Side - Text Content */}
      <div className="max-w-md md:mr-8 mb-8 md:mb-0 text-center md:text-left text-white">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          SELL YOUR <br /> SCRAP IN ONE <br /> CLICK
        </h1>
        <p className="text-sm md:text-lg mb-6">
          Join the sustainable revolution, sell your scrap with us. A cleaner
          home, a cleaner planet - sell your scrap today.
        </p>
        <button
          onClick={handleButtonClick}
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mx-auto md:mx-0 block"
        >
          Sell Your Scrap
        </button>
      </div>

      {/* Right Side - Image */}
      <div className="max-w-md">
        <img src="/1.png" alt="Sell Scrap" className="w-full h-auto rounded" />
      </div>
    </div>
  );
};

export default Hero;
