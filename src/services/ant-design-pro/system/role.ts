import { request } from '@umijs/max';
export const fetchRoleList = (params?: any) => {
  return request('/api/role', {
    method: 'GET',
    params,
  });
};
