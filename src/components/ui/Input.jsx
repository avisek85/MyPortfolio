import React from "react";

export const Input = React.forwardRef(
  ({ className = "", type = "text", ...props }, ref) => {
    return (
      <input
        type={type}
        ref={ref}
        className={`w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm shadow-sm 
        placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 
        dark:border-gray-700 dark:bg-gray-900 dark:text-white dark:placeholder:text-gray-500 ${className}`}
        {...props}
      />
    );
  }
);
