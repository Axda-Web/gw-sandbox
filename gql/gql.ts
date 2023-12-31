/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n  query allFilmsWithVariablesQuery($first: Int!) {\n    allFilms(first: $first) {\n      edges {\n        node {\n          id\n          title\n        }\n      }\n    }\n  }\n": types.AllFilmsWithVariablesQueryDocument,
    "\n  fragment FilmItem on Film {\n    title\n    episodeID\n    director\n    id\n    producers\n    planetConnection {\n      planets {\n        name\n        id\n      }\n    }\n    characterConnection {\n      characters {\n        id\n        name\n      }\n    }\n    releaseDate\n    edited\n    created\n    openingCrawl\n    speciesConnection {\n      species {\n        id\n        name\n      }\n    }\n    starshipConnection {\n      starships {\n        id\n        name\n      }\n    }\n    vehicleConnection {\n      vehicles {\n        id\n        name\n      }\n    }\n  }\n": types.FilmItemFragmentDoc,
    "\n  query filmQuery($id: ID!) {\n    film(id: $id) {\n      ...FilmItem\n    }\n  }\n": types.FilmQueryDocument,
    "\n  fragment PersonItem on Person {\n    birthYear\n    created\n    edited\n    eyeColor\n    filmConnection {\n      films {\n        id\n        title\n      }\n    }\n    gender\n    hairColor\n    height\n    homeworld {\n      id\n      name\n    }\n    id\n    mass\n    name\n    skinColor\n    species {\n      id\n      name\n    }\n    starshipConnection {\n      starships {\n        id\n        name\n      }\n    }\n    vehicleConnection {\n      vehicles {\n        id\n        name\n      }\n    }\n  }\n": types.PersonItemFragmentDoc,
    "\n  query personQuery($id: ID!) {\n    person(id: $id) {\n      ...PersonItem\n    }\n  }\n": types.PersonQueryDocument,
    "\n  fragment PlanetItem on Planet {\n    climates\n    created\n    diameter\n    edited\n    filmConnection {\n      films {\n        id\n        title\n      }\n    }\n    gravity\n    id\n    name\n    orbitalPeriod\n    population\n    rotationPeriod\n    surfaceWater\n    terrains\n  }\n": types.PlanetItemFragmentDoc,
    "\n  query planetQuery($id: ID!) {\n    planet(id: $id) {\n      ...PlanetItem\n    }\n  }\n": types.PlanetQueryDocument,
    "\n  fragment SpeciesItem on Species {\n    averageHeight\n    averageLifespan\n    classification\n    created\n    designation\n    edited\n    eyeColors\n    hairColors\n    homeworld {\n      id\n      name\n    }\n    id\n    language\n    name\n    personConnection {\n      people {\n        id\n        name\n      }\n    }\n    skinColors\n    filmConnection {\n      films {\n        id\n        title\n      }\n    }\n  }\n": types.SpeciesItemFragmentDoc,
    "\n  query speciesQuery($id: ID!) {\n    species(id: $id) {\n      ...SpeciesItem\n    }\n  }\n": types.SpeciesQueryDocument,
    "\n  fragment StarshipItem on Starship {\n    MGLT\n    cargoCapacity\n    consumables\n    costInCredits\n    created\n    crew\n    edited\n    hyperdriveRating\n    id\n    length\n    manufacturers\n    maxAtmospheringSpeed\n    model\n    name\n    passengers\n    starshipClass\n    filmConnection {\n      films {\n        id\n        title\n      }\n    }\n    pilotConnection {\n      pilots {\n        id\n        name\n      }\n    }\n  }\n": types.StarshipItemFragmentDoc,
    "\n  query starshipQuery($id: ID!) {\n    starship(id: $id) {\n      ...StarshipItem\n    }\n  }\n": types.StarshipQueryDocument,
    "\n  fragment VehicleItem on Vehicle {\n    cargoCapacity\n    consumables\n    costInCredits\n    created\n    crew\n    edited\n    id\n    length\n    manufacturers\n    maxAtmospheringSpeed\n    model\n    name\n    passengers\n    vehicleClass\n    filmConnection {\n      films {\n        id\n        title\n      }\n    }\n    pilotConnection {\n      pilots {\n        id\n        name\n      }\n    }\n  }\n": types.VehicleItemFragmentDoc,
    "\n  query vehicleQuery($id: ID!) {\n    vehicle(id: $id) {\n      ...VehicleItem\n    }\n  }\n": types.VehicleQueryDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query allFilmsWithVariablesQuery($first: Int!) {\n    allFilms(first: $first) {\n      edges {\n        node {\n          id\n          title\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query allFilmsWithVariablesQuery($first: Int!) {\n    allFilms(first: $first) {\n      edges {\n        node {\n          id\n          title\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment FilmItem on Film {\n    title\n    episodeID\n    director\n    id\n    producers\n    planetConnection {\n      planets {\n        name\n        id\n      }\n    }\n    characterConnection {\n      characters {\n        id\n        name\n      }\n    }\n    releaseDate\n    edited\n    created\n    openingCrawl\n    speciesConnection {\n      species {\n        id\n        name\n      }\n    }\n    starshipConnection {\n      starships {\n        id\n        name\n      }\n    }\n    vehicleConnection {\n      vehicles {\n        id\n        name\n      }\n    }\n  }\n"): (typeof documents)["\n  fragment FilmItem on Film {\n    title\n    episodeID\n    director\n    id\n    producers\n    planetConnection {\n      planets {\n        name\n        id\n      }\n    }\n    characterConnection {\n      characters {\n        id\n        name\n      }\n    }\n    releaseDate\n    edited\n    created\n    openingCrawl\n    speciesConnection {\n      species {\n        id\n        name\n      }\n    }\n    starshipConnection {\n      starships {\n        id\n        name\n      }\n    }\n    vehicleConnection {\n      vehicles {\n        id\n        name\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query filmQuery($id: ID!) {\n    film(id: $id) {\n      ...FilmItem\n    }\n  }\n"): (typeof documents)["\n  query filmQuery($id: ID!) {\n    film(id: $id) {\n      ...FilmItem\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment PersonItem on Person {\n    birthYear\n    created\n    edited\n    eyeColor\n    filmConnection {\n      films {\n        id\n        title\n      }\n    }\n    gender\n    hairColor\n    height\n    homeworld {\n      id\n      name\n    }\n    id\n    mass\n    name\n    skinColor\n    species {\n      id\n      name\n    }\n    starshipConnection {\n      starships {\n        id\n        name\n      }\n    }\n    vehicleConnection {\n      vehicles {\n        id\n        name\n      }\n    }\n  }\n"): (typeof documents)["\n  fragment PersonItem on Person {\n    birthYear\n    created\n    edited\n    eyeColor\n    filmConnection {\n      films {\n        id\n        title\n      }\n    }\n    gender\n    hairColor\n    height\n    homeworld {\n      id\n      name\n    }\n    id\n    mass\n    name\n    skinColor\n    species {\n      id\n      name\n    }\n    starshipConnection {\n      starships {\n        id\n        name\n      }\n    }\n    vehicleConnection {\n      vehicles {\n        id\n        name\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query personQuery($id: ID!) {\n    person(id: $id) {\n      ...PersonItem\n    }\n  }\n"): (typeof documents)["\n  query personQuery($id: ID!) {\n    person(id: $id) {\n      ...PersonItem\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment PlanetItem on Planet {\n    climates\n    created\n    diameter\n    edited\n    filmConnection {\n      films {\n        id\n        title\n      }\n    }\n    gravity\n    id\n    name\n    orbitalPeriod\n    population\n    rotationPeriod\n    surfaceWater\n    terrains\n  }\n"): (typeof documents)["\n  fragment PlanetItem on Planet {\n    climates\n    created\n    diameter\n    edited\n    filmConnection {\n      films {\n        id\n        title\n      }\n    }\n    gravity\n    id\n    name\n    orbitalPeriod\n    population\n    rotationPeriod\n    surfaceWater\n    terrains\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query planetQuery($id: ID!) {\n    planet(id: $id) {\n      ...PlanetItem\n    }\n  }\n"): (typeof documents)["\n  query planetQuery($id: ID!) {\n    planet(id: $id) {\n      ...PlanetItem\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment SpeciesItem on Species {\n    averageHeight\n    averageLifespan\n    classification\n    created\n    designation\n    edited\n    eyeColors\n    hairColors\n    homeworld {\n      id\n      name\n    }\n    id\n    language\n    name\n    personConnection {\n      people {\n        id\n        name\n      }\n    }\n    skinColors\n    filmConnection {\n      films {\n        id\n        title\n      }\n    }\n  }\n"): (typeof documents)["\n  fragment SpeciesItem on Species {\n    averageHeight\n    averageLifespan\n    classification\n    created\n    designation\n    edited\n    eyeColors\n    hairColors\n    homeworld {\n      id\n      name\n    }\n    id\n    language\n    name\n    personConnection {\n      people {\n        id\n        name\n      }\n    }\n    skinColors\n    filmConnection {\n      films {\n        id\n        title\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query speciesQuery($id: ID!) {\n    species(id: $id) {\n      ...SpeciesItem\n    }\n  }\n"): (typeof documents)["\n  query speciesQuery($id: ID!) {\n    species(id: $id) {\n      ...SpeciesItem\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment StarshipItem on Starship {\n    MGLT\n    cargoCapacity\n    consumables\n    costInCredits\n    created\n    crew\n    edited\n    hyperdriveRating\n    id\n    length\n    manufacturers\n    maxAtmospheringSpeed\n    model\n    name\n    passengers\n    starshipClass\n    filmConnection {\n      films {\n        id\n        title\n      }\n    }\n    pilotConnection {\n      pilots {\n        id\n        name\n      }\n    }\n  }\n"): (typeof documents)["\n  fragment StarshipItem on Starship {\n    MGLT\n    cargoCapacity\n    consumables\n    costInCredits\n    created\n    crew\n    edited\n    hyperdriveRating\n    id\n    length\n    manufacturers\n    maxAtmospheringSpeed\n    model\n    name\n    passengers\n    starshipClass\n    filmConnection {\n      films {\n        id\n        title\n      }\n    }\n    pilotConnection {\n      pilots {\n        id\n        name\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query starshipQuery($id: ID!) {\n    starship(id: $id) {\n      ...StarshipItem\n    }\n  }\n"): (typeof documents)["\n  query starshipQuery($id: ID!) {\n    starship(id: $id) {\n      ...StarshipItem\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment VehicleItem on Vehicle {\n    cargoCapacity\n    consumables\n    costInCredits\n    created\n    crew\n    edited\n    id\n    length\n    manufacturers\n    maxAtmospheringSpeed\n    model\n    name\n    passengers\n    vehicleClass\n    filmConnection {\n      films {\n        id\n        title\n      }\n    }\n    pilotConnection {\n      pilots {\n        id\n        name\n      }\n    }\n  }\n"): (typeof documents)["\n  fragment VehicleItem on Vehicle {\n    cargoCapacity\n    consumables\n    costInCredits\n    created\n    crew\n    edited\n    id\n    length\n    manufacturers\n    maxAtmospheringSpeed\n    model\n    name\n    passengers\n    vehicleClass\n    filmConnection {\n      films {\n        id\n        title\n      }\n    }\n    pilotConnection {\n      pilots {\n        id\n        name\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query vehicleQuery($id: ID!) {\n    vehicle(id: $id) {\n      ...VehicleItem\n    }\n  }\n"): (typeof documents)["\n  query vehicleQuery($id: ID!) {\n    vehicle(id: $id) {\n      ...VehicleItem\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;