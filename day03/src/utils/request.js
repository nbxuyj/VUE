import axios from 'axios'
import qs from 'qs'
import { Message, Loading } from 'element-ui'
import router from '../router'
var loadingInstance = null
var isloading = true
// create an axios instance
const service = axios.create({
  baseURL: '', // url = base url + request url
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 30000 // request timeout,
})
// request interceptor
service.interceptors.request.use(
  config => {
    // do something before request is sent
    if (isloading) {
      loadingInstance = Loading.service({
        lock: true,
        text: '加载中......',
        background: 'rgba(0, 0, 0, 0.8)'
      })
    }
    config.headers.SessionToken = localStorage.token
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
    isloading = true
    // if the custom code is not 20000, it is judged as an error.
    if (!res.IsSuccess) {
      if (res.Message === '用户未登入') {
        // to re-login
        // MessageBox.confirm('你已注销用户, 你确定要取消登入或者重新登入', '确认注销', {
        //   confirmButtonText: '重新登入',
        //   cancelButtonText: '取消',
        //   type: 'warning'
        // }).then(() => {
        //   // store.dispatch('user/resetToken').then(() => {
        //   //   location.reload()
        //   // })
        // })
        router.replace({
          path: '/login'
          // 登录成功后跳入浏览的当前页面
          // query: {redirect: router.currentRoute.fullPath}
        })
        return
      }
      if (res.Message) {
        Message({
          message: res.Message,
          type: 'error',
          duration: 5 * 1000
        })
        return
      }
      if (!res.status === 200) {
        if (res.code !== '1001') {
          Message({
            message: res.Message,
            type: 'error',
            duration: 5 * 1000
          })
        }

        // 50008: Illegal token; 50012: Other clients logged in; 50014: Token expired;
        return Promise.reject(new Error(res.Message))
      } else {
        return res
      }
    } else {
      return res
    }
  },
  error => {
    loadingInstance.close()
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
  post (options) {
    if (options.loading) { this.isloading = options.loading }
    var ran = Math.random() * 10000000
    options.url = options.url + (options.url.indexOf('?') === -1 ? '?ran=' + ran : '&ran=' + ran)
    return service.post(options.url, options.params, {
      transformRequest: [(params) => {
        // console.log(params)
        return JSON.stringify(params)
      }],
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((res) => {
      options.success(res.Data, options.obj)
    })
  },
  postForm (options) {
    var ran = Math.random() * 10000000
    if (options.type === 'Form') {
      const requesturl = options.url + (options.url.indexOf('?') === -1 ? '?ran=' + ran : '&ran=' + ran)
      return service.post(requesturl, qs.stringify(options.params), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
        .then(res => {
          options.success(res.Data)
        })
    } else {
      const requesturl = options.url + (options.url.indexOf('?') === -1 ? '?ran=' + ran : '&ran=' + ran) + (options.params ? '&' + qs.stringify(options.params) : '')
      return service.post(requesturl, '', {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
        .then(res => {
          if (options.success && res) {
            options.success(res.Data)
          }
        })
    }
  },
  get (url, params) {
    return service.get(url, {
      params: params,
      paramsSerializer: (params) => {
        return qs.stringify(params)
      }
    })
  }
}
export default http
