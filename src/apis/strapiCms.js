import axios from "axios";

export const strapiCms = axios.create({
  baseURL: "https://discord-ui-strapi.herokuapp.com",
});
