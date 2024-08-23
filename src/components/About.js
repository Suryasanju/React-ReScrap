import React, { useState, useEffect } from "react";

const About = () => {
  const [loaded, setLoaded] = useState(false);

  // Set loaded to true after 1 second to simulate page load
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center">
          {/* About Content */}
          <div className="lg:w-1/2 lg:pr-12">
            <h2 className="text-4xl font-bold mb-6 lg:mb-10">
              <span className="text-orange-500">Welcome</span> to{" "}
              <span className="text-green-500">ReScrap</span>
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed lg:mb-10">
              ReScrap is a leading waste management company committed to
              achieving a waste-free India. With a strong dedication to
              environmental sustainability and carbon neutrality, we strive to
              make a positive impact on the planet.
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed lg:mb-10">
              Our mission is to revolutionize waste management by offering
              innovative solutions that promote the 3 R's:{" "}
              <span className="font-bold">reduce</span>,{" "}
              <span className="font-bold">reuse</span>, and{" "}
              <span className="font-bold">recycle</span>. Through our efforts,
              we've successfully diverted an impressive amount of waste from
              landfills and incinerators, contributing to the conservation of
              our natural resources.
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed lg:mb-10">
              At ReScrap, we believe in the power of collaboration and
              collective action. By embracing responsible waste management
              practices, we can create a cleaner and healthier future for
              generations to come. Join us on our journey towards a sustainable
              and waste-free India.
            </p>
          </div>
          {/* Image with Zoom Effect */}
          <div
            className={`lg:w-1/2 lg:pl-12 mt-8 lg:mt-0 ${
              loaded ? "zoom-in" : ""
            }`}
          >
            <img
              src="/about.png"
              alt="About ReScrap"
              className="rounded-lg mx-auto lg:mx-0"
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
