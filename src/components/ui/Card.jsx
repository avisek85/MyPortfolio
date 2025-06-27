// src/components/ui/Card.jsx
import React from "react";
import { cn } from "../../lib/utils";
// Or replace with clsx/classNames if you’re not using cn()

export function Card({ className, children, ...props }) {
  return (
    <div
      className={cn(
        "rounded-xl border bg-white dark:bg-gray-900 shadow-sm dark:border-gray-800",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
