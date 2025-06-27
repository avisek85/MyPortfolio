import React from "react";
import clsx from "clsx";

export function Progress({ value = 0, className = "", ...props }) {
  return (
    <div
      className={clsx(
        "relative w-full h-2 overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700",
        className
      )}
      {...props}
    >
      <div
        className="h-full rounded-full bg-blue-600 transition-all duration-300 ease-in-out dark:bg-blue-500"
        style={{ width: `${value}%` }}
      />
    </div>
  );
}
