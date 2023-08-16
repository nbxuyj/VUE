// import request from '@/utils/request'

// /**
//  * 获取订单详情
//  * @returns
//  */
// export function getbascarfactoryDetail(data) {
//   return request.post({
//     url: '/basebusiness/bascarfactory/Detail',
//     params: data,
//   });
// }

// /**
//  * 添加
//  * @returns
//  */
// export function addbascarfactory(data) {
//   return request.post({
//     url: '/basebusiness/bascarfactory/Add',
//     params: data,
//   });
// }

// /**
//  * 添加
//  * @returns
//  */
// export function editbascarfactory(data) {
//   return request.post({
//     url: '/basebusiness/bascarfactory/Edit',
//     params: data,
//   });
// }

// /**
//  * 删除
//  * @returns
//  */
// export function deletebascarfactory(data) {
//   return request.post({
//     url: '/basebusiness/bascarfactory/Delete',
//     params: data,
//   });
// }
import bascarfactory from './modules/bascarfactory.js';
import basdrivers from './modules/basdrivers';
import basagreemode from './modules/basagreemode';
export default {
  bascarfactory,
  basdrivers,
  basagreemode
};
