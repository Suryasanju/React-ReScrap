import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

const CopperItems = () => {
  const [filterVisible, setFilterVisible] = useState(false);

  const toggleFilterVisibility = () => {
    setFilterVisible(!filterVisible);
  };

  const CopperItems = [
    {
      id: 1,
      name: "Copper",
      price: 520.0,
      minOrder: 500.0,
      image: "/product/copper.jpg",
    },
    {
      id: 2,
      name: "Gyser 25 ltr copper",
      price: 800.0,
      minOrder: 250.0,
      image: "/product/gyser.jpeg",
    },
  ];

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="flex flex-wrap">
        {/* Toggle Button for Small Screens */}
        <div className="w-full mb-4 lg:hidden">
          <button
            onClick={toggleFilterVisibility}
            className="bg-blue-500 text-white px-4 py-2 rounded-md flex items-center"
          >
            {filterVisible ? (
              <>
                <FontAwesomeIcon icon={faTimes} className="mr-2" />
              </>
            ) : (
              <>
                <FontAwesomeIcon icon={faBars} className="mr-2" />
              </>
            )}
          </button>
        </div>

        {/* Filter Section */}
        <div
          className={`w-full lg:w-1/4 mb-4 lg:mb-0 lg:pr-4 ${
            filterVisible ? "" : "hidden lg:block"
          }`}
        >
          <div className="list_left p-4 bg-gray-100 rounded-lg shadow-md">
            <p className="text-sm text-right mb-4">
              <Link to="/" className="text-blue-500 underline">
                Clear All
              </Link>
            </p>

            <h2 className="text-lg font-bold hidden lg:block mb-4">
              Filter Results
            </h2>

            <h2 className="block lg:hidden text-lg font-bold mb-4 cursor-pointer">
              Filter Results <i className="fas fa-bars"></i>
            </h2>

            <div className="filter_dis">
              <div className="flter_bx">
                <div className="filt_hed text-md font-semibold mb-2">
                  Categories
                </div>
                <div id="categories_list" className="list_area">
                  <p className="left_attribute1 mb-2">
                    <Link
                      to="/paper"
                      className="text-blue-500 hover:text-blue-700"
                    >
                      Paper
                    </Link>
                  </p>
                  <p className="left_attribute1 mb-2">
                    <Link
                      to="/plastic"
                      className="text-blue-500 hover:text-blue-700"
                    >
                      Plastic
                    </Link>
                  </p>
                  <p className="left_attribute1 mb-2">
                    <Link
                      to="/iron-items"
                      className="text-blue-500 hover:text-blue-700"
                    >
                      Iron Items
                    </Link>
                  </p>
                  <p className="left_attribute1 mb-2">
                    <Link
                      to="/copper-items"
                      className="text-blue-500 hover:text-blue-700"
                    >
                      Copper Items
                    </Link>
                  </p>
                  <p className="left_attribute1 mb-2">
                    <Link
                      to="/electronic-items"
                      className="text-blue-500 hover:text-blue-700"
                    >
                      Electronic Items
                    </Link>
                  </p>
                  <p className="left_attribute1 mb-2">
                    <Link
                      to="/metal-others"
                      className="text-blue-500 hover:text-blue-700"
                    >
                      Metal-Others
                    </Link>
                  </p>
                  <p className="left_attribute1 mb-2">
                    <Link
                      to="/glass"
                      className="text-blue-500 hover:text-blue-700"
                    >
                      Glass
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Product List Section */}
        <div className="w-full lg:w-3/4">
          <h1 className="mb-6 text-2xl font-bold">Copper Items</h1>
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CopperItems.map((product, index) => (
              <li
                key={index}
                className="bg-white p-4 shadow-md rounded-lg transform transition-transform hover:scale-105 hover:shadow-lg"
              >
                <div className="scrap_img mb-4">
                  <figure>
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-48 object-cover rounded-md"
                    />
                  </figure>
                </div>
                <div className="scrap_ttl font-semibold mb-2">
                  {product.name}
                </div>
                <p className="scrap_price text-gray-700">
                  <b>Price: </b>
                  {product.price}
                </p>
                <p className="scrap_min_order text-gray-700">
                  <b>Min.Order Amount:</b> {product.minOrder}
                </p>
                <p className="mt-2 text-center">
                  <Link
                    to="/pickup-request"
                    className="bg-green-500 text-white px-4 py-2 rounded-md inline-block hover:bg-green-600"
                  >
                    Pickup Request
                  </Link>
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CopperItems;
