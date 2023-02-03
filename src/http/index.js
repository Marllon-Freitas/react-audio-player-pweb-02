import axios from "axios";

const BASE_URL = "https://api.napster.com/";

const http = axios.create({
  baseURL: BASE_URL,
});

export default http;