import { BASE_URL } from "./";

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
    /*
    try {
        const response = await fetch(`http://localhost:3000/trivia?username=${username}`)
        const data = await response.json()

        return [null, data]
    } catch (e) {
        return [e.message, null]
    }
    */
}