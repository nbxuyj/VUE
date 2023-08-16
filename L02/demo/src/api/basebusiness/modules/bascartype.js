import request from '@/utils/request'
/**
 * 获取订单详情
 * @returns
 */
export function getbascartypeDetail(data) {
  return request.post({
    url: '/basebusiness/BasCarType/Detail',
    params: data,
  });
}

/**
 * 添加
 * @returns
 */
export function addbascartype(data) {
  return request.post({
    url: '/basebusiness/BasCarType/Add',
    params: data,
  });
}

/**
 * 添加
 * @returns
 */
export function editbascartype(data) {
  return request.post({
    url: '/basebusiness/BasCarType/Edit',
    params: data,
  });
}

/**
 * 删除
 * @returns
 */
export function deletebascartype(data) {
  return request.post({
    url: '/basebusiness/bascartype/Delete',
    params: data,
  });
}

