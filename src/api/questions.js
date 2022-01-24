import { OPEN_DB_URL } from ".";
import { useStore } from "vuex";
import { computed } from "vue";

const store = useStore()

const url = computed(() => store.state.URL)

export async function apiFetchAllQuestions() {
    console.log(store.state.URL)
    try {
        // const response = await fetch(`${OPEN_DB_URL}?amount=1&category=21&difficulty=easy&type=multiple`)
        const response = await fetch(store.state.URL)

        if (!response.ok)
        {
            console.log("Could not find questions!")
        }

        const { response_code, results, error = "Could not fetch questions!" } = await response.json()

        if (response_code === 0) {
            console.log('OK')
        } else {
            console.log(error)
        }

        return [null, results ]
    } catch (e) {
        return [e.message, [] ]
    }
}