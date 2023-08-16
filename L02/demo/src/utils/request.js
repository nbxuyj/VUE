import axios from 'axios'
import { MessageBox, Message } from 'element-ui'
import store from '@/store'
import { getToken } from '@/utils/auth'
import qs from 'qs'
var loadingInstance = null
var isloading = false
const prefixUrl = '/fitnessUnit'
// create an axios instance
const service = axios.create({
  baseURL: '', // url = base url + request url
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 500000 // request timeout,
})
// request interceptor
service.interceptors.request.use(
  config => {
    // do something before request is sent
    // if (isloading) {
    //   loadingInstance = Loading.service({
    //     lock: true,
    //     text: '加载中......',
    //     background: 'rgba(0, 0, 0, 0.8)'
    //   })
    // }
    config.headers.SessionToken = localStorage.token
    config.headers.PointID = localStorage.pointID
    return config
  },
  error => {
    // do something with request error
    console.log(error) // for debug
    return Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
  /**
   * If you want to get http information such as headers or status
   * Please return  response => response
  */

  /**
   * Determine the request status by custom code
   * Here is just an example
   * You can also judge the status by HTTP Status Code
   */
  response => {
    const res = response.data
    if (loadingInstance) { loadingInstance.close() }
    isloading = false
    // if the custom code is not 20000, it is judged as an error.
    return res
  },
  error => {
    if (isloading) { loadingInstance.close() }
    console.log('err' + error) // for debug
    Message({
      message: error.message,
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.reject(error)
  }
)
const http = {
  post(options) {
    if (options.loading === false) { isloading = options.loading }
    var ran = Math.random() * 10000000
    options.url = prefixUrl + (options.url.substring(0, 1) === '/' ? options.url : '/' + options.url) + (options.url.indexOf('?') === -1 ? '?ran=' + ran : '&ran=' + ran)
    return new Promise((resolve, rejest) => {
      service.post(options.url, options.params, {
        transformRequest: [(params) => {
          // console.log(params)
          return JSON.stringify(params)
        }],
        headers: {
          'Content-Type': 'application/json'
        }
      }).then((res) => {
        if (options.success) {
          options.success(res.Data, options.obj)
        }
        resolve(res)
      }).catch((res) => {
        rejest(res);
      })
    })
  },
  postForm(options) {
    var ran = Math.random() * 10000000
    if (options.loading === false) isloading = false
    if (options.type === 'Form') {
      const requesturl = prefixUrl + (options.url.substring(0, 1) === '/' ? options.url : '/' + options.url) + (options.url.indexOf('?') === -1 ? '?ran=' + ran : '&ran=' + ran)
      return new Promise((resolve, rejest) => {
        service.post(requesturl, qs.stringify(options.params), {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        }).then(res => {
          if (options.success) {
            options.success(res.Data)
          }
          resolve(res)
        }).catch((res) => {
          rejest(res);
        })
      })
    } else {
      const requesturl = prefixUrl + (options.url.substring(0, 1) === '/' ? options.url : '/' + options.url) + (options.url.indexOf('?') === -1 ? '?ran=' + ran : '&ran=' + ran) + (options.params ? '&' + qs.stringify(options.params) : '')
      return new Promise((resolve, rejest) => {
        service.post(requesturl, '', {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        })
          .then(res => {
            if (options.success && res) {
              options.success(res.Data)
            }
            resolve(res)
          })
          .catch((res) => {
            rejest(res);
          })
      })
    }
  },
  get(url, params) {
    return service.get(url, {
      params: params,
      paramsSerializer: (params) => {
        return qs.stringify(params)
      }
    })
  },
  fileDownload(options) {
    // let searchForm = { startTime: '2022-05-06 00:00:00', endTime: '2022-05-06 16:00:00'}
    // let openUrl = '/vue/xxx/xxxx-export-excel' // 请求的接口
    var ran = Math.random() * 10000000
    options.url = prefixUrl + (options.url.substring(0, 1) === '/' ? options.url : '/' + options.url) + (options.url.indexOf('?') === -1 ? '?ran=' + ran : '&ran=' + ran)
    // loadingInstance = Loading.service({
    //   lock: true,
    //   text: '下载中......',
    //   background: 'rgba(0, 0, 0, 0.8)'
    // })
    axios({
        method: 'post',
        headers: {
          "PointID": localStorage.pointID
        },
        url: options.url,
        // timeout: 600000, // 请求超时时间，数据量多后台响应慢的情况可以调大点，没生效的话可能是vue.config.js里的配置影响了
        responseType: 'blob', // 返回类型为数据流
        data: options.params // 需要传参的话，在这传
        }).then(res => {
            if (res && res.data) {
                // 调用js-file-download下载文件，第一个参数是数据流，第二个参数是文件名，我这后端返回时把文件名放到响应的header的filename字段中，所以用这种方式取出
               // jsFileDownload(res.data, decodeURIComponent(res.headers['filename']))
            }
        }).finally(() => loadingInstance.close())
  }
}
export default http

export {
  service
}
