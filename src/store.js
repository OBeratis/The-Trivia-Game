import { createStore } from 'vuex'
import { apiGetUser} from "./api/users"
import { apiFetchAllQuestions} from "./api/questions"
import { ref } from 'vue'

const initUser = () => {
    const storedUser = localStorage.getItem("trivia-user")
    if (!storedUser) {
        const data = JSON.stringify({
            user: {
                "id": 1,
                "username": "Trivia",
                "highScore": 0            }
        })

        localStorage.setItem("trivia-user", data)
    }

    return JSON.parse(storedUser)
}

function QuestionCollection(question, userAnswer, correctAnswer, offerquestions) {
    this.correct_answer = correctAnswer;
    this.user_answer = userAnswer;
    this.question = question;
    this.offered_questions = offerquestions 
};

export default createStore({
    state: {
        user: initUser(),
        questionCollection: [],
        username: '',
        category: '',
        difficult: '',
        type: '',
        numberOfQuestions: '',
        URL: '',
        questions: [],
        searchCategory: "",
        userQuestions: [],
        userQuestionAnswer: "",
        isAnswered: false,
        userQuestionAnswers: [],
        error: ''
    },
    mutations: {
        setURL: (state, payload) => {
            state.URL = payload
        },
        setToQuestionCollection: (state, payload) => {
            console.log(`Collection ${payload}`)

            state.questionCollection.push(payload)
        },
        setUsername: (state, payload) => {
            state.username = payload
        },
        setCategory: (state, payload) => {
            state.category = payload
        },
        setDifficult: (state, payload) => {
            state.difficult = payload
        },
        setNoQuestions: (state, payload) => {
            state.numberOfQuestions = payload
        },
        setType: (state, payload) => {
            state.type = payload
        },
        setQuestions: (state, payload ) => {
            state.questions = payload
        },
        setError: (state, payload) => {
            state.error = payload
        },
        setSearchCategory: (state, text) => {
            state.searchCategory = text
        },
        setUserQuestions: (state, payload) => {
            state.userQuestions = payload
        },
        setUserQuestionAnswer: (state, payload) => {
            state.userQuestionAnswer = payload
            state.isAnswered = true
            console.log(`User question answer ${payload} ${state.isAnswered}`)
        },
        addUserQuestionAnswer: (state, payload) => {
            state.userQuestionAnswers.push(payload)
        }
    },
    getters: {
        filterQuestionsByCategory: (state) => {
            return state.questions.filter((question) => {
                return question.category.toLowerCase().includes(state.searchCategory.toLowerCase())
            })
        },
        filterQuestionsCollections: (state) => {
            return state.questions.filter((question) => {
                return question.question.toLowerCase().includes("")
            })
        },
        findByQuestion: (state) => (question) => {
            return state.questions.find(x => x.question === question)
        },
        getAllQuestions: (state) => () => {
            return state.questions;
        },
        getIsAnswered: (state) => () => {
            return state.isAnswered;
        },
        findCollectionByQuestion: (state) => (question) => {
            return state.questionCollection.find(x => x.question === question)
        }
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
        async fetchQuestionsFromApi({ commit, state }) {
            // if (state.questions.length !== 0)
            // {
            //     return Promise.resolve(null)
            // }

            const [ error, questions ] = await apiFetchAllQuestions()

            if (error !== null)
            {
                return error
            }

            commit('setQuestions', questions)
            
            return null
        },
        async fetchUserQuestions({ commit, state }) {

        },
        addQuestionAnswered({ commit, state, getters }, answer) {

            // const question = getters.findByQuestion(answer)

            commit('setUserQuestionAnswer', answer)
            commit('addUserQuestionAnswer', answer)

            // const question = getters.findCollectionByQuestion(answer)
            // if (question !== null) {
            //     commit('setToQuestionCollection', answer) 
            // }
        }

    }
})
