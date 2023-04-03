import axios from "axios"

import store from "@/store"

const apiClient = axios.create({
    baseURL: process.env.VUE_APP_API_URL,
    withCredentials: true
})

apiClient.interceptors.request.use(config => {
    const token = store.getters["auth/token"]

    if (token) {
        const capitalizedType = token.token_type.charAt(0).toUpperCase() + token.token_type.slice(1)

        config.headers.Authorization = `${capitalizedType} ${token.access_token}`
    } else {
        config.headers.Authorization = ""
    }

    return config
})

export default apiClient