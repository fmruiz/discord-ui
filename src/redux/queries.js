import { gql } from "graphql-request";

export const logoQueries = gql`
  {
    assets {
      id
      url
    }
  }
`;
