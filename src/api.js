import axios from "axios"

const baseUrl = "http://localhost:8080";

const api = axios.create({
    baseUrl
})

export default api;