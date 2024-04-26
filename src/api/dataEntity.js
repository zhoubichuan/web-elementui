import request from '@/util/request'
// 列表查询
export function getDataEntityList (data) {
  return request({
    url: 'https://zhoubichuan.com/abstract-express/api/template/list',
    method: 'post',
    data
  })
}

export function getDataEntityList2 (data) {
  return request({
    url: 'https://zhoubichuan.com/abstract-express/api/template/list',
    method: 'post',
    data
  })
}