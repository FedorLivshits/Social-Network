import axios from "axios"

const instance = axios.create({
    baseURL: "https://dummyapi.io/data/v1/",
    headers: { "app-id": "6115057ed26481cbfd2c1668" },
})

export const fetchPosts = (page: number) => {
    return instance.get(`post?page=${page}`)
        .then(res => res.data)
        .catch(error => console.log("something went wrong: " + error))
}

