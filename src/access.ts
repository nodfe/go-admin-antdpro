/**
 * @see https://umijs.org/zh-CN/plugins/plugin-access
 * */

import Cookies from "js-cookie";

const TokenKey = 'Admin-Token'

export default function access(initialState: { currentUser?: API.CurrentUser } | undefined) {
  const { currentUser } = initialState ?? {};
  return {
    canAdmin: currentUser && currentUser.access === 'admin',
  };
}

export const getToken = (): string => {
	return Cookies.get(TokenKey) || ''
}

export const setToken = (token: string): void => {
	Cookies.set(TokenKey, token)
}
