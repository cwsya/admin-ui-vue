const state = {
    userName:'',
    tokenVal:'',
    tokenKey:''
}
const mutations = {
    SET_USERNAME(state,userName) {
        state.userName = userName
    },
    SET_TOKEN_VAL(state,token) {
        state.tokenVal = token
    },
    SET_TOKEN_KEY(state,tokenKey) {
        state.tokenKey = tokenKey
    }
}

const actions = {
    setUserName({commit},userName) {
        commit('SET_USERNAME',userName)
    },
    setTokenVal({commit},token) {
        commit('SET_TOKEN_VAL',token)
    },
    setTokenKey({commit},tokenKey) {
        commit('SET_TOKEN_KEY',tokenKey)
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}