import request from '@/utils/request'
/**
 * 获取订单详情
 * @returns
 */
export function getbaspointpackDetail(data) {
  return request.post({
    url: '/basebusiness/baspointpack/Detail',
    params: data,
  });
}

/**
 * 添加
 * @returns
 */
export function addbaspointpack(data) {
  return request.post({
    url: '/basebusiness/baspointpack/Add',
    params: data,
  });
}

/**
 * 添加
 * @returns
 */
export function editbaspointpack(data) {
  return request.post({
    url: '/basebusiness/baspointpack/Edit',
    params: data,
  });
}

/**
 * 删除
 * @returns
 */
export function deletebaspointpack(data) {
  return request.post({
    url: '/basebusiness/baspointpack/Delete',
    params: data,
  });
}

