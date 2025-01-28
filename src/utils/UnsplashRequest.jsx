import axios from "axios";

const UnsplashRequest = axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID KgB0BRC_cRCN8BmPmnlxn29oNuONgnm2gov60UzPfN0",
  },
});

export default UnsplashRequest;