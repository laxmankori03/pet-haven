import axios from "axios";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000", // Backend URL from env
  withCredentials: true,               // Cookies, JWT etc. allow
});

export default api;
