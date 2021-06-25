import { GraphQLClient } from "graphql-request";

export const graphCms = new GraphQLClient(
  process.env.REACT_APP_GRAPHCMS || "",
  { headers: {} }
);
