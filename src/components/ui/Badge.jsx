// src/components/ui/Badge.jsx
import React from "react";
import { cn } from "../../lib/utils";

export function Badge({ className, children, ...props }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-100",
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
