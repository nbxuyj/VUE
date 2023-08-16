import request from '@/utils/request'
/**
 * 获取订单详情
 * @returns
 */
export function getbasagreemodeDetail(data) {
  return request.post({
    url: '/basebusiness/basagreemode/Detail',
    params: data,
  });
}

/**
 * 添加
 * @returns
 */
export function addbasagreemode(data) {
  return request.post({
    url: '/basebusiness/basagreemode/Add',
    params: data,
  });
}

/**
 * 添加
 * @returns
 */
export function editbasagreemode(data) {
  return request.post({
    url: '/basebusiness/basagreemode/Edit',
    params: data,
  });
}

/**
 * 删除
 * @returns
 */
export function deletebasagreemode(data) {
  return request.post({
    url: '/basebusiness/basagreemode/Delete',
    params: data,
  });
}

