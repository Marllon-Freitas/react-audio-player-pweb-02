import axios from "axios";

const BASE_URL = "https://api.napster.com/v2.2/";

const http = axios.create({
  baseURL: BASE_URL,
});

export default http;