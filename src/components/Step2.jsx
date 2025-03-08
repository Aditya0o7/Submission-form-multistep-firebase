 // Step1.jsx
 const Step2 = ({ nextStep, formData, setFormData }) => {
    const handleSubmit = (e) => {
        e.preventDefault();

        nextStep();
      };
    return(
        <form onSubmit={handleSubmit}>
        <h3 className="text-md font-semibold">Give us a way to connect to you!</h3>
        <h2 className="text-lg font-semibold">Email:</h2>
        <input
          className="mt-2 w-full p-2 border rounded"
          placeholder="Your answer"
          type="email"
          required
          value={formData.email|| ""}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
        <h2 className="mt-2 text-lg font-semibold">Phone Number:</h2>
        <input
          className="mt-2 w-full p-2 border rounded"
          placeholder="Your answer"
          type="number"
          value={formData.phoneNo || ""}
          onChange={(e) => setFormData({ ...formData, phoneNo: e.target.value })}
        />
        
        <h2 className="mt-2 text-lg font-semibold">State:</h2>
        <input
          className="mt-2 w-full p-2 border rounded"
          type="text"
          placeholder="Your Answer"
          required
          value={formData.state || ""}
          onChange={(e) => setFormData({ ...formData, state: e.target.value })}
        />
      <div className="flex justify-center items-center">
      <button type="submit" className="mt-4 bg-blue-500 text-white w-full py-2 rounded cursor-pointer">Next</button>
      </div>
      
        </form>
        
    )

 }

  export default Step2;
  