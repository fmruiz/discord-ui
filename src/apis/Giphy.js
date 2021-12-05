import axios from "axios";

export const Giphy = axios.create({
    baseURL: "https://api.giphy.com/v1/gifs/search",
    params: {
        api_key: "NGlqGXm6ZOPsH0J5AUhH5rgc792tBS01",
        q: "matrix",
        limit: 1
    }
})