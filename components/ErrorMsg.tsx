import React from "react";

interface ErrorProps {
  message: string;
}

export const ErrorMsg = ({ message }: ErrorProps) => {
  return (
    <div
      className="px-4 py-6 mx-auto text-blue-700 bg-blue-100 border-t border-b border-blue-500 col-span-full "
      role="alert"
    >
      <p className="font-bold">Error!</p>
      <p className="text-sm">{message}</p>
    </div>
  );
};
