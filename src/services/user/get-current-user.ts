import { AxiosError } from "axios";
import apiClient from "@/plugins/api-client";

import { User } from "@/models/user";

export const getCurrentUser = async (): Promise<User> => {
  try {
    const { data } = await apiClient.get("/users/me");
    return data;
  } catch (err: unknown) {
    if (err instanceof AxiosError) {
      const { detail } = err.response?.data;
      throw new Error(detail);
    }

    throw new Error("Failed to find current user");
  }
};