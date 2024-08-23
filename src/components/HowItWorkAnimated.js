import React from "react";

const HowItWorkAnimated = () => {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Step 1 */}
          <div className="text-center hover: transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
            <h3 className="text-2xl font-bold mb-4">Step 1</h3>
            <div className="px-4 py-4 border rounded-lg mt-4 bg-white shadow-lg">
              <video
                autoPlay
                loop
                muted
                poster="/individual/choose-material.webp"
                className="w-full rounded-lg"
                style={{ maxWidth: "100%", maxHeight: "200px" }}
              >
                <source src="/individual/check.m4v" type="video/m4v" />
                <source src="/individual/check.mp4" type="video/mp4" />
              </video>
              <p className="text-lg text-gray-700 mt-4 px-2">
                Choose material Out of our 40+ scrap categories choose the scrap
                <br></br>you want to sell.
              </p>
            </div>
          </div>
          {/* Step 2 */}
          <div className="text-center hover: transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
            <h3 className="text-2xl font-bold mb-4">Step 2</h3>
            <div className="px-4 py-4 border rounded-lg mt-4 bg-white shadow-lg">
              <video
                autoPlay
                loop
                muted
                poster="individual/schedule-pickup.webp"
                className="w-full rounded-lg"
                style={{ maxWidth: "100%", maxHeight: "200px" }}
              >
                <source src="/individual/calender.m4v" type="video/m4v" />
                <source src="individual/calender.mp4" type="video/mp4" />
              </video>
              <p className="text-lg text-gray-700 mt-4 px-2">
                Schedule Pickup Select your preferred date and add the scrap
                pick-up <br></br>location.
              </p>
            </div>
          </div>
          {/* Step 3 */}
          <div className="text-center hover:before: transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
            <h3 className="text-2xl font-bold mb-4">Step 3</h3>
            <div className="px-4 py-4 border rounded-lg mt-4 bg-white shadow-lg ">
              <video
                loop
                muted
                autoPlay
                poster="/individual/recieve-payment.webp"
                className="w-full rounded-lg"
                style={{ maxWidth: "100%", maxHeight: "200px" }}
              >
                <source src="/individual/billing.m4v" type="video/m4v" />
                <source src="/individual/billing.mp4" type="video/mp4" />
              </video>
              <p className="text-lg text-gray-700 mt-4 px-2">
                Receive Payment Receive payment in any one of the three payment
                modes via cash or UPI or IMPS.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorkAnimated;
