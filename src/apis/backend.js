import axios from "axios";
import { GraphQLClient } from "graphql-request";

export const backend = axios.create({
  baseURL: "https://gentle-beyond-02242.herokuapp.com",
});

export const graphCms = new GraphQLClient(
  process.env.REACT_APP_GRAPHCMS || "",
  { headers: {} }
);

export const strapiCms = axios.create({
  baseURL: "https://discord-ui-strapi.herokuapp.com",
});
