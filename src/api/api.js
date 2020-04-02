import { get, post, del } from "./axios";

// 请求首页信息
export const getHome = params => {
  return get("/api/info", params);
};

// 请求首页项目信息
export const getProjects = params => {
  return get("/api/project", params);
};

// 请求简历页面信息
export const getResume = params => {
  return get("/api/resume", params);
};

// 留言提交接口
export const postMsg = params => {
  return post("/api/add", params);
};

// 获取留言接口
export const getMsg = params => {
  return get("/api/msg", params);
};

// 关于页面请求
export const getAbout = params => {
  return get("/api/about", params);
};

// 关于友情链接请求
export const getConnect = params => {
  return get("/api/connect", params);
};
