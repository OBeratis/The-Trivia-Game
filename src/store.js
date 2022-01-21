import { createStore } from 'vuex'

export default createStore({
    state: {
        username: '',
        error: ''
    },
    mutations: {
        setUsername: (state, payload) => {
            state.username = payload
        },
        setError: (state, payload) => {
            state.error = payload
        }
    },
    getters: {

    },
    actions: {
        async getUser({commit}) {
            try {
                const username = await StartAPI.fetchUser()

                commit('setUsername', username)

            } catch (e) {
                commit ('setError', e.message)
            }
        }
    }
})
