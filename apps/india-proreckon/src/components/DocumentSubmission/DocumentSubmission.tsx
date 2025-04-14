// DocumentSubmission.tsx
import React from "react";

const DocumentSubmission = () => {
  const email = "docs@proreckonsolutions.in";

  return (
    <div className="document-submission rounded-lg p-6 mx-4 mt-4 mb-8" style={{ backgroundColor: "#2868D8" }}>
      <style jsx>{`
        .selectable-text {
          user-select: text; /* Allow text selection */
          -webkit-user-select: text; /* Safari */
          -moz-user-select: text; /* Firefox */
          cursor: text; /* Change cursor to indicate text can be selected */
        }
      `}</style>
      <h2 className="text-xl md:text-2xl font-semibold text-center text-white mb-3">
        Attach Your Documents To The Given Email-Id: 
      </h2>
    
      <div className="flex flex-col items-center">
        <span className="text-lg font-bold hover:underline mb-2 selectable-text text-white text-center">
          {email}
        </span>
        <p className="text-white text-center">
          We Will Be Glad To Assist You!
        </p>
      </div>
    </div>
  );
};

export default DocumentSubmission;
