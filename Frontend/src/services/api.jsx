import axios from "axios";

const API = axios.create({
  baseURL: "https://your-api-url.com/api",
});

export default API;
