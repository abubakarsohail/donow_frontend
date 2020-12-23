import http from "./httpService";

const apiEndpoint = "auth/";
const tokenKey = "token";

export const getJwt = () => {
  return localStorage.getItem(tokenKey);
};

http.setJwt(getJwt());

export const login = async (username, password) => {
  const { data } = await http.post(apiEndpoint + "rest-auth/login", {
    username,
    password,
  });
  localStorage.setItem(tokenKey, JSON.stringify(data));
};

export const getCurrentUser = () => {
  try {
    const token = localStorage.getItem(tokenKey);
    return JSON.parse(token);
  } catch (ex) {
    return null;
  }
};
