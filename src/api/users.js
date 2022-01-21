import { BASE_URL } from ".";

export async function apiGetUser(username) {
    try {
        const response = await fetch(`${BASE_URL}?username=ody`)
        .then(response => response.json())
        .then(data => data.data)

        const { data }  = await response.json()

        return [null, data]
    } catch (e) {
        return [e.message, null]
    }
}