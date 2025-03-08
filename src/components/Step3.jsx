const Step3 = ({ nextStep, prevStep, formData, setFormData }) => {
    const handleSubmit = (e) => {
      e.preventDefault();
      nextStep();
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <h3 className="text-md font-semibold">Tell us about your education</h3>
        <h2 className="text-lg font-semibold">What Is Your College Name?</h2>
        <input
          className="mt-2 w-full p-2 border rounded"
          placeholder="Your answer"
          type="text"
          required
          value={formData.college || ""}
          onChange={(e) => setFormData({ ...formData, college: e.target.value })}
        />
        <h2 className="mt-2 text-lg font-semibold">Course:</h2>
        <input
          className="mt-2 w-full p-2 border rounded"
          type="text"
          placeholder="Such as B.Tech., B.S.C. etc.."
          required
          value={formData.course || ""}
          onChange={(e) => setFormData({ ...formData, course: e.target.value })}
        />
        <div className="flex justify-between mt-4">
          <button type="button" className="bg-gray-500 text-white px-4 py-2 rounded" onClick={prevStep}>
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
  