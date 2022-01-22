import { createStore } from 'vuex'
import { apiGetUser} from "./api/users"
import { apiFetchAllQuestions} from "./api/questions"

const initUser = () => {
    const storedUser = localStorage.getItem("trivia-user")
    if (!storedUser) {
        return null
    }

    return JSON.parse(storedUser)
}


export default createStore({
    state: {
        user: initUser(),
        username: '',
        questions: [],
        error: ''
    },
    mutations: {
        setUsername: (state, payload) => {
            state.username = payload
        },
        setQuestions: (state, payload ) => {
            state.questions = payload
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
        },
        async saveUser({ commit, state}, action) {
            try {
                if (action === "login") {
                }
                else if (action === "register") {

                }
                else {
                    throw new Error("saveUser: Unknown action provided " + action)
                }
            } catch (e) {
                
            }
        },
        async fetchQuestionsFromApi({ commit }) {
            const [ error, questions ] = await apiFetchAllQuestions()

            if (error !== null)
            {
                return error
            }

            commit('setQuestions', questions)

            
            return null
        }
    }
})
