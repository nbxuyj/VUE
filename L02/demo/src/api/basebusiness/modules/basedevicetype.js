import request from '@/utils/request'
/**
 * 获取订单详情
 * @returns
 */
export function getbasedevicetypeDetail(data) {
  return request.post({
    url: '/basebusiness/basedevicetype/Detail',
    params: data,
  });
}

/**
 * 添加
 * @returns
 */
export function addbasedevicetype(data) {
  return request.post({
    url: '/basebusiness/basedevicetype/Add',
    params: data,
  });
}

/**
 * 添加
 * @returns
 */
export function editbasedevicetype(data) {
  return request.post({
    url: '/basebusiness/basedevicetype/Edit',
    params: data,
  });
}

/**
 * 删除
 * @returns
 */
export function deletebasedevicetype(data) {
  return request.post({
    url: '/basebusiness/basedevicetype/Delete',
    params: data,
  });
}

