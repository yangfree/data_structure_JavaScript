import qs from "qs";
import axios from "axios";
import { reject } from "async";

const $http = axios.create();

$http.defaults.baseURL = "http://localhost:8082";
$http.defaults.timeout = 5000;

$http.interceptors.request.use(
  config => {
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);
$http.interceptors.response.use(
  response => {
    if (response.status === 200) {
      return Promise.resolve(response);
    } else {
      return Promise.reject(response);
    }
  },
  error => {
    let errStatus = error.response.status;
    if (errStatus) {
      switch (errStatus) {
        case 404:
          alert("接口不存在");
          break;
        default:
          alert("错误提示");
      }
    }
    return Promise.reject(error.response);
  }
);

// 封装get请求
export function get(url, params) {
  return new Promise((resolve, reject) => {
    $http
      .get(url, {
        params: params
      })
      .then(res => {
        resolve(res.data);
      })
      .catch(err => {
        reject(err.data);
      });
  });
}

// 封装post请求
export function post(url, params) {
  return new Promise((resolve, reject) => {
    $http
      .post(url, qs.stringify(params))
      .then(res => {
        resolve(res.data);
      })
      .catch(err => {
        reject(err.data);
      });
  });
}

// 封装delete请求
export function del(url, params) {
  return new Promise((resolve, reject) => {
    $http
      .delete(url, params)
      .then(res => {
        resolve(res);
      })
      .catch(err => {
        reject(err);
      });
  });
}