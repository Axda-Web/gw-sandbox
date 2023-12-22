"use client";

import { useQuery } from "@tanstack/react-query";
import request from "graphql-request";
import { graphql } from "@/gql";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";
import { formatMovieImgPath } from "@/lib/utils";

const allFilmsWithVariablesQueryDocument = graphql(/* GraphQL */ `
  query allFilmsWithVariablesQuery($first: Int!) {
    allFilms(first: $first) {
      edges {
        node {
          id
          title
        }
      }
    }
  }
`);

export const DataList = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["films"],
    queryFn: async () =>
      request(
        "https://swapi-graphql.netlify.app/.netlify/functions/index",
        allFilmsWithVariablesQueryDocument,
        { first: 10 }
      ),
  });

  if (isLoading) return <div>Loading...</div>;
  if (isError) throw Error();

  return (
    <section
      className={cn(
        "grid gap-8 grid-cols-1 justify-items-center mt-6",
        "sm:grid-cols-2 sm:mt-12",
        "lg:grid-cols-3"
      )}
    >
      {data?.allFilms?.edges?.map((film) => {
        const imgPath = formatMovieImgPath(film?.node?.title!);
        return (
          <Card
            className="max-w-fit rounded-none shadow-2xl"
            key={film?.node?.id}
          >
            <Link href={`/films/${film?.node?.id}`}>
              <CardContent className="p-0">
                <Image
                  src={imgPath}
                  width={400}
                  height={225}
                  alt={`${film?.node?.title} poster`}
                  className={cn("")}
                />
              </CardContent>
            </Link>
          </Card>
        );
      })}
    </section>
  );
};
