import { get, post, del } from "./axios";

// 请求首页信息
export const getHome = params => {
  return get("/home/info", params);
};

// 请求首页项目信息
export const getProjects = params => {
  return get("/home/project", params);
};

// 请求简历页面信息
export const getResume = params => {
  return get("/resume", params);
};

// 留言提交接口
export const postMsg = params => {
  return post('/message/add', params);
}

// 获取留言接口
export const getMsg = params => {
  return get('/message/list', params);
}