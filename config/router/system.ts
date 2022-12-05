export const SystemRouter = [
	{
    name: '系统管理',
    icon: 'table',
    path: '/system',
    component: '@/layouts/adminLayout',
		// layout: true,
		routes: [
			{
				name: '用户管理',
				icon: 'table',
				path: '/system/userList',
				component: './System/UserList',
				// layout: true,
			}
		]
  },
]