import React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "./ui/card";
import Link from "next/link";
import { cn } from "@/lib/utils";
import {
  UserRound,
  Film,
  Orbit,
  CarFront,
  Plane,
  PersonStanding,
  User,
} from "lucide-react";

export type DataCarouselProps = {
  data: any;
  type:
    | "films"
    | "characters"
    | "planets"
    | "species"
    | "starships"
    | "vehicles";
};

export const DataCarousel = ({ data, type }: DataCarouselProps) => {
  let cardIcon = null;

  switch (type) {
    case "films":
      cardIcon = <Film size={48} />;
      break;
    case "characters":
      cardIcon = <UserRound size={48} />;
      break;
    case "planets":
      cardIcon = <Orbit size={48} />;
      break;
    case "species":
      cardIcon = <PersonStanding size={48} />;
      break;
    case "starships":
      cardIcon = <Plane size={48} />;
      break;
    case "vehicles":
      cardIcon = <CarFront size={48} />;
  }

  return (
    <div className={cn("space-y-4")}>
      <h2 className={cn("capitalize text-lg", "lg:text-2xl")}>{type}</h2>
      <Carousel className="w-full">
        <CarouselContent className={cn("")}>
          {data.map((item: any) => (
            <CarouselItem
              key={item.id}
              className={cn("", "sm:basis-1/3", "md:basis1/4", "lg:basis-1/5")}
            >
              <Link href={`/${type}/${item.id}`}>
                <Card className="min-h-[144px]">
                  <CardContent className="flex flex-col justify-center items-center p-4 gap-y-4">
                    {cardIcon}
                    <h3 className="text-center">
                      {type === "films" ? item.title : item.name}
                    </h3>
                  </CardContent>
                </Card>
              </Link>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};
