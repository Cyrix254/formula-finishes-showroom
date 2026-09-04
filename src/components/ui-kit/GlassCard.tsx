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
        "rounded-3xl glass p-6 shadow-glass",
        hover && "transition-transform duration-300 hover:-translate-y-1.5",
        className,
      )}
    >
      {children}
    </div>
  );
}
