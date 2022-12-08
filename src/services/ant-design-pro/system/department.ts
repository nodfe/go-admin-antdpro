import { request } from '@umijs/max';

export const fetchDepartmentTree = (params?: any) => {
  return request('/api/dept', {
    method: 'GET',
    params,
  });
};
