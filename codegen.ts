import { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: "https://swapi-graphql.netlify.app/.netlify/functions/index",
  documents: ["components/*.tsx"],
  ignoreNoDocuments: true,
  generates: {
    "gql/": {
      preset: "client",
      plugins: [],
    },
  },
};

export default config;
