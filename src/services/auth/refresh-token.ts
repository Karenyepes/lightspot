import { AxiosError } from "axios"
import apiClient from "@/plugins/api-client"

import { Token } from "@/models/token"

export const refreshToken = async (): Promise<Token> => {
    try {
        const { data } = await apiClient.post("/auth/token/refresh")

        return data
      } catch (err: unknown) {
        if (err instanceof AxiosError) {
            const { detail } = err.response?.data
            throw new Error(detail)
        }
        
        throw new Error("Failed to authenticate user")
      }
}