import { request } from '@umijs/max';

export const getDicts = (dictKey: string) => {
  return request(`/api/dict-data/option-select?dictType=${dictKey}`, {
    method: 'GET',
  });
};
