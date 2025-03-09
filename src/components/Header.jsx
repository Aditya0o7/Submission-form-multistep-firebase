import React from "react";

const Header = ({isAppear}) => (
  <div className="flex flex-col items-center mb-6">
    <img src="/logo.webp" alt="Logo" className="w-16 h-16" />
    <h2 className="text-2xl font-bold mt-2">myabc.in</h2>
    <h3 className="text-xl mt-1">Sign Up For A Drive</h3>
    {!isAppear && (<p className="text-center mt-1 text-gray-600">
      Share your details, our team will get in touch with you
    </p>)}
  </div>
);

export default Header;
