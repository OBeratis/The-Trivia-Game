import { OPEN_DB_URL } from ".";

export async function apiFetchAllQuestions() {
    try {
        const response = await fetch(`${OPEN_DB_URL}?amount=2&category=21&difficulty=easy&type=multiple`)
        // https://opentdb.com/api.php?amount=4&category=21&difficulty=easy&type=boolean

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