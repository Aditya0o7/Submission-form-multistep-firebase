 // Step1.jsx
 const Step1 = ({ nextStep, formData, setFormData }) => {
    const handleSubmit = (e) => {
        e.preventDefault();

        nextStep();
      };
    return(
        <form onSubmit={handleSubmit}>
        <h3 className="text-md font-semibold">Let's get started with your name</h3>
        <h2 className="text-lg font-semibold">First Name:</h2>
        <input
          className="mt-2 w-full p-2 border rounded"
          placeholder="Your answer"
          type="text"
          required
          value={formData.firstName || ""}
          onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
        />
        <h2 className="mt-2 text-lg font-semibold">Middle Name:</h2>
        <input
          className="mt-2 w-full p-2 border rounded"
          placeholder="Your answer"
          type="text"
          value={formData.middleName || ""}
          onChange={(e) => setFormData({ ...formData, middleName: e.target.value })}
        />
        
        <h2 className="mt-2 text-lg font-semibold">Last Name:</h2>
        <input
          className="mt-2 w-full p-2 border rounded"
          type="text"
          placeholder="Your Answer"
          required
          value={formData.lastName || ""}
          onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
        />
      <div className="flex justify-center items-center">
      <button type="submit" className="mt-4 bg-blue-500 text-white w-full py-2 rounded cursor-pointer">Next</button>
      </div>
      
        </form>
        
    )

 }

  export default Step1;
  