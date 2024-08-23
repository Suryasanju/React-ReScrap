import React from "react";
import { RiPlantLine, RiBookOpenLine, RiRecycleLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const CharityPlan = () => {
  const navigate = useNavigate(); // Initialize navigate function

  // Function to handle navigation
  const handleDonateNow = () => {
    navigate("/pickup-request"); // Navigate to PickupRequest
  };

  return (
    <div className="bg-gray-100 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">
          Our Charity Plans
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Tree Plantations Card */}
          <div className="bg-white p-6 rounded-lg shadow-md transition duration-300 hover:bg-gray-200 transform hover:-translate-y-1 hover:scale-105">
            <RiPlantLine className="mx-auto h-6 w-6 mb-2 text-blue-500" />
            <h3 className="text-lg font-semibold text-center mb-4">
              Tree Plantations
            </h3>
            <p className="text-gray-600 mb-6">
              Welcome to ReScrap, a tree plantation charity initiative driven by
              our passion for environmental conservation and sustainability. At
              Green Roots, we firmly believe that trees are the foundation of a
              thriving ecosystem and a sustainable future. Our mission is to
              promote tree plantation initiatives by utilizing the proceeds from
              our scrap buy and sell platform.
            </p>
            <div className="text-center">
              <p className="text-gray-600 mb-2">Latest Offer - Save 30%</p>
              <p className="text-xl font-bold mb-4">149/ Month</p>
              <ul className="text-sm text-gray-600 list-inside list-disc inline-block text-left">
                <li>Water Quality Enhancement</li>
                <li>Wildlife Habitat Creation</li>
                <li>Air Quality Improvement</li>
                <li>Noise Reduction</li>
                <li>Water Conservation</li>
              </ul>
            </div>
            <div className="text-center mt-4">
              <button
                onClick={handleDonateNow}
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md hover:shadow-md"
              >
                Donate Now
              </button>
            </div>
          </div>

          {/* Kitab Ghar Card */}
          <div className="bg-white p-6 rounded-lg shadow-md transition duration-300 hover:bg-gray-200 transform hover:-translate-y-1 hover:scale-105">
            <RiBookOpenLine className="mx-auto h-6 w-6 mb-2 text-green-500" />
            <h3 className="text-lg font-semibold text-center mb-4">
              Kitab Ghar
            </h3>
            <p className="text-gray-600 mb-6">
              We are planning to establish Kitab Ghar in the future for the
              benefit of underprivileged. Kitab Ghar is a visionary initiative
              dedicated to establishing a haven of learning and empowerment for
              underprivileged children. Our mission is to bridge the educational
              gap and provide a nurturing environment where every child can
              flourish.
            </p>
            <div className="text-center">
              <p className="text-gray-600 mb-2">Latest Offer - Save 30%</p>
              <p className="text-xl font-bold mb-4">299/ Month</p>
              <ul className="text-sm text-gray-600 list-inside list-disc inline-block text-left">
                <li>Promoting Literacy</li>
                <li>Empowering Individuals</li>
                <li>Personal Development</li>
                <li>Career Development</li>
                <li>Bridging the Educational Gap</li>
              </ul>
            </div>
            <div className="text-center mt-4">
              <button
                onClick={handleDonateNow}
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md hover:shadow-md"
              >
                Donate Now
              </button>
            </div>
          </div>

          {/* Zero Waste Services Card */}
          <div className="bg-white p-6 rounded-lg shadow-md transition duration-300 hover:bg-gray-200 transform hover:-translate-y-1 hover:scale-105">
            <RiRecycleLine className="mx-auto h-6 w-6 mb-2 text-yellow-500" />
            <h3 className="text-lg font-semibold text-center mb-4">
              Zero Waste Services
            </h3>
            <p className="text-gray-600 mb-6">
              Zero Waste Society, where we champion a world without waste. Our
              mission is simple yet powerful: to create a society where
              resources are conserved, reused, and repurposed, leaving no room
              for waste. Through education, community engagement, and innovative
              solutions, we strive to minimize our environmental footprint and
              maximize our collective impact.
            </p>
            <div className="text-center">
              <p className="text-gray-600 mb-2">Latest Offer - Save 30%</p>
              <p className="text-xl font-bold mb-4">199/ Month</p>
              <ul className="text-sm text-gray-600 list-inside list-disc inline-block text-left">
                <li>Waste Prevention</li>
                <li>Recycling and Composting</li>
                <li>Reuse and Repair</li>
                <li>Climate Change Mitigation</li>
                <li>30 Days Money Back Guarantee</li>
              </ul>
            </div>
            <div className="text-center mt-4">
              <button
                onClick={handleDonateNow}
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md hover:shadow-md"
              >
                Donate Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CharityPlan;
