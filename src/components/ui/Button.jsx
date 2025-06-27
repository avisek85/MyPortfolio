// src/components/ui/HeroButton.jsx
import React from "react";
import clsx from "clsx";

// Tailwind variant classes mapped
const VARIANT_STYLES = {
  primary:
    "bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600",
  destructive:
    "bg-red-600 text-white hover:bg-red-700 dark:bg-red-500 dark:hover:bg-red-600",
  outline:
    "border border-gray-300  text-gray-800 hover:bg-gray-100 dark:border-gray-600 dark:text-gray-200 dark:hover:bg-gray-800",
  secondary:
    "bg-gray-100 text-gray-800 hover:bg-gray-200 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600",
  ghost:
    "text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800",
  link: "text-blue-600 underline-offset-4 hover:underline dark:text-blue-400",
};

const SIZE_STYLES = {
  sm: "h-9 px-3 text-sm rounded-md",
  default: "h-10 px-4 py-2 text-sm rounded-md",
  lg: "h-11 px-8 text-base rounded-md",
  icon: "h-10 w-10 p-0",
};

export function Button({
  children,
  onClick,
  type = "button",
  variant = "default", // matches 'cva' key
  size = "default",
  className = "",
  ...props
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={clsx(
        "inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium ring-offset-background transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
        VARIANT_STYLES[variant],
        SIZE_STYLES[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
