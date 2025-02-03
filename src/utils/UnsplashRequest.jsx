import axios from "axios";

const UnsplashRequest = axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: import.meta.env.VITE_UNSPLASH_PUBLIC_KEY,
  },
});

export default UnsplashRequest;