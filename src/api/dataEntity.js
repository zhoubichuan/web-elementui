import request from '@/util/request'
// 列表查询
export function getDataEntityList (data) {
  return request({
    url: '/api/dataEntity/list',
    method: 'post',
    data
  })
}