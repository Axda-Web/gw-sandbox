import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

export const Header = () => {
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
    </header>
  );
};
