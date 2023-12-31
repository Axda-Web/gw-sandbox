"use client";

import { useQuery } from "@tanstack/react-query";
import request from "graphql-request";
import { graphql } from "@/gql";
import Image from "next/image";
import { cn, releaseDateFormat, toRomanNumeral } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { formatFilmImgPath } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";
import { motion } from "framer-motion";

import { DataCarousel } from "../DataCarousel";

export const FilmFragment = graphql(/* GraphQL */ `
  fragment FilmItem on Film {
    title
    episodeID
    director
    id
    producers
    planetConnection {
      planets {
        name
        id
      }
    }
    characterConnection {
      characters {
        id
        name
      }
    }
    releaseDate
    edited
    created
    openingCrawl
    speciesConnection {
      species {
        id
        name
      }
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

const filmQueryDocument = graphql(/* GraphQL */ `
  query filmQuery($id: ID!) {
    film(id: $id) {
      ...FilmItem
    }
  }
`);

const MotionImage = motion(Image);

export const Film = () => {
  const pathname = usePathname();
  const filmId = pathname?.split("/")[2];
  const { data, isLoading, isError } = useQuery({
    queryKey: ["film"],
    queryFn: async () =>
      request(
        "https://swapi-graphql.netlify.app/.netlify/functions/index",
        filmQueryDocument,
        { id: filmId }
      ),
  });
  console.log("🚀 ~ file: FilmContent.tsx:79 ~ FilmContent ~ data:", data);

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error</p>;

  return (
    <div>
      <div className="flex justify-center items-center">
        <MotionImage
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 1 } }}
          src={formatFilmImgPath(data?.film?.title, "title")}
          alt={`${data?.film?.title!} title image`}
          width={300}
          height={150}
          className={cn("mt-14 mb-10 block ml-14", "sm:mb-24")}
        />
      </div>
      <section className="space-y-4">
        <h4 className={cn("capitalize text-lg", "lg:text-2xl")}>Details</h4>
        <div className={cn("flex flex-col gap-y-8", "md:flex-row gap-x-32")}>
          <div className={cn("text-justify", "md:w-1/2")}>
            <p className="font-light">{data?.film?.openingCrawl}</p>
          </div>
          <div className={cn("min-h-full flex", "md:w-1/2")}>
            <div className="h-full flex flex-col w-1/2 gap-y-4">
              <div className="flex flex-col">
                <span className="font-extralight opacity-50">Director:</span>{" "}
                <span className="font-extralight">{data?.film?.director}</span>
              </div>
              <div className="flex flex-col">
                <span className="font-extralight opacity-50">Producers:</span>
                <ul>
                  {data?.film?.producers.map((p: string, i: number) => (
                    <li key={i} className="font-extralight">
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="w-1/2 flex flex-col gap-y-4">
              <div className="flex flex-col">
                <span className="font-extralight opacity-20">
                  Release date:
                </span>
                <span className="font-extralight">
                  {releaseDateFormat(data?.film?.releaseDate)}
                </span>
              </div>
              <div className="flex flex-col">
                <span className="font-extralight opacity-50">Episode:</span>{" "}
                <span className="font-extralight">
                  {toRomanNumeral(data?.film?.episodeID)}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Separator className={cn("my-10", "lg:my-20")} />
      <section className={cn("space-y-16")}>
        <DataCarousel
          data={data?.film?.characterConnection?.characters}
          type="characters"
        />
        <DataCarousel
          data={data?.film?.speciesConnection?.species}
          type="species"
        />
        <DataCarousel
          data={data?.film?.vehicleConnection?.vehicles}
          type="vehicles"
        />
        <DataCarousel
          data={data?.film?.starshipConnection?.starships}
          type="starships"
        />
        <DataCarousel
          data={data?.film?.planetConnection?.planets}
          type="planets"
        />
      </section>
    </div>
  );
};
