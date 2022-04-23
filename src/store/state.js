import Cookies from 'js-cookie';
const vuexStorage = JSON.parse(sessionStorage.getItem('vuex'));
const state = {
    adminInfo:  (vuexStorage && vuexStorage.adminInfo) || {},
    userList: {},
    sidebar: {
        opened: Cookies.get('sidebarStatus') ? !!+Cookies.get('sidebarStatus') : true, // 是否打开
        withoutAnimation: false // 是否没有动画
    },
    device: 'desktop',

    fixedHeader: true, // Whether fix the header（是否固定navBar）
    sidebarLogo: true, // Whether show the logo in sidebar
    title: 'HanKing',
};

export default state;
