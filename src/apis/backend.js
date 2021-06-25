import axios from "axios";

export const backend = axios.create({
  baseURL: "https://gentle-beyond-02242.herokuapp.com",
});
