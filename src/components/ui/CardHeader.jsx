// src/components/ui/CardHeader.jsx
import React from "react";
import { cn } from "../../lib/utils";

export function CardHeader({ className, ...props }) {
  return (
    <div
      className={cn("flex flex-col space-y-1.5 p-6", className)}
      {...props}
    />
  );
}
