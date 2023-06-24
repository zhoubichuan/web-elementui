import request from "@/util/request";
export function getSelect({ type }) {
  return request({
    url: "mock/select" + type + ".json",
    method: "get",
  });
}
export function changeSelect({ type, data }) {
  return request({
    url: "mock/select?type=" + type,
    method: "post",
    data,
  });
}
