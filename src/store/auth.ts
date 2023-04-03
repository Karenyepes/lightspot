import { Module } from "vuex";

import { RootState } from "@/store/types";

import { Token } from "@/models/token";
import { Auth } from "@/models/auth";

import { authenticateUser, logout as logOut, refreshToken } from "@/services/auth";

export interface State {
  token: Token | null;
  timer: boolean;
}

export const auth: Module<State, RootState> = {
  namespaced: true,
  state: {
    token: null,
    timer: false,
  },
  getters: {
    isAuthenticated: (state) => !!state.token,
    token: (state) => state.token,
    timer: (state) => state.timer,
  },
  mutations: {
    setToken(state, token: Token | null) {
      state.token = token;
    },
    setTimer(state, timer: boolean) {
      state.timer = timer;
    },
  },
  actions: {
    async login({ commit, dispatch }, user: Auth) {
      const token = await authenticateUser(user);

      commit("setToken", token);
      dispatch("startTokenTimer");
    },

    async logout({ commit }) {
      await logOut();

      commit("setToken", null);
      commit("setTimer", false);

      commit("user/setCurrentUser", null, { root: true });
    },

    async fetchToken({ commit, dispatch }) {
      try {
        const token = await refreshToken();

        commit("setToken", token);

        dispatch("startTokenTimer");
      } catch (err) {
        dispatch("logout");
      }
    },

    startTokenTimer({ commit, dispatch }) {
      commit("setTimer", true);

      const expireIn = 15 * 60 * 1000; // 15 minutes
      setTimeout(() => {
        dispatch("fetchToken");
      }, expireIn - 5000);
    },
  },
};
