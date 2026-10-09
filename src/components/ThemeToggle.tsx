import { Moon, Sun } from "lucide-react";
import { useTheme } from "./ThemeProvider";

export function ThemeToggle({ className }: { className?: string }) {
  const { theme, setTheme } = useTheme();

  // Evaluate final state
  let isDark = false;
  if (typeof window !== "undefined") {
    if (theme === "dark") isDark = true;
    if (theme === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches) isDark = true;
  }

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={`group relative inline-flex h-10 items-center justify-center gap-2.5 rounded-full border border-border bg-card shadow-sm px-4 text-sm font-semibold text-foreground transition-all hover:bg-accent hover:text-accent-foreground ${className || ""}`}
      aria-label="Toggle theme"
    >
      <div className="relative size-4 shrink-0">
        <Sun className="absolute inset-0 h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
        <Moon className="absolute inset-0 h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      </div>
      <span className="w-20 text-left transition-all">
        {isDark ? "Dark Mode" : "Light Mode"}
      </span>
    </button>
  );
}
