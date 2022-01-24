import { BASE_URL } from ".";

export async function apiGetUser(username) {
    try {
        const data = JSON.stringify({
            user: {
                "id": 1,
                "username": "Trivia",
                "highScore": 0            }
        })

        localStorage.setItem("trivia-user", data)
        
        return [null, data]
    } catch (e) {
        return [e.message, null]
    }
}