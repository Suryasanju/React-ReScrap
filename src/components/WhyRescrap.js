import React from "react";

const WhyRescrap = () => {
  return (
    <section className="py-10 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center mb-8">
          Why ReScrap?
        </h2>
        <p className="text-lg text-center mb-8">
          Transform your scrap into cash with our web/app based solution - no
          hassle, no fuss.
        </p>
        <div className="flex justify-center items-center ">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 ">
            <Card
              image="/Features/feature-1.png"
              title="Book through Website"
            />
            <Card
              image="/Features/feature-2.png"
              title="Quick Pickup Service"
            />
            <Card
              image="/Features/feature-3.png"
              title="Actual Weight and Actual Rate"
            />
            <Card
              image="/Features/feature-4.png"
              title="Multiple Payment Options"
            />
            <Card
              image="/Features/feature-5.png"
              title="Swatch Bharat Contributions"
            />
            <Card image="/Features/feature-6.png" title="24/7 Support" />
          </div>
        </div>
      </div>
    </section>
  );
};

const Card = ({ image, title }) => {
  const colors = [
    "bg-blue-200",
    "bg-pink-200",
    "bg-green-200",
    "bg-yellow-200",
    "bg-indigo-200",
    "bg-purple-200",
  ];

  const randomIndex = Math.floor(Math.random() * colors.length);
  const randomColor = colors[randomIndex];

  return (
    <div className="bg-white rounded p-4 shadow-lg max-w-xs text-center hover:shadow-xl transition duration-300 banner-features hover:bg-gray-200 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
      <div className="mb-2 flex justify-center ">
        <img
          src={process.env.PUBLIC_URL + image}
          alt={title}
          className="w-40 h-28 object-cover rounded-full hover:opacity-80"
        />
      </div>
      <h3
        className={`text-xs font-semibold mb-2 hover-up text-gray-700 ${randomColor}`}
      >
        {title}
      </h3>
    </div>
  );
};

export default WhyRescrap;
