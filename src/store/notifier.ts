import { Module } from "vuex";
import { RootState } from "@/store/types"

export interface Notification {
  message: string;
  type: string;
}

interface State {
  notifications: Notification[];
}

export const notifier: Module<State, RootState> = {
  namespaced: true, 
  state: {
    notifications: []
  },
  mutations: {
    addNotification(state, notification: Notification) {
      state.notifications.push(notification);
    },
    removeNotification(state, notification: Notification) {
      const index = state.notifications.indexOf(notification);
      if (index !== -1) {
        state.notifications.splice(index, 1);
      }
    }
  },
  actions: {
    showNotification({ commit }, notification: Notification) {
      commit("addNotification", notification);
      setTimeout(() => {
        commit("removeNotification", notification);
      }, 5000);
    },
  },
  getters: {
    notifications(state) {
      return state.notifications
    }
  }
};
