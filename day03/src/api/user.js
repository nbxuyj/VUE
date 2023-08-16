import request from '@/utils/request'

export async function login (data) {
  const res = await request.postNoHeader({
    url: '/manage/User/LoginAction',
    params: data,
    success: (res => {
      console.log(res)
    })
  })
  return res
}
export function getcuruser () {
  return request.postForm({
    url: '/manage/sysUser/GetCurUser'
  })
}
