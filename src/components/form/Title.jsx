import React from "react";

const title = ({ children }) => {
  return (
    <div>
      <h1 className="text-xl text-white font-semibol text-center">
        {children}
      </h1>
    </div>
  );
};

export default title;
