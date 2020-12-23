import axios from "axios";

axios.defaults.baseURL = process.env.REACT_APP_API_URL;

export const setJwt = (jwt) => {
  axios.defaults.headers.common["Authorization"] = jwt;
};

export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
  setJwt,
};
