import { GraphQLClient } from "graphql-request";
import GithubQuery from "~~/server/queries/github";

import type { GitHubInfo } from "~~/server/queries/github";

const client = new GraphQLClient("https://api.github.com/graphql", {
  headers: { Authorization: process.env.GITHUB_KEY || "" },
});

export default defineEventHandler(async () => {
  const data: GitHubInfo = await client.request(GithubQuery);
  return data;
});
