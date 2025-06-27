// src/components/ui/CardContent.jsx
import React from "react";
import { cn } from "../../lib/utils";

export function CardContent({ className, children, ...props }) {
  return (
    <div className={cn("p-6", className)} {...props}>
      {children}
    </div>
  );
}
