import axios from "axios";

const cms = axios.create({
  baseURL: "https://discord-ui-strapi.herokuapp.com",
});

export default cms;
