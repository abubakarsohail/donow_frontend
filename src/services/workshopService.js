import http from "./httpService";

const apiEndpoint = "workshop/";

export const getCategories = () => {
  return http.get(apiEndpoint + "categories");
};

export const createWorkshop = (values) => {
  return http.post(apiEndpoint + "list", { ...values });
};
