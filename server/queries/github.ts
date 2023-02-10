import { gql } from "@apollo/client/core/core.cjs";

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
