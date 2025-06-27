// src/components/ui/CardTitle.jsx
import React from "react";
import { cn } from "../../lib/utils";

export function CardTitle({ className, ...props }) {
  return (
    <h3
      className={cn(
        "text-lg font-semibold leading-none tracking-tight",
        className
      )}
      {...props}
    />
  );
}
