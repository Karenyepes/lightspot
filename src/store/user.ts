import { Module } from "vuex";
import { RootState } from "@/store/types"

import { User } from "@/models/user"
import { getCurrentUser } from "@/services/user"

interface State {
  currentUser: User | null;
}

export const user: Module<State, RootState> = {
  namespaced: true, 
  state: {
    currentUser: null
  },
  getters: {
    currentUser: state => state.currentUser
  },
  mutations: {
    setCurrentUser(state, user: User | null) {
      state.currentUser = user
    }
  },
  actions: {
    async fetchCurrentUser({ commit, dispatch }) {
      try {
        const user = await getCurrentUser()
        commit("setCurrentUser", user);
      } catch (err) {
        dispatch("auth/logout", null, { root: true });
      }
        
    },
  },
  
};