
import request from '@/utils/request'
/**
 * 获取订单详情
 * @returns
 */
export function getbasdriversDetail(data) {
  return request.post({
    url: '/basebusiness/basdrivers/Detail',
    params: data,
  });
}

/**
 * 添加(测试)
 * @returns
 */
export function addbasdrivers(data) {
  return request.post({
    url: '/basebusiness/basAgreemode/TestAdd',
    params: data,
  });
}



/**
 * 添加
 * @returns
 */
export function editbasdrivers(data) {
  return request.post({
    url: '/basebusiness/basdrivers/Edit',
    params: data,
  });
}

/**
 * 删除
 * @returns
 */
export function deletebasdrivers(data) {
  return request.post({
    url: '/basebusiness/basdrivers/Delete',
    params: data,
  });
}

