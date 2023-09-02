import request from "@/util/request";
export function getSelect({ type }) {
  let target = localStorage.productUrl
    ? {
        url: "/antdpro-express/api/rule?current=1&pageSize=20&type=" + type,
        method: "get",
        params,
      }
    : {
        url: "mock/select" + type + ".json",
        method: "get",
      };
  return request(target);
}

export function changeSelect({ type, data }) {
  let target = localStorage.productUrl
    ? {
        url: "/antdpro-express/api/rule",
        method: "post",
        params:{type,...data},
      }
    : {
        url: "mock/select" + type + ".json",
        method: "post",
      };
  return request(target);
}
