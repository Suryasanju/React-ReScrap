import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { db, storage } from "../components/firebase"; // Ensure correct path
import { ref, set, push } from "firebase/database";
import {
  uploadBytes,
  ref as storageRef,
  getDownloadURL,
} from "firebase/storage";

const PickupRequest = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    donateOption: "Sell",
    country: "",
    city: "",
    landmark: "",
    postalCode: "",
    pickupDate: "",
    pickupTime: "",
    industry: "",
    weight: "",
    categories: [],
    image: null,
    description: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const navigate = useNavigate();

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    if (type === "checkbox") {
      setFormData((prevData) => ({
        ...prevData,
        [name]: checked
          ? [...prevData[name], value]
          : prevData[name].filter((item) => item !== value),
      }));
    } else if (type === "file") {
      setFormData((prevData) => ({
        ...prevData,
        [name]: files[0],
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let imageURL = "";
      if (formData.image) {
        // Upload image to Firebase Storage
        const imageRef = storageRef(storage, `images/${formData.image.name}`);
        await uploadBytes(imageRef, formData.image);
        imageURL = await getDownloadURL(imageRef);
      }

      // Save form data to Realtime Database
      const newPickupRequestRef = push(ref(db, "pickupRequests"));
      await set(newPickupRequestRef, {
        ...formData,
        imageURL, // Save the image URL
      });

      setIsSubmitted(true);
    } catch (error) {
      console.error("Error submitting form: ", error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-green-50">
      <div className="w-full max-w-2xl p-8 bg-white rounded-lg shadow-md">
        <div className="mb-8">
          <ul className="flex justify-between mb-4">
            {[
              "Personal Info",
              "Address Info",
              "Pickup Info",
              "Confirmation",
            ].map((step, index) => (
              <li
                key={index}
                className={`w-1/4 h-2 rounded-full ${
                  index <= currentStep ? "bg-green-500" : "bg-gray-300"
                }`}
              />
            ))}
          </ul>
          <h3 className="text-2xl font-semibold text-green-500 mb-4">
            {
              ["Personal Info", "Address Info", "Pickup Info", "Confirmation"][
                currentStep
              ]
            }
          </h3>
        </div>
        <form onSubmit={handleSubmit}>
          {currentStep === 0 && (
            <section>
              <div className="space-y-4">
                <div className="form-row">
                  <input
                    type="text"
                    name="name"
                    className="w-full p-2 border border-gray-300 rounded"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-row">
                  <input
                    type="email"
                    name="email"
                    className="w-full p-2 border border-gray-300 rounded"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-row">
                  <input
                    type="tel"
                    name="phone"
                    className="w-full p-2 border border-gray-300 rounded"
                    placeholder="Phone number"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-row">
                  <input
                    type="text"
                    name="address"
                    className="w-full p-2 border border-gray-300 rounded"
                    placeholder="Street address"
                    value={formData.address}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-check mt-2">
                  <label className="inline-flex items-center mr-4">
                    <input
                      type="radio"
                      name="donateOption"
                      value="Sell"
                      checked={formData.donateOption === "Sell"}
                      onChange={handleChange}
                      className="form-radio text-green-500"
                    />
                    <span className="ml-2">Sell</span>
                  </label>
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      name="donateOption"
                      value="Donate"
                      checked={formData.donateOption === "Donate"}
                      onChange={handleChange}
                      className="form-radio text-green-500"
                    />
                    <span className="ml-2">Donate your Scrap</span>
                  </label>
                </div>
              </div>
            </section>
          )}

          {currentStep === 1 && (
            <section>
              <div className="space-y-4">
                <div className="form-row">
                  <input
                    type="text"
                    name="country"
                    className="w-full p-2 border border-gray-300 rounded"
                    placeholder="Country"
                    value={formData.country}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-row">
                  <input
                    type="text"
                    name="city"
                    className="w-full p-2 border border-gray-300 rounded"
                    placeholder="City"
                    value={formData.city}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-row">
                  <input
                    type="text"
                    name="landmark"
                    className="w-full p-2 border border-gray-300 rounded"
                    placeholder="Landmark"
                    value={formData.landmark}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-row">
                  <input
                    type="text"
                    name="postalCode"
                    className="w-full p-2 border border-gray-300 rounded"
                    placeholder="Postal/Zip code"
                    value={formData.postalCode}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
            </section>
          )}

          {currentStep === 2 && (
            <section>
              <div className="space-y-4">
                <div className="form-row">
                  <input
                    type="date"
                    name="pickupDate"
                    className="w-full p-2 border border-gray-300 rounded"
                    value={formData.pickupDate}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-row">
                  <input
                    type="time"
                    name="pickupTime"
                    className="w-full p-2 border border-gray-300 rounded"
                    value={formData.pickupTime}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-row">
                  <input
                    type="text"
                    name="industry"
                    className="w-full p-2 border border-gray-300 rounded"
                    placeholder="Industry (if applicable)"
                    value={formData.industry}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-row">
                  <input
                    type="number"
                    name="weight"
                    className="w-full p-2 border border-gray-300 rounded"
                    placeholder="Weight (in kg)"
                    value={formData.weight}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-check mt-2">
                  <label className="inline-flex items-center mr-4">
                    <input
                      type="checkbox"
                      name="categories"
                      value="Paper"
                      checked={formData.categories.includes("Paper")}
                      onChange={handleChange}
                      className="form-checkbox text-green-500"
                    />
                    <span className="ml-2">Paper</span>
                  </label>
                  <label className="inline-flex items-center mr-4">
                    <input
                      type="checkbox"
                      name="categories"
                      value="Metal"
                      checked={formData.categories.includes("Metal")}
                      onChange={handleChange}
                      className="form-checkbox text-green-500"
                    />
                    <span className="ml-2">Metal</span>
                  </label>
                  <label className="inline-flex items-center mr-4">
                    <input
                      type="checkbox"
                      name="categories"
                      value="Plastic"
                      checked={formData.categories.includes("Plastic")}
                      onChange={handleChange}
                      className="form-checkbox text-green-500"
                    />
                    <span className="ml-2">Plastic</span>
                  </label>
                </div>
                <div className="form-row">
                  <input
                    type="file"
                    name="image"
                    className="w-full p-2 border border-gray-300 rounded"
                    onChange={handleChange}
                    accept="image/*"
                  />
                </div>
                <div className="form-row">
                  <textarea
                    name="description"
                    className="w-full p-2 border border-gray-300 rounded"
                    placeholder="Additional description"
                    value={formData.description}
                    onChange={handleChange}
                    rows="4"
                  />
                </div>
              </div>
            </section>
          )}

          {currentStep === 3 && (
            <section className="text-center">
              <h4 className="text-lg font-semibold text-gray-700 mb-4">
                Please review your information before submission.
              </h4>
              <button
                type="submit"
                className="px-4 py-2 bg-green-500 text-white rounded"
              >
                Submit Request
              </button>
            </section>
          )}

          <div className="flex justify-between mt-8">
            {currentStep > 0 && (
              <button
                type="button"
                className="px-4 py-2 bg-gray-500 text-white rounded"
                onClick={() => setCurrentStep((prevStep) => prevStep - 1)}
              >
                Previous
              </button>
            )}
            {currentStep < 3 && (
              <button
                type="button"
                className="px-4 py-2 bg-green-500 text-white rounded"
                onClick={() => setCurrentStep((prevStep) => prevStep + 1)}
              >
                Next
              </button>
            )}
          </div>
        </form>

        {isSubmitted && (
          <div className="mt-8 text-center">
            <h4 className="text-2xl font-bold text-green-500">
              Your pickup request has been submitted successfully!
            </h4>
            <button
              className="mt-4 px-4 py-2 bg-green-500 text-white rounded"
              onClick={() => navigate("/")}
            >
              Go to Homepage
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default PickupRequest;
