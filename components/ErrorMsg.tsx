import React from "react";

const ErrorMsg = () => {
  return (
    <div
      className="px-4 py-6 mx-auto text-blue-700 bg-blue-100 border-t border-b border-blue-500 col-span-full "
      role="alert"
    >
      <p className="font-bold">Something went wrong...</p>
      <p className="text-sm">Try refreshing the page.</p>
    </div>
  );
};

export default ErrorMsg;
