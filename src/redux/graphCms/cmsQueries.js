import { gql } from "graphql-request";

export const queries = {
  logoQuery: gql`
    {
      assets {
        id
        url
      }
    }
  `,
};

