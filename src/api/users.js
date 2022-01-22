import { BASE_URL } from ".";

export async function apiGetUser(username) {
    try {
        /*
        const response = await fetch(`${BASE_URL}?username=ody`)
        .then(response => response.json())
        .then(data => data.data)

        const { data }  = await response.json()
        */
        const data = JSON.stringify({
            user: {
                username: "Odysseus"
            }
        })

        localStorage.setItem("trivia-user", JSON.stringify({
            user: {
                username: "Odysseus"
            }
        }))
        
        return [null, data]
    } catch (e) {
        return [e.message, null]
    }
}