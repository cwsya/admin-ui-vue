import request from "@/utils/request.js";

export function getData(params) {
  return request({
    url: "/api/auth/test1",
    method: "post",
    params,
  });
}