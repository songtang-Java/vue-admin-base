import $axios from '../utils/axios';

// 登录
export const login = params => $axios('/admin/login', params, 'POST');
// 退出登录
export const signOut = params => $axios('/admin/signout', params, 'POST');
// 验证码
export const getCaptcha = params => $axios('/v1/captcha', params, 'GET');
