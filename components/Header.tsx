"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { Moon, Sun, Home } from "lucide-react";
import { useTheme } from "next-themes";
import { usePathname } from "next/navigation";

import { Button } from "./ui/button";

export const Header = () => {
  const { theme, setTheme } = useTheme();
  const pathname = usePathname();

  const handleClick = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return (
    <header className="absolute top-4 right-4 flex items-center">
      {pathname !== "/" && (
        <Button>
          <Link href="/">
            <Home color="#FFC501" />
          </Link>
        </Button>
      )}
      <Button
        className={cn(
          "border-none rounded-full",
          "sm:top-8 sm:right-8 sm:border"
        )}
        variant="outline"
        onClick={handleClick}
      >
        {theme === "light" ? <Moon color="#FFC501" /> : <Sun color="#FFC501" />}
      </Button>
    </header>
  );
};
