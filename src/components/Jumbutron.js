import React from "react";

const Jumbutron = ({ children }) => {
  return (
    <div className="bg-purple-200 flex items-center py-10">
      <div className="max-w-md mx-auto w-full">
        <h1 className="text-black text-center text-2xl font-bold mb-5">
          Search Page
        </h1>
        {children}
      </div>
    </div>
  );
};

export default Jumbutron;
