import { request } from '@umijs/max';

export async function getSysUserList(params?: any) {
  return request('/api/sys-user', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    params,
  });
}

export async function addSysUser(data: any) {
  return request('/api/sys-user', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data,
  });
}

export async function updateSysUser(id: string, data: any) {
  return request(`/api/sys-user/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data,
  });
}

export async function deleteSysUser(id: string) {
  return request(`/api/sys-user/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

export async function getSysUser(id: string) {
  return request(`/api/sys-user/${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
}
