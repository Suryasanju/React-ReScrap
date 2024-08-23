import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Feedback = () => {
  const feedbackData = [
    {
      name: "John Doe",
      feedback:
        "Excellent service! I was able to recycle my scrap items hassle-free. Highly recommended!",
    },
    {
      name: "Jane Smith",
      feedback:
        "Rescrap has made scrap recycling so convenient. I appreciate their efforts in promoting sustainability.",
    },
    {
      name: "David Johnson",
      feedback:
        "Great platform for eco-friendly individuals. Keep up the good work!",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="bg-gray-100 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <h2 className="text-3xl font-bold text-center mb-6">
          What Say Our Clients!!!
        </h2>
        <p className="text-gray-600 text-center mb-10">
          Rescrap is committed to promoting sustainability and contributing to
          the global effort of reducing waste. By providing a user-friendly
          platform that enhances the accessibility of scrap materials, we play a
          vital role in fostering the circular economy.
        </p>
        <Slider {...settings}>
          {feedbackData.map((feedback, index) => (
            <div key={index}>
              <div className="mx-auto max-w-sm ">
                <div
                  className={`bg-white p-6 rounded-lg shadow-md ${
                    index === 1 ? "bg-blue-200" : ""
                  }`}
                >
                  <h3 className="text-lg font-semibold mb-2">
                    {feedback.name}
                  </h3>
                  <p className="text-gray-700">{feedback.feedback}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Feedback;
