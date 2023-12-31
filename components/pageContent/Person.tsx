"use client";

import { useQuery } from "@tanstack/react-query";
import request from "graphql-request";
import { graphql } from "@/gql";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { Separator } from "@/components/ui/separator";
import { UserRound } from "lucide-react";
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

export const PersonFragment = graphql(/* GraphQL */ `
  fragment PersonItem on Person {
    birthYear
    created
    edited
    eyeColor
    filmConnection {
      films {
        id
        title
      }
    }
    gender
    hairColor
    height
    homeworld {
      id
      name
    }
    id
    mass
    name
    skinColor
    species {
      id
      name
    }
    starshipConnection {
      starships {
        id
        name
      }
    }
    vehicleConnection {
      vehicles {
        id
        name
      }
    }
  }
`);

const personQueryDocument = graphql(/* GraphQL */ `
  query personQuery($id: ID!) {
    person(id: $id) {
      ...PersonItem
    }
  }
`);

export const Person = () => {
  const pathname = usePathname();
  const personId = pathname?.split("/")[2];
  const { data, isLoading, isError } = useQuery({
    queryKey: ["person"],
    queryFn: async () =>
      request(
        "https://swapi-graphql.netlify.app/.netlify/functions/index",
        personQueryDocument,
        { id: personId }
      ),
  });

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error</p>;

  return (
    <div>
      <div className={cn("mb-10 mt-14", "sm:mb-24")}>
        <h1 className="text-6xl font-bold">{data?.person?.name}</h1>
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
                <span className="font-extralight opacity-50">Birth year:</span>{" "}
                <span className="font-extralight">
                  {data?.person?.birthYear ?? "N/A"}
                </span>
              </div>
              <div className="flex gap-x-2 justify-between border-b pb-4 pr-2">
                <span className="font-extralight opacity-50">Eye color:</span>{" "}
                <span className="font-extralight">
                  {data?.person?.eyeColor ?? "N/A"}
                </span>
              </div>
              <div className="flex gap-x-2 justify-between border-b pb-4 pr-2">
                <span className="font-extralight opacity-50">Gender:</span>{" "}
                <span className="font-extralight">
                  {data?.person?.gender ?? "N/A"}
                </span>
              </div>
              <div className="flex gap-x-2 justify-between border-b pb-4 pr-2">
                <span className="font-extralight opacity-50">Hair color:</span>{" "}
                <span className="font-extralight">
                  {data?.person?.hairColor ?? "N/A"}
                </span>
              </div>
              <div className="flex gap-x-2 justify-between border-b pb-4 pr-2">
                <span className="font-extralight opacity-50">Height:</span>{" "}
                <span className="font-extralight">
                  {data?.person?.height ?? "N/A"}
                </span>
              </div>
              <div className="flex gap-x-2 justify-between border-b pb-4 pr-2">
                <span className="font-extralight opacity-50">Home world:</span>{" "}
                <span className="font-extralight">
                  {data?.person?.homeworld?.name ?? "N/A"}
                </span>
              </div>
              <div className="flex gap-x-2 justify-between border-b pb-4 pr-2">
                <span className="font-extralight opacity-50">Species:</span>{" "}
                <span className="font-extralight">
                  {data?.person?.species?.name ?? "N/A"}
                </span>
              </div>
              <div className="flex gap-x-2 justify-between border-b pb-4 pr-2">
                <span className="font-extralight opacity-50">Mass:</span>{" "}
                <span className="font-extralight">
                  {data?.person?.mass ?? "N/A"}
                </span>
              </div>
              <div className="flex gap-x-2 justify-between border-b pb-4 pr-2">
                <span className="font-extralight opacity-50">Skin color:</span>{" "}
                <span className="font-extralight">
                  {data?.person?.skinColor ?? "N/A"}
                </span>
              </div>
            </div>
          </div>
          <div
            className={cn(
              "hidden",
              "md:flex md:w-1/2 md:justify-end md:opacity-20"
            )}
          >
            <UserRound size={350} />
          </div>
        </div>
      </section>
      <Separator className={cn("my-10", "lg:my-20")} />
      <section className={cn("space-y-16")}>
        <DataCarousel data={data?.person?.filmConnection?.films} type="films" />
        {data?.person?.vehicleConnection?.vehicles.length > 0 && (
          <DataCarousel
            data={data?.person?.vehicleConnection?.vehicles}
            type="vehicles"
          />
        )}
        {data?.person?.starshipConnection?.starships.length > 0 && (
          <DataCarousel
            data={data?.person?.starshipConnection?.starships}
            type="starships"
          />
        )}
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
// TODO: Check routing errors ('persons' | 'characters' ??)
// TODO: Check for null values (if 'null' => 'N/A')
