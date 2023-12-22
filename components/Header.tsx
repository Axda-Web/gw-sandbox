"use client";

import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "./ui/button";

export const Header = () => {
  const { theme, setTheme } = useTheme();

  const handleClick = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return (
    <header className="flex justify-center items-center">
      <Link href="/">
        <Image
          src="/star-wars-logo.svg"
          alt="Star Wars Logo"
          width={400}
          height={200}
          className={cn(
            "w-[200px] h-[100px] py-8 min-h-[140px]",
            "sm:w-[400px] sm:h-[200px] sm:py-10"
          )}
        />
      </Link>
      <Button
        className={cn(
          "absolute top-4 right-4 border-none rounded-full",
          "sm:top-8 sm:right-8 sm:border"
        )}
        variant="outline"
        onClick={handleClick}
      >
        {theme === "light" ? <Moon /> : <Sun />}
      </Button>
    </header>
  );
};
