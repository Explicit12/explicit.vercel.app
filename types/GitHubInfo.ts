/* eslint-disable semi */
export default interface GitHubInfo {
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
