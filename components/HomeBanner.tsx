"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import { motion } from "framer-motion";

const MotionImage = motion(Image);

export const HomeBanner = () => {
  return (
    <div className="flex justify-center">
      <MotionImage
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 1 } }}
        src="/star-wars-logo.svg"
        alt="Star Wars Logo"
        width={400}
        height={200}
        className={cn(
          "w-[200px] h-[100px] py-8 min-h-[140px]",
          "sm:w-[400px] sm:h-[200px] sm:py-10"
        )}
      />
    </div>
  );
};
