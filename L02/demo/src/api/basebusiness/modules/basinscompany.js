import request from '@/utils/request'
/**
 * 获取订单详情
 * @returns
 */
export function getbasinscompanyDetail(data) {
  return request.post({
    url: '/basebusiness/basinscompany/Detail',
    params: data,
  });
}

/**
 * 添加
 * @returns
 */
export function addbasinscompany(data) {
  return request.post({
    url: '/basebusiness/basinscompany/Add',
    params: data,
  });
}

/**
 * 添加
 * @returns
 */
export function editbasinscompany(data) {
  return request.post({
    url: '/basebusiness/basinscompany/Edit',
    params: data,
  });
}

/**
 * 删除
 * @returns
 */
export function deletebasinscompany(data) {
  return request.post({
    url: '/basebusiness/basinscompany/Delete',
    params: data,
  });
}

