"use client";

import { useQuery } from "@tanstack/react-query";
import request from "graphql-request";
import { graphql } from "@/gql";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { Separator } from "@/components/ui/separator";
import { Orbit } from "lucide-react";
// import {
//   Table,
//   TableBody,
//   TableCaption,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "@/components/ui/table";

import { DataCarousel } from "../DataCarousel";

export const PlanetFragment = graphql(/* GraphQL */ `
  fragment PlanetItem on Planet {
    climates
    created
    diameter
    edited
    filmConnection {
      films {
        id
        title
      }
    }
    gravity
    id
    name
    orbitalPeriod
    population
    rotationPeriod
    surfaceWater
    terrains
  }
`);

const planetQueryDocument = graphql(/* GraphQL */ `
  query planetQuery($id: ID!) {
    planet(id: $id) {
      ...PlanetItem
    }
  }
`);

export const Planet = () => {
  const pathname = usePathname();
  const planetId = pathname?.split("/")[2];
  const { data, isLoading, isError } = useQuery({
    queryKey: ["planet"],
    queryFn: async () =>
      request(
        "https://swapi-graphql.netlify.app/.netlify/functions/index",
        planetQueryDocument,
        { id: planetId }
      ),
  });

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error</p>;

  return (
    <div>
      <div className={cn("mb-10 mt-14", "sm:mb-24")}>
        <h1 className="text-6xl font-bold">{data?.planet?.name}</h1>
      </div>
      <section className="space-y-4">
        <h4 className={cn("capitalize text-lg", "lg:text-2xl")}>Details</h4>
        <div
          className={cn(
            "flex flex-col gap-y-8 w-full",
            "md:flex-row md:justify-between md:items-center"
          )}
        >
          <div className={cn("min-h-full flex", "md:w-1/2")}>
            <div className="h-full w-full flex flex-col gap-y-2">
              <div className="flex gap-x-2 justify-between border-b pb-4 pr-2">
                <span className="font-extralight opacity-50">Population:</span>{" "}
                <span className="font-extralight">
                  {data?.planet?.population ?? "N/A"}
                </span>
              </div>
              <div className="flex gap-x-2 justify-between border-b pb-4 pr-2">
                <span className="font-extralight opacity-50">Diameter:</span>{" "}
                <span className="font-extralight">
                  {data?.planet?.diameter ?? "N/A"}
                </span>
              </div>
              <div className="flex gap-x-2 justify-between border-b pb-4 pr-2">
                <span className="font-extralight opacity-50">Gravity:</span>{" "}
                <span className="font-extralight">
                  {data?.planet?.gravity ?? "N/A"}
                </span>
              </div>
              <div className="flex gap-x-2 justify-between border-b pb-4 pr-2">
                <span className="font-extralight opacity-50">
                  Orbital period:
                </span>{" "}
                <span className="font-extralight">
                  {data?.planet?.orbitalPeriod ?? "N/A"}
                </span>
              </div>
              <div className="flex gap-x-2 justify-between border-b pb-4 pr-2">
                <span className="font-extralight opacity-50">
                  Rotation period:
                </span>{" "}
                <span className="font-extralight">
                  {data?.planet?.rotationPeriod ?? "N/A"}
                </span>
              </div>
              <div className="flex gap-x-2 justify-between border-b pb-4 pr-2">
                <span className="font-extralight opacity-50">
                  Surface water:
                </span>{" "}
                <span className="font-extralight">
                  {data?.planet?.surfaceWater ?? "N/A"}
                </span>
              </div>
              <div className="flex gap-x-2 justify-between border-b pb-4 pr-2">
                <span className="font-extralight opacity-50">Climates:</span>
                <ul className="flex gap-x-2">
                  {data?.planet?.climates?.map((p: string, i: number) => (
                    <li key={i} className="font-extralight">
                      {p +
                        (i === data?.planet?.climates?.length - 1 ? "" : ", ")}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex gap-x-2 justify-between border-b pb-4 pr-2">
                <span className="font-extralight opacity-50">Terrains:</span>
                <ul className="flex gap-x-2">
                  {data?.planet?.terrains?.map((p: string, i: number) => (
                    <li key={i} className="font-extralight">
                      {p +
                        (i === data?.planet?.terrains?.length - 1 ? "" : ", ")}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div
            className={cn(
              "hidden",
              "md:flex md:w-1/2 md:justify-end md:opacity-20"
            )}
          >
            <Orbit size={350} />
          </div>
        </div>
      </section>
      <Separator className={cn("my-10", "lg:my-20")} />
      <section className={cn("space-y-16")}>
        <DataCarousel data={data?.planet?.filmConnection?.films} type="films" />
      </section>
    </div>
  );
};

// TODO: Fix TS errors
// TODO: Add loading view
// TODO: Add error view
// TODO: Add units utility functions
// TODO: Switch to Table component for 'Details' section
// TODO: Add real image
