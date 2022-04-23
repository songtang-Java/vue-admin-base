/**
 * 配置编译环境和线上环境之间的切换
 * baseUrl: 域名地址
 * routerMode: 路由模式
 * baseImgPath: 图片存放地址
 */

let baseUrl = '';
let baseImgPath = '';
let userImgPath = '';
if (process.env.NODE_ENV === 'development') {
    baseUrl = '';
    baseImgPath = 'http://localhost:3902/elm/images/';
    userImgPath = 'http://localhost:3903/elms/images/';
} else {
    baseUrl = 'http://api.songtang.xyz:3902';
    baseImgPath = 'http://api.songtang.xyz:3902/elm/images/';
    userImgPath = 'http://api.songtang.xyz:3903/elms/images/';
}

export {
    baseUrl,
    baseImgPath,
    userImgPath
}
