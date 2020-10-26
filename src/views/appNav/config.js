export const navConfig = [
  {
    title: '首页',
    path: '/home',
    value: 'home',
    icon: 'md-home'
  },
  {
    title: '用户管理',
    path: '/user',
    value: 'userManagement',
    icon: 'ios-paper',
    children: [
      {
        title: '用户信息管理',
        path: '/user/list',
        value: 'userInfoManagement'
      },
      {
        title: '角色权限管理',
        path: '/user/auth',
        value: 'RoleAuthManagement'
      }
    ]
  },
  {
    title: '内容管理',
    path: '/content',
    value: 'contentManagement',
    icon: 'ios-paper'
  }
]
