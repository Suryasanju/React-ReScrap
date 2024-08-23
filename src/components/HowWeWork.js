import React from "react";

const HowItWorks = () => {
  return (
    <section className="py-10 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center mb-8">
          How it works
        </h2>
        <p className="text-lg text-center mb-8">
          Simple and One click order Booking. You can place your order using our
          super user-friendly website as well as mobile application.
        </p>
        <div className="flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
            <HowItWorksCard
              image="/touch.svg"
              title="Place Order"
              description="Place your order in less than 30 seconds using our mobile application or website."
            />
            <HowItWorksCard
              image="/call.svg"
              title="Confirm order on call"
              description="Our Call center representative will call you and confirm the order."
            />
            <HowItWorksCard
              image="/relax.svg"
              title="Pickup Partner arrival at your door."
              description="Our pickup partner will arrive at your doorstep to collect your scraps."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const HowItWorksCard = ({ image, title, description }) => {
  return (
    <div className="relative group bg-white rounded p-6 shadow-lg max-w-md text-center transition duration-300 transform hover:scale-105 glassmorphism">
      <div className="mb-6 flex justify-center">
        <img
          src={process.env.PUBLIC_URL + image}
          alt={title}
          className="w-32 h-32 object-contain"
        />
      </div>
      <h3 className="text-lg font-semibold mb-4">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
      <div className="overlay absolute inset-0 bg-gray-100 bg-opacity-50 opacity-0 transition duration-300 flex items-center justify-center">
        <div className="overlay-content text-white text-center p-4">
          <h3 className="text-lg font-semibold mb-2">{title}</h3>
          <p className="text-sm">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
