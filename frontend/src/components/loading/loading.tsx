import React from "react";

const Loading = () => {
  return (
    <div className={`w-full fixed h-screen flex items-center justify-center`}>
      <span className="loading scale-150 md:scale-[3] text-yellow-700 loading-dots loading-lg"></span>
    </div>
  );
};

export default Loading;
