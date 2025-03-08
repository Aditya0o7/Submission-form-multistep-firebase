const Step4 = ({ nextStep, prevStep, formData, setFormData }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    nextStep();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Current status</h3>
      <h2 className="text-lg font-semibold">What Is Your Year Of Study/Occupation?</h2>
      <select
        className="mt-2 w-full p-2 border rounded"
        value={formData.year}
        required
        onChange={(e) =>
          setFormData({ ...formData, year: e.target.value, otherYear: "" })
        }
      >
        <option value="">Select</option>
        <option value="1st Year">1st Year</option>
        <option value="2nd Year">2nd Year</option>
        <option value="3rd Year">3rd Year</option>
        <option value="4th Year">4th Year</option>
        <option value="5th Year">Working Professional</option>
        <option value="Other">Others</option>
      </select>
      {formData.year === "Other" && (
        <div>
          <h2 className="mt-2 text-lg font-semibold">Please Specify</h2>
          <input 
            className="mt-2 w-full p-2 border rounded"
            type="text"
            placeholder="Your Answer"
            required
            value={formData.otherYear || ""}
            onChange={(e) =>
              setFormData({ ...formData, otherYear: e.target.value })
            }
          />
        </div>
      )}
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
          className="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer"
        >
          Next
        </button>
      </div>
    </form>
  );
};

export default Step4;
