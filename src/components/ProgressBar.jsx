
const ProgressBar = ({ step }) => {
    const gradient = "bg-gradient-to-r from-red-500 via-pink-500 to-purple-500";
    return (
      <div className="w-full h-2 bg-gray-300 rounded overflow-hidden mb-4">
        <div className={`h-full ${gradient} transition-all duration-500`} style={{ width: `${(step / 5) * 100}%` }}></div>
      </div>
    );
  };
  export default ProgressBar;
  
 