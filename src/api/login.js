import request from '@/utils/http' // 引入封装好的axios请求

export function login (username, password) { // 登录接口
  return request('/user/verifyUserLogin', 'POST', { // 使用封装好的axios进行网络请求
    username,
    password
  })
}

export function getAllUserInfo () { // 获取用户信息接口
  return request('/user/getUserList', 'get')
}

export function getRoleAuthInfo () { // 获取角色权限接口
  return request('/user/getRoleAuthList', 'get')
}


export function updateUserById (userInfo) { // 更新用户信息接口
  return request('/user/updateUserById', 'POST', {
    userInfo
  })
}