import React from "react";

const SideInfo = ({ children }) => (
  <div className="col-3">
    <div className="w-75 mx-auto mt-2 mb-5">
      <div className="mb-5">
        <h1 className="text-center">Resumen</h1>
      </div>
      {children}
    </div>
  </div>
);

export default SideInfo;
