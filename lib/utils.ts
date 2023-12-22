import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const formatMovieImgPath = (movieTitle: string): string => {
  const imgPath = `/images/${movieTitle
    ?.toLowerCase()
    .split(" ")
    .join("-")}.jpeg`;
  return imgPath;
};
