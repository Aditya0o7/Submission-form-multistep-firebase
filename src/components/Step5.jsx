import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase";
import { useState } from "react";
import ErrorPopup from "./ErrorPopup";

const Step5 = ({ nextStep, prevStep, formData, setFormData }) => {
  const [errorPopupVisible, setErrorPopupVisible] = useState(false);

  const submitData = async () => {
    console.log(formData);
    const payload = {
      firstName: formData.firstName,
      middleName: formData.middleName,
      lastName: formData.lastName,
      email: formData.email,
      phone: formData.phoneNo,
      college: formData.college,
      year: formData.year,
      otherYear: formData.otherYear,
      currentCourse: formData.course,
      interestedCourse: formData.interestedCourse,
      status: "pending",
    };
    console.log(payload);
    try {
      await addDoc(collection(db, "users"), payload);
      setFormData({
        firstName: "",
        middleName: "",
        lastName: "",
        email: "",
        phoneNo: "",
        state: "",
        college: "",
        year: "",
        otherYear: "",
        course: "",
        interestedCourse: "",
      });
      nextStep();
    } catch (error) {
      console.error("Error adding document: ", error);
      setErrorPopupVisible(true);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await submitData();
  };

  const handleRetry = async () => {
    setErrorPopupVisible(false);
    await submitData();
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
        <h2 className="text-lg font-semibold">Select The Course You Are Interested In</h2>
        <select
          className="mt-2 w-full p-2 border rounded"
          required
          value={formData.interestedCourse}
          onChange={(e) => setFormData({ ...formData, interestedCourse: e.target.value })}
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
          <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded cursor-pointer">
            Submit
          </button>
        </div>
      </form>
      {errorPopupVisible && <ErrorPopup onRetry={handleRetry} />}
    </>
  );
};

export default Step5;
