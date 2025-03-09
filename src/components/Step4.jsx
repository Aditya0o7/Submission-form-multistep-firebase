import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase";
import { useState } from "react";
import ErrorPopup from "./ErrorPopup";

const Step4 = ({ nextStep, prevStep, formData, setFormData }) => {
  const [errorPopupVisible, setErrorPopupVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const submitData = async () => {
    const payload = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      phone: formData.phoneNo,
      state: formData.state,
      currentOccupation: formData.currentOccupation,
      course: formData.course,
      year: formData.year,
      profession: formData.profession,
      interestedCourse: formData.interestedCourse,
      status: "pending",
    };
    try {
      await addDoc(collection(db, "users"), payload);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phoneNo: "",
        state: "",
        currentOccupation: "",
        course: "",
        year: "",
        interestedCourse: "",
        profession: "",
      });
      nextStep();
    } catch (error) {
      console.error("Error adding document: ", error);
      setErrorPopupVisible(true);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    await submitData();
    setIsSubmitting(false);
  };

  const handleRetry = async () => {
    setErrorPopupVisible(false);
    setIsSubmitting(true);
    await submitData();
    setIsSubmitting(false);
  };

  const courses = [
    "Bachelor of Architecture",
    "Bachelor in Interior Design",
    "B.Sc. (Hons.) Agriculture",
    "B.Sc. (Hons.) Horticulture",
    "B.Sc. (Hons.) Agribusiness",
    "B.Sc. (Hons.) Food, Nutrition and Dietetics",
    "M.Sc. Agronomy",
    "M.Sc. Entomology",
    "M.Sc. Horticulture",
    "M.Sc. Statistics",
    "M.Sc. Agricultural Economics",
    "M.Sc. Agricultural Extension",
    "M.Sc. Genetics and Plant Breeding",
    "M.Sc. Plant Pathology",
    "M.Sc. Soil Science and Agricultural Chemistry",
    "BBA",
    "B.Com (Hons.)",
    "MBA (General Management)",
    "MBA (Agribusiness)",
    "Global MBA",
    "MA (English)",
    "B.A. (Hons.) English",
    "BFA Animation",
    "BFA Applied Arts",
    "BFA Painting",
    "MA (Sanskrit)",
    "Bachelor of Performing Arts (Odissi Dance)",
    "M.P.A. (Odissi Dance)",
    "Bachelor of Performing Arts (Hindustani Vocal Music)",
    "M.A. in Hindu Studies",
    "BSc Osteopathy",
    "MSc Osteopathy",
    "Integrated M.Sc. in Osteopathy",
  ];

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h3>Tell us the course you want to learn</h3>
        <h2 className="text-lg font-semibold">
          Select The Course You Are Interested In
        </h2>
        <select
          className="mt-2 w-full p-2 border rounded"
          required
          value={formData.interestedCourse}
          onChange={(e) =>
            setFormData({ ...formData, interestedCourse: e.target.value })
          }
        >
          <option value="">Select</option>
          {courses.map((course, index) => (
            <option key={index} value={course}>
              {course}
            </option>
          ))}
        </select>
        <div className="flex justify-between mt-4">
          <button
            type="button"
            className="bg-gray-500 text-white px-4 py-2 rounded cursor-pointer"
            onClick={prevStep}
          >
            Back
          </button>
          <button
  type="submit"
  className="w-32 bg-green-500 text-white px-4 py-2 rounded cursor-pointer flex items-center justify-center"
>
  {isSubmitting ? (
    <>
      <svg
        className="animate-spin -ml-1 mr-2 h-5 w-5 text-white"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
        ></circle>
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
        ></path>
      </svg>
      Submitting...
    </>
  ) : (
    "Submit"
  )}
</button>
        </div>
      </form>
      {errorPopupVisible && <ErrorPopup onRetry={handleRetry} />}
    </>
  );
};

export default Step4;
