import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:5168/api",
});

export { axiosInstance };
