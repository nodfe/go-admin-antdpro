import { request } from "@umijs/max";

export async function getSysUserList(params?: any) {
	return request('/api/sys-user', {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json'
		},
		params
	})
}