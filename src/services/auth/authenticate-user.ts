import { AxiosError } from "axios";
import apiClient from "@/plugins/api-client";

import { Auth } from "@/models/auth";
import { Token } from "@/models/token";

export const authenticateUser = async (user: Auth): Promise<Token> => {
  try {
    const { data } = await apiClient.post("/auth/token", user);
    return data;
  } catch (err: unknown) {
    if (err instanceof AxiosError) {
      const { detail } = err.response?.data;
      throw new Error(detail);
    }

    throw new Error("Failed to authenticate user");
  }
};
