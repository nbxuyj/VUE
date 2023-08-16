import request from '@/utils/request'
/**
 * 获取订单详情
 * @returns
 */
export function getbasdistteamDetail(data) {
  return request.post({
    url: '/basebusiness/basdistteam/Detail',
    params: data,
  });
}

/**
 * 添加
 * @returns
 */
export function addbasdistteam(data) {
  return request.post({
    url: '/basebusiness/basdistteam/Add',
    params: data,
  });
}

/**
 * 添加
 * @returns
 */
export function editbasdistteam(data) {
  return request.post({
    url: '/basebusiness/basdistteam/Edit',
    params: data,
  });
}

/**
 * 删除
 * @returns
 */
export function deletebasdistteam(data) {
  return request.post({
    url: '/basebusiness/basdistteam/Delete',
    params: data,
  });
}

