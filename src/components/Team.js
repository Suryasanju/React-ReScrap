import React from "react";
import { FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa";

const Team = () => {
  const teamMembers = [
    {
      name: "Surya Kant Prasad",
      designation: "CEO",
      photo: "/team-1.jpeg",
      socialMedia: {
        instagram: "https://www.instagram.com/",
        twitter: "https://twitter.com/",
        facebook: "https://www.facebook.com/",
      },
    },
    {
      name: "Jane Smith",
      designation: "COO",
      photo: "/team-2.jpg",
      socialMedia: {
        instagram: "https://www.instagram.com/",
        twitter: "https://twitter.com/",
        facebook: "https://www.facebook.com/",
      },
    },
    {
      name: "David Johnson",
      designation: "CTO",
      photo: "/team-3.jpg",
      socialMedia: {
        instagram: "https://www.instagram.com/",
        twitter: "https://twitter.com/",
        facebook: "https://www.facebook.com/",
      },
    },
    {
      name: "Emily Brown",
      designation: "CFO",
      photo: "/team-4.jpg",
      socialMedia: {
        instagram: "https://www.instagram.com/",
        twitter: "https://twitter.com/",
        facebook: "https://www.facebook.com/",
      },
    },
  ];

  return (
    <div className="bg-gray-100 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-6">
          Our Team Members
        </h2>
        <p className="text-gray-600 text-center mb-10">
          At Rescrap, we believe that a strong team is the backbone of success.
          We are proud to introduce our team members, a dedicated group of
          professionals with extensive knowledge and expertise in the scrap
          buying and selling industry. Together, we strive to provide you with
          the best possible experience on our platform.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:bg-gray-200 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105"
            >
              <img
                src={member.photo}
                alt={member.name}
                className="w-32 h-32 mx-auto mb-4 rounded-full"
              />
              <h3 className="text-lg font-semibold mb-2 text-center">
                {member.name}
              </h3>
              <p className="text-gray-600 mb-4 text-center">
                {member.designation}
              </p>
              <div className="flex justify-center space-x-4">
                <a
                  href={member.socialMedia.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram className="text-gray-600 hover:text-blue-500 cursor-pointer" />
                </a>
                <a
                  href={member.socialMedia.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaTwitter className="text-gray-600 hover:text-blue-500 cursor-pointer" />
                </a>
                <a
                  href={member.socialMedia.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebook className="text-gray-600 hover:text-blue-500 cursor-pointer" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
