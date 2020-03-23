import { get, post, del } from "./axios";

export const getHome = params => {
  return get("/getHome", params);
};
