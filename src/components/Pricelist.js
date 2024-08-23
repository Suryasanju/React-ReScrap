import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

const PriceList = () => {
  const [filterVisible, setFilterVisible] = useState(false);

  const toggleFilterVisibility = () => {
    setFilterVisible(!filterVisible);
  };

  const products = [
    {
      img: "/product/dishwasher.jpg",
      title: "Dishwasher",
      price: "₹1500.00/piece",
      minOrder: "₹1500.00",
    },
    {
      img: "/product/printer.jpeg",
      title: "Printer",
      price: "₹350.00/kg",
      minOrder: "₹500.00",
    },
    {
      img: "/product/FAN.jpeg",
      title: "Fan",
      price: "₹200.00/piece",
      minOrder: "₹200.00",
    },
    {
      img: "/product/led tv.jpeg",
      title: "Led TV",
      price: "₹700.00/piece",
      minOrder: "₹1000.00",
    },
    {
      img: "/product/CRT TV.jpeg",
      title: "T V CRT TV",
      price: "₹300.00/piece",
      minOrder: "₹600.00",
    },
    {
      img: "/product/microwave.jpeg",
      title: "Microwave",
      price: "₹500.00/piece",
      minOrder: "₹700.00",
    },
    {
      img: "/product/gyser.jpeg",
      title: "Gyser 25ltr steel",
      price: "₹500.00/piece",
      minOrder: "₹700.00",
    },
    {
      img: "/product/gyser.jpeg",
      title: "Gyser 25 ltr copper",
      price: "₹800.00/piece",
      minOrder: "₹1000.00",
    },
    {
      img: "/product/Battery.jpg",
      title: "Black Battery",
      price: "₹70.00/kg",
      minOrder: "₹70.00",
    },
    {
      img: "/product/scooter.jpeg",
      title: "Scooter per piece",
      price: "₹2300.00/piece",
      minOrder: "₹2000.00",
    },
    {
      img: "/product/Bike (2).jpeg",
      title: "Bike per piece",
      price: "₹5500.00/piece",
      minOrder: "₹5500.00",
    },
    {
      img: "/product/scooty.jpeg",
      title: "Scooty per piece",
      price: "₹2500.00/piece",
      minOrder: "₹5000.00",
    },
    {
      img: "/product/Old Transfermer.jpeg",
      title: "Old Transfermer",
      price: "₹5500.00/piece",
      minOrder: "₹7200.00",
    },
    {
      img: "/product/Generator.jpeg",
      title: "Generator DG Set",
      price: "₹6500.00/piece",
      minOrder: "₹7200.00",
    },
    {
      img: "/product/Iron BAr.jpeg",
      title: "Iron Bar",
      price: "₹500.00/piece",
      minOrder: "₹2200.00",
    },
    {
      img: "/product/Track Iron.jpg",
      title: "Track Iron",
      price: "₹2500.00/piece",
      minOrder: "₹7200.00",
    },
    {
      img: "/product/Tractor.jpg",
      title: "Old Tractor",
      price: "₹35500.00/piece",
      minOrder: "₹50000.00",
    },
    {
      img: "/product/glass1.jpeg",
      title: "Bottle",
      price: "₹10.00/piece",
      minOrder: "₹200.00",
    },
    {
      img: "/product/e2.jpg",
      title: "Electronic Items",
      price: "₹2500.00/piece",
      minOrder: "₹2200.00",
    },
    {
      img: "/product/Iron angle.webp",
      title: "Iron Angle",
      price: "₹500.00/piece",
      minOrder: "₹2200.00",
    },
    {
      img: "/product/brash.jpg",
      title: "Brash",
      price: "₹2500.00/piece",
      minOrder: "₹2200.00",
    },
    {
      img: "/product/Steel .jpeg",
      title: "Steel",
      price: "₹2500.00/piece",
      minOrder: "₹2200.00",
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
          <h1 className="mb-6 text-2xl font-bold">Scrap Price List</h1>
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product, index) => (
              <li
                key={index}
                className="bg-white p-4 shadow-md rounded-lg transform transition-transform hover:scale-105 hover:shadow-lg"
              >
                <div className="scrap_img mb-4">
                  <figure>
                    <img
                      src={product.img}
                      alt={product.title}
                      className="w-full h-48 object-cover rounded-md"
                    />
                  </figure>
                </div>
                <div className="scrap_ttl font-semibold mb-2">
                  {product.title}
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

export default PriceList;
