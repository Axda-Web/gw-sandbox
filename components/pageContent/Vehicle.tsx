"use client";

import { useQuery } from "@tanstack/react-query";
import request from "graphql-request";
import { graphql } from "@/gql";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { Separator } from "@/components/ui/separator";
import { CarFront } from "lucide-react";
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

export const VehicleFragment = graphql(/* GraphQL */ `
  fragment VehicleItem on Vehicle {
    cargoCapacity
    consumables
    costInCredits
    created
    crew
    edited
    id
    length
    manufacturers
    maxAtmospheringSpeed
    model
    name
    passengers
    vehicleClass
    filmConnection {
      films {
        id
        title
      }
    }
    pilotConnection {
      pilots {
        id
        name
      }
    }
  }
`);

const vehicleQueryDocument = graphql(/* GraphQL */ `
  query vehicleQuery($id: ID!) {
    vehicle(id: $id) {
      ...VehicleItem
    }
  }
`);

export const Vehicle = () => {
  const pathname = usePathname();
  const vehicleId = pathname?.split("/")[2];
  const { data, isLoading, isError } = useQuery({
    queryKey: ["vehicle"],
    queryFn: async () =>
      request(
        "https://swapi-graphql.netlify.app/.netlify/functions/index",
        vehicleQueryDocument,
        { id: vehicleId }
      ),
  });

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error</p>;

  return (
    <div>
      <div className={cn("mb-10 mt-14", "sm:mb-24")}>
        <h1 className="text-6xl font-bold">{data?.vehicle?.name}</h1>
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
                <span className="font-extralight opacity-20">
                  Cargo capacity:
                </span>{" "}
                <span className="font-extralight">
                  {data?.vehicle?.cargoCapacity ?? "N/A"}
                </span>
              </div>
              <div className="flex gap-x-2 justify-between border-b pb-4 pr-2">
                <span className="font-extralight opacity-50">Consumables:</span>{" "}
                <span className="font-extralight">
                  {data?.vehicle?.consumables ?? "N/A"}
                </span>
              </div>
              <div className="flex gap-x-2 justify-between border-b pb-4 pr-2">
                <span className="font-extralight opacity-50">
                  Cost in Credits:
                </span>{" "}
                <span className="font-extralight">
                  {data?.vehicle?.costInCredits ?? "N/A"}
                </span>
              </div>
              <div className="flex gap-x-2 justify-between border-b pb-4 pr-2">
                <span className="font-extralight opacity-50">Crew:</span>{" "}
                <span className="font-extralight">
                  {data?.vehicle?.crew ?? "N/A"}
                </span>
              </div>
              <div className="flex gap-x-2 justify-between border-b pb-4 pr-2">
                <span className="font-extralight opacity-50">Length:</span>{" "}
                <span className="font-extralight">
                  {data?.vehicle?.length ?? "N/A"}
                </span>
              </div>
              <div className="flex gap-x-2 justify-between border-b pb-4 pr-2">
                <span className="font-extralight opacity-50">
                  Max Atmosphering Speed:
                </span>{" "}
                <span className="font-extralight">
                  {data?.vehicle?.maxAtmospheringSpeed ?? "N/A"}
                </span>
              </div>
              <div className="flex gap-x-2 justify-between border-b pb-4 pr-2">
                <span className="font-extralight opacity-50">Model:</span>{" "}
                <span className="font-extralight">
                  {data?.vehicle?.model ?? "N/A"}
                </span>
              </div>
              <div className="flex gap-x-2 justify-between border-b pb-4 pr-2">
                <span className="font-extralight opacity-50">Passengers:</span>{" "}
                <span className="font-extralight">
                  {data?.vehicle?.passengers ?? "N/A"}
                </span>
              </div>
              <div className="flex gap-x-2 justify-between border-b pb-4 pr-2">
                <span className="font-extralight opacity-50">
                  Vehicle class:
                </span>{" "}
                <span className="font-extralight">
                  {data?.vehicle?.vehicleClass ?? "N/A"}
                </span>
              </div>
            </div>
          </div>
          <div
            className={cn(
              "hidden",
              "md:flex md:w-1/2 md:justify-end md:opacity-50"
            )}
          >
            <CarFront size={350} />
          </div>
        </div>
      </section>
      <Separator className={cn("my-10", "lg:my-20")} />
      <section className={cn("space-y-16")}>
        <DataCarousel
          data={data?.vehicle?.filmConnection?.films}
          type="films"
        />
        {data?.vehicle?.pilotConnection?.pilots.length > 0 && (
          <DataCarousel
            data={data?.vehicle?.pilotConnection?.pilots}
            type="characters"
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
