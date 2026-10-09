import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

export function GlassCard({
  children,
  className,
  hover = false,
}: {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}) {
  return (
    <div
      className={cn(
        "rounded-3xl glass p-6 shadow-glass transition-all duration-500",
        hover && "hover:-translate-y-2 hover:shadow-lift hover:border-brand/30",
        className,
      )}
    >
      {children}
    </div>
  );
}
