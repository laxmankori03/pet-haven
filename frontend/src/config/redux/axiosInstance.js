import axios from "axios";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL, // Backend URL from env
  withCredentials: true,               // Cookies, JWT etc. allow
});

export default api;
