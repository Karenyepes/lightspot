import apiClient from "@/plugins/api-client"

export const logout = async () => {
    await apiClient.delete("/auth/token")
}