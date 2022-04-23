import {getAdminInfo, getUserList} from "../api";

const actions = {
    async getAdminInfos ({commit}) {
        getAdminInfo().then(res => {
            if (res.status === 200) {
                commit('SET_ADMININFO', res.data);
            } else {
                console.log(res.msg);
            }
        });
    },

    getUserList ({commit}, data) {
        getUserList(data).then(res => {
            commit('SET_USER_LIST', res.data)
        })
    },

    toggleSideBar({ commit }) {
        commit('TOGGLE_SIDEBAR')
    },
    closeSideBar({ commit }, { withoutAnimation }) {
        commit('CLOSE_SIDEBAR', withoutAnimation)
    },
    toggleDevice({ commit }, device) {
        commit('TOGGLE_DEVICE', device)
    },

    changeSetting({ commit }, data) {
        commit('CHANGE_SETTING', data)
    }

};

export default actions;
