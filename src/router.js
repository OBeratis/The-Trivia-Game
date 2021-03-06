import { createRouter, createWebHistory } from "vue-router"
import Start from './views/Start.vue'
import Question from './views/Question.vue'
import QuestionDetail from './views/QuestionDetail.vue'
import Result from './views/Result.vue'
import Store from './store'

const authGuard = (to, from, next) => {
    if (Store.state.user) {
        next("/Result")
    }
}

const loginGuard = (_to, _from, next) => {
    if (Store.state.user) {
        // next("/Query")
        next()
    }
    else
    {
        next()
    }
}

// Define router
const routes = [
    {
        path: "/",
        component: Start,
        beforeEnter: loginGuard
    },
    {
        path: "/Question",
        component: Question
    },
    {
        path: "/Question/:question",
        component: QuestionDetail
    },
    {
        path: "/Result",
        component: Result
    }
]

export default createRouter({
    history: createWebHistory(),
    routes
})