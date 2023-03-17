import { gql } from "graphql-request";

/* eslint-disable semi */
export interface GitHubInfo {
  viewer: {
    login: string;
    avatarUrl: string;
    url: string;
    pinnedItems: {
      nodes: [
        {
          name: string;
          description: string;
          url: string;
          stargazerCount: number;
          languages: {
            nodes: [{ name: string; color: string }];
          };
        },
      ];
    };
  };
}

export default gql`
  {
    viewer {
      login
      avatarUrl
      url
      pinnedItems(first: 6, types: REPOSITORY) {
        nodes {
          ... on Repository {
            name
            description
            url
            stargazerCount
            languages(first: 6) {
              nodes {
                name
                color
              }
            }
          }
        }
      }
    }
  }
`;
