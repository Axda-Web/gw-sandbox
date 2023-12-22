import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";

export default function Loading() {
  return (
    <div
      className={cn(
        "grid gap-8 grid-cols-1 justify-items-center mt-6",
        "lg:grid-cols-3"
      )}
    >
      <Skeleton
        className={cn("w-[325px] h-[180px] rounded-none", "dark:bg-slate-800")}
      />
      <Skeleton
        className={cn("w-[325px] h-[180px] rounded-none", "dark:bg-slate-800")}
      />
      <Skeleton
        className={cn("w-[325px] h-[180px] rounded-none", "dark:bg-slate-800")}
      />
      <Skeleton
        className={cn("w-[325px] h-[180px] rounded-none", "dark:bg-slate-800")}
      />
      <Skeleton
        className={cn("w-[325px] h-[180px] rounded-none", "dark:bg-slate-800")}
      />
      <Skeleton
        className={cn("w-[325px] h-[180px] rounded-none", "dark:bg-slate-800")}
      />
    </div>
  );
}
