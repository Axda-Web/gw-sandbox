"use client";

import { useQuery } from "@tanstack/react-query";
import request from "graphql-request";
import { graphql } from "@/gql";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { Separator } from "@/components/ui/separator";
import { PersonStanding } from "lucide-react";
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

export const SpeciesFragment = graphql(/* GraphQL */ `
  fragment SpeciesItem on Species {
    averageHeight
    averageLifespan
    classification
    created
    designation
    edited
    eyeColors
    hairColors
    homeworld {
      id
      name
    }
    id
    language
    name
    personConnection {
      people {
        id
        name
      }
    }
    skinColors
    filmConnection {
      films {
        id
        title
      }
    }
  }
`);

const speciesQueryDocument = graphql(/* GraphQL */ `
  query speciesQuery($id: ID!) {
    species(id: $id) {
      ...SpeciesItem
    }
  }
`);

export const Species = () => {
  const pathname = usePathname();
  const speciesId = pathname?.split("/")[2];
  const { data, isLoading, isError } = useQuery({
    queryKey: ["species"],
    queryFn: async () =>
      request(
        "https://swapi-graphql.netlify.app/.netlify/functions/index",
        speciesQueryDocument,
        { id: speciesId }
      ),
  });

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error</p>;

  return (
    <div>
      <div className={cn("mb-10 mt-14", "sm:mb-24")}>
        <h1 className="text-6xl font-bold">{data?.species?.name}</h1>
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
                <span className="font-extralight opacity-50">
                  Average height:
                </span>{" "}
                <span className="font-extralight">
                  {data?.species?.averageHeight ?? "N/A"}
                </span>
              </div>
              <div className="flex gap-x-2 justify-between border-b pb-4 pr-2">
                <span className="font-extralight opacity-50">
                  Average lifespan:
                </span>{" "}
                <span className="font-extralight">
                  {data?.species?.averageLifespan ?? "N/A"}
                </span>
              </div>
              <div className="flex gap-x-2 justify-between border-b pb-4 pr-2">
                <span className="font-extralight opacity-50">
                  Classification:
                </span>{" "}
                <span className="font-extralight">
                  {data?.species?.classification ?? "N/A"}
                </span>
              </div>
              <div className="flex gap-x-2 justify-between border-b pb-4 pr-2">
                <span className="font-extralight opacity-50">Designation:</span>{" "}
                <span className="font-extralight">
                  {data?.species?.designation ?? "N/A"}
                </span>
              </div>
              <div className="flex gap-x-2 justify-between border-b pb-4 pr-2">
                <span className="font-extralight opacity-50">Eye colors:</span>
                <ul className="flex gap-x-2">
                  {data?.species?.eyeColors?.map((p: string, i: number) => (
                    <li key={i} className="font-extralight">
                      {p +
                        (i === data?.species?.eyeColors?.length - 1
                          ? ""
                          : ", ")}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex gap-x-2 justify-between border-b pb-4 pr-2">
                <span className="font-extralight opacity-50">Hair colors:</span>
                <ul className="flex gap-x-2">
                  {data?.species?.hairColors?.map((p: string, i: number) => (
                    <li key={i} className="font-extralight">
                      {p +
                        (i === data?.species?.hairColors?.length - 1
                          ? ""
                          : ", ")}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex gap-x-2 justify-between border-b pb-4 pr-2">
                <span className="font-extralight opacity-50">Home world:</span>{" "}
                <span className="font-extralight">
                  {data?.species?.homeworld?.name ?? "N/A"}
                </span>
              </div>
              <div className="flex gap-x-2 justify-between border-b pb-4 pr-2">
                <span className="font-extralight opacity-50">Language:</span>{" "}
                <span className="font-extralight">
                  {data?.species?.language ?? "N/A"}
                </span>
              </div>
              <div className="flex gap-x-2 justify-between border-b pb-4 pr-2">
                <span className="font-extralight opacity-50">Skin colors:</span>
                <ul className="flex gap-x-2">
                  {data?.species?.skinColors?.map((p: string, i: number) => (
                    <li key={i} className="font-extralight">
                      {p +
                        (i === data?.species?.hairColors?.length - 1
                          ? ""
                          : ", ")}
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
            <PersonStanding size={350} />
          </div>
        </div>
      </section>
      <Separator className={cn("my-10", "lg:my-20")} />
      <section className={cn("space-y-16")}>
        <DataCarousel
          data={data?.species?.filmConnection?.films}
          type="films"
        />
        <DataCarousel
          data={data?.species?.personConnection?.people}
          type="characters"
        />
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
