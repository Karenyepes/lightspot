import { AxiosError } from "axios"
import apiClient from "@/plugins/api-client"

import { Token } from "@/models/token"

export const refreshToken = async (): Promise<Token> => {
    try {
        const { data } = await apiClient.post("/auth/token/refresh")

        return data
      } catch (err: unknown) {
        if (err instanceof AxiosError) {
          const data = err.response?.data;
          if(data?.detail) throw new Error(data.detail)
        }
        
        throw new Error("Error al autenticar usuario")
      }
}