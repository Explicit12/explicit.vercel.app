import { ApolloClient, InMemoryCache } from "@apollo/client/core/core.cjs";
import GithubQuery from "~/server/queries/github";

const client = new ApolloClient({
  uri: "https://api.github.com/graphql",
  cache: new InMemoryCache(),
  headers: {
    Authorization: "github token here",
  },
});

export default defineEventHandler(async (event) => {
  setResponseHeaders(event, {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET",
    "Access-Control-Allow-Credentials": "true",
    "Cross-Origin-Resource-Policy": "same-origin",
  });

  const { data } = await client.query({
    query: GithubQuery,
  });

  return { ...data };
});
