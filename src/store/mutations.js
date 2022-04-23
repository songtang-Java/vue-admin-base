import Cookies from 'js-cookie';

const  mutations = {
    SET_ADMININFO (state, adminInfo) {
        state.adminInfo = adminInfo;
    },
    DEL_ADMININFO (state) {
    state.adminInfo = {};
    },
    SET_USER_LIST (state, userList) {
        state.userList = userList;
    },

    TOGGLE_SIDEBAR: state => { // 切换sidebar打开状态
        state.sidebar.opened = !state.sidebar.opened
        state.sidebar.withoutAnimation = false
        if (state.sidebar.opened) {
            Cookies.set('sidebarStatus', 1) // 存入cookie
        } else {
            Cookies.set('sidebarStatus', 0)
        }
    },
    CLOSE_SIDEBAR: (state, withoutAnimation) => {
        Cookies.set('sidebarStatus', 0)
        state.sidebar.opened = false
        state.sidebar.withoutAnimation = withoutAnimation
    },
    TOGGLE_DEVICE: (state, device) => {
        state.device = device
    },
    CHANGE_SETTING: (state, { key, value }) => {
        // eslint-disable-next-line no-prototype-builtins
        if (state.hasOwnProperty(key)) {
            state[key] = value
        }
    }
};

export default mutations;
