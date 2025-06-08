"use client";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import {
  Sun,
  Moon,
} from "lucide-react";
import { useEffect, useState } from "react";

export default function ModeToggle() {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Only show the theme toggle after mounting to avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // Return a placeholder with the same dimensions to avoid layout shift
    return (
      <Button
        variant="ghost"
        className="rounded-full w-10"
        aria-label="Toggle Theme"
      >
        <div className="size-5" />
      </Button>
    );
  }

  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <Button
      variant="ghost"
      className="rounded-full w-10"
      aria-label="Toggle Theme"
      onClick={() => {
        const newTheme = currentTheme === "dark" ? "light" : "dark";
        setTheme(newTheme);
        // Force update the HTML class to ensure theme is applied
        if (newTheme === "dark") {
          document.documentElement.classList.add('dark');
        } else {
          document.documentElement.classList.remove('dark');
        }
      }}
    >
      {currentTheme === "dark" ? (
        <Sun className="size-5" />
      ) : (
        <Moon className="size-5" />
      )}
    </Button>
  );
}
