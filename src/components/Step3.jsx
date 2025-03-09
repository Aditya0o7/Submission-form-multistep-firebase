const Step3 = ({ nextStep, prevStep, formData, setFormData }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    nextStep();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3 className="text-md font-semibold">Tell us about your education</h3>
      <h2 className="text-lg font-semibold">What Is Your Current Occupation?</h2>
      <select
        className="mt-2 w-full p-2 border rounded"
        value={formData.currentOccupation}
        required
        onChange={(e) =>
          setFormData({ ...formData, currentOccupation: e.target.value })
        }
      >
        <option value="">Select</option>
        <option value="Student">Student</option>
        <option value="Working Professional">Working Professional</option>
      </select>

      {formData.currentOccupation === "Student" ? (
        <>
          <h2 className="text-lg font-semibold mt-4">
            Which Course Are You Pursuing Currently?
          </h2>
          <input
            className="mt-2 w-full p-2 border rounded"
            type="text"
            placeholder="Such as B.Tech., B.S.C. etc.."
            required
            value={formData.course || ""}
            onChange={(e) =>
              setFormData({ ...formData, course: e.target.value })
            }
          />
          <h2 className="mt-2 text-lg font-semibold">
            In Which Year Are You currently in?
          </h2>
          <select
            className="mt-2 w-full p-2 border rounded"
            value={formData.year || ""}
            required
            onChange={(e) =>
              setFormData({ ...formData, year: e.target.value })
            }
          >
            <option value="">Select</option>
            <option value="1st Year">1st Year</option>
            <option value="2nd Year">2nd Year</option>
            <option value="3rd Year">3rd Year</option>
            <option value="4th Year">4th Year</option>
          </select>
        </>
      ) : formData.currentOccupation === "Working Professional" ? (
        <>
          <h2 className="text-lg font-semibold mt-4">
            Which Course Have You Completed?
          </h2>
          <input
            className="mt-2 w-full p-2 border rounded"
            type="text"
            placeholder="Such as B.Tech., B.S.C. etc.."
            required
            value={formData.course || ""}
            onChange={(e) =>
              setFormData({ ...formData, course: e.target.value })
            }
          />
          <h2 className="mt-2 text-lg font-semibold">
            What's Your Profession?
          </h2>
          <input
            className="mt-2 w-full p-2 border rounded"
            type="text"
            placeholder="Your answer"
            required
            value={formData.profession || ""}
            onChange={(e) =>
              setFormData({ ...formData, profession: e.target.value })
            }
          />
        </>
      ) : null}

      <div className="flex justify-between mt-4">
        <button
          type="button"
          className="bg-gray-500 text-white px-4 py-2 rounded"
          onClick={prevStep}
        >
          Back
        </button>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          Next
        </button>
      </div>
    </form>
  );
};

export default Step3;
