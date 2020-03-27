import { get, post, del } from "./axios";

export const getHome = params => {
  return get("/home/info", params);
};

export const getProjects = params => {
  return get("/home/project", params);
};
