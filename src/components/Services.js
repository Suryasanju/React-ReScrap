import React, { useEffect, useState } from "react";

const Services = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 500);
  }, []);

  return (
    <div className={`bg-gray-100 py-20 ${loaded ? "slide-in" : ""}`}>
      <style>
        {`
          @keyframes slideIn {
            from {
              transform: translateY(-100%);
              opacity: 0;
            }
            to {
              transform: translateY(0);
              opacity: 1;
            }
          }

          .slide-in {
            animation: slideIn 0.5s ease-in-out forwards;
          }
        `}
      </style>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-2">Our Services</h2>
        <p className="text-center text-gray-600 mb-12">
          Achieving Sustainable Solutions Made Effortless.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* For Individuals */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:bg-gray-200 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
            <h3 className="text-lg font-semibold mb-4 text-blue-600">
              For Individuals
            </h3>
            <ul className="divide-y divide-gray-200">
              <li className="py-4">
                <div className="flex items-center space-x-4">
                  <span className="rounded-full bg-blue-500 text-white p-2">
                    <i className="fas fa-box"></i>
                  </span>
                  <div>
                    <h4 className="font-semibold">Scrap Collection</h4>
                    <p className="text-gray-600">
                      Digital Solution for Door-to-Door Recycling Pickup of
                      Scrap Items.
                    </p>
                  </div>
                </div>
              </li>
              <li className="py-4">
                <div className="flex items-center space-x-4">
                  <span className="rounded-full bg-blue-500 text-white p-2">
                    <i className="fas fa-leaf"></i>
                  </span>
                  <div>
                    <h4 className="font-semibold">EcoFriendly Community</h4>
                    <p className="text-gray-600">
                      An Innovative Digital Solution for Waste Reduction and
                      Resource Conservation.
                    </p>
                  </div>
                </div>
              </li>
              <li className="py-4">
                <div className="flex items-center space-x-4">
                  <span className="rounded-full bg-blue-500 text-white p-2">
                    <i className="fas fa-recycle"></i>
                  </span>
                  <div>
                    <h4 className="font-semibold">Scrapping Service</h4>
                    <p className="text-gray-600">
                      Simple and Sustainable Scrap Removal.
                    </p>
                  </div>
                </div>
              </li>
              <li className="py-4">
                <div className="flex items-center space-x-4">
                  <span className="rounded-full bg-blue-500 text-white p-2">
                    <i className="fas fa-headset"></i>
                  </span>
                  <div>
                    <h4 className="font-semibold">24/7 Support</h4>
                    <p className="text-gray-600">
                      Scrap Solutions Unleashed: 24/7 Eco-Warriors at Your
                      Service.
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </div>

          {/* For Organization */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:bg-gray-200 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
            <h3 className="text-lg font-semibold mb-4 text-green-600">
              For Organization
            </h3>
            <ul className="divide-y divide-gray-200">
              <li className="py-4">
                <div className="flex items-center space-x-4">
                  <span className="rounded-full bg-green-500 text-white p-2">
                    <i className="fas fa-trash"></i>
                  </span>
                  <div>
                    <h4 className="font-semibold">Zero waste services</h4>
                    <p className="text-gray-600">
                      Pioneering a Waste-Free Revolution, One Step at a Time.
                    </p>
                  </div>
                </div>
              </li>
              <li className="py-4">
                <div className="flex items-center space-x-4">
                  <span className="rounded-full bg-green-500 text-white p-2">
                    <i className="fas fa-hands-helping"></i>
                  </span>
                  <div>
                    <h4 className="font-semibold">Social Works</h4>
                    <p className="text-gray-600">
                      75 kilograms waste diverted from landfills.
                    </p>
                  </div>
                </div>
              </li>
              <li className="py-4">
                <div className="flex items-center space-x-4">
                  <span className="rounded-full bg-green-500 text-white p-2">
                    <i className="fas fa-tree"></i>
                  </span>
                  <div>
                    <h4 className="font-semibold">Tree Plantations</h4>
                    <p className="text-gray-600">
                      Tree Plantations for a Sustainable Future.
                    </p>
                  </div>
                </div>
              </li>
              <li className="py-4">
                <div className="flex items-center space-x-4">
                  <span className="rounded-full bg-green-500 text-white p-2">
                    <i className="fas fa-book"></i>
                  </span>
                  <div>
                    <h4 className="font-semibold">Kitab Ghar</h4>
                    <p className="text-gray-600">
                      We are planning to establish Kitab Ghar in the future for
                      the benefit of underprivileged children.
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
