import axios from "axios";

export const backend = axios.create({
  baseURL: "https://gentle-beyond-02242.herokuapp.com",
});

export const graphCms = axios.create({
  baseURL:
    "https://api-us-east-1.graphcms.com/v2/ckqb1dhx5mci401z1cyjq5jao/master",
});

export const strapiCms = axios.create({
  baseURL: "https://discord-ui-strapi.herokuapp.com",
});
