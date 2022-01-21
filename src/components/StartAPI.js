const apiURL = 'https://github.com/dewald-els/noroff-assignment-api'

export const StartAPI = {
    fetchUser() {
        return fetch(`${apiURL}/trivia?username=dewaldels`)
            .then(response => response.json())
            .then(data => data.data)
    }
}