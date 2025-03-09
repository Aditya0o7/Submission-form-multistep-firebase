import { useState } from "react";

const Step2 = ({ nextStep, prevStep, formData, setFormData }) => {
  const [phoneError, setPhoneError] = useState("");

  // List of Indian states (manually created)
  const indianStates = [
    "Andaman and Nicobar Islands",
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jammu and Kashmir",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Lakshadweep",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Puducherry",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal"
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setPhoneError("");

    // Validate that phone number is at least 10 digits
    if (formData.phoneNo.trim().length < 10) {
      setPhoneError("Phone number must be at least 10 digits.");
      return;
    }

    // Proceed to next step if validation passes
    nextStep();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3 className="text-md font-semibold">
        Give us a way to connect to you!
      </h3>

      <h2 className="text-lg font-semibold">Email:</h2>
      <input
        className="mt-2 w-full p-2 border rounded"
        placeholder="Your email address"
        type="email"
        required
        value={formData.email || ""}
        onChange={(e) =>
          setFormData({ ...formData, email: e.target.value })
        }
      />

      <h2 className="mt-2 text-lg font-semibold">Phone Number:</h2>
      <div className="relative">
        <span className="absolute inset-y-7 left-0 flex items-center pl-2 text-gray-500">
          +91
        </span>
        <input
          className="mt-2 w-full p-2 pl-10 border rounded"
          placeholder="Enter 10 digit phone number"
          type="number"
          required
          value={formData.phoneNo || ""}
          onChange={(e) =>
            setFormData({ ...formData, phoneNo: e.target.value })
          }
        />
      </div>
      {phoneError && (
        <p className="text-red-500 text-sm mt-1">{phoneError}</p>
      )}

      <h2 className="mt-2 text-lg font-semibold">State:</h2>
      <select
        className="mt-2 w-full p-2 border rounded"
        required
        value={formData.state || ""}
        onChange={(e) =>
          setFormData({ ...formData, state: e.target.value })
        }
      >
        <option value="">Select a state</option>
        {indianStates.map((state, index) => (
          <option key={index} value={state}>
            {state}
          </option>
        ))}
      </select>

      <div className="flex justify-between mt-4">
        <button
          type="button"
          className="bg-gray-500 text-white px-4 py-2 rounded"
          onClick={prevStep}
        >
          Back
        </button>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Next
        </button>
      </div>
    </form>
  );
};

export default Step2;
