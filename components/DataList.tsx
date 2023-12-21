"use client";

import { useQuery } from "@tanstack/react-query";
import request from "graphql-request";
import { graphql } from "@/gql";

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
    <section>
      {data?.allFilms?.edges?.map((film) => (
        <div key={film?.node?.id}>{film?.node?.title}</div>
      ))}
    </section>
  );
};
