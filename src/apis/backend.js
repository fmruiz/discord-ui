import axios from "axios";

const backend = axios.create({
  baseURL: "https://gentle-beyond-02242.herokuapp.com",
});

export default backend;