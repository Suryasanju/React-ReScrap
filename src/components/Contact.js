import React, { useState } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    subject: "",
    message: "",
  });
  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);

    emailjs
      .send("Suryakant537", "template_7zsrqps", formData, "KEhzQ7KjEo6OWmxfy")
      .then(
        (result) => {
          console.log(result.text);
          setSuccess(true);
          setSending(false);
          setFormData({
            name: "",
            email: "",
            number: "",
            subject: "",
            message: "",
          });
        },
        (error) => {
          console.log(error.text);
          setError("Failed to send the message. Please try again later.");
          setSending(false);
        }
      );
  };

  return (
    <div className="container-xxl py-5">
      <div className="container px-lg-5 mx-auto">
        <div className="section-title text-center mx-auto mb-5 pb-4">
          <h1 className="text-4xl font-bold mb-3">Contact For Any Query</h1>
          <p className="text-lg text-gray-600">
            How to Reach? Feel free to call us, we will be very happy to assist
            you.
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-6 justify-center">
          <div className="w-full md:w-2/3 p-4 md:p-6 bg-white rounded-lg shadow-lg">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-semibold mb-2">Get in Touch</h2>
              <p className="text-gray-600 mb-4">
                Please fill out the form below and we will get back to you as
                soon as possible.
              </p>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                  />
                </div>
                <div>
                  <label
                    htmlFor="number"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Your Number
                  </label>
                  <input
                    type="text"
                    id="number"
                    name="number"
                    placeholder="Your Phone Number"
                    value={formData.number}
                    onChange={handleChange}
                    className="block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                  />
                </div>
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                  />
                </div>
                <div className="col-span-2">
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Leave a message here"
                    value={formData.message}
                    onChange={handleChange}
                    className="block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                    rows="4"
                  />
                </div>
                <div className="col-span-2">
                  <button
                    type="submit"
                    className="w-full py-3 px-6 bg-green-500 text-white font-semibold rounded-md shadow-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
                    disabled={sending}
                  >
                    {sending ? "Sending..." : "Send Message"}
                  </button>
                </div>
              </div>
            </form>
            {success && (
              <p className="text-green-500">Message sent successfully!</p>
            )}
            {error && <p className="text-red-500">{error}</p>}
          </div>
          <div className="w-full md:w-1/3 bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-4">Customer Support</h3>
            <p className="mb-2 text-gray-600">
              <i className="fa fa-map-marker-alt text-green-500 mr-2"></i>
              Dhurwa, Ranchi, Jharkhand
            </p>
            <p className="mb-2 text-gray-600">
              <i className="fa fa-phone-alt text-green-500 mr-2"></i>+91
              7903229854
            </p>
            <p className="mb-4 text-gray-600">
              <i className="fa fa-envelope text-green-500 mr-2"></i>
              ReScrapkro@gmail.com
            </p>
            <div className="border-t border-gray-200 pt-4 text-center">
              <h3 className="text-lg font-bold mb-3">Need Any Help?</h3>
              <a
                href="#"
                className="inline-block px-6 py-3 bg-green-500 text-white font-semibold rounded-md shadow-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
              >
                Let's Chat
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
