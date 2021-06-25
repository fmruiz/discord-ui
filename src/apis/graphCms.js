import { GraphQLClient } from "graphql-request";
import { endpoints } from "../redux/endpoints";

export const graphCms = new GraphQLClient(endpoints.CMS_URL, { headers: {} });
