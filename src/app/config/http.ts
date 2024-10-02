import axios from "axios";

export const BACK_URL = `https://api.escuelajs.co/api/v1`;

export const http = {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
};
