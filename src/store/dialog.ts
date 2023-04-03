import { Module } from "vuex";
import { RootState } from "@/store/types";

interface State {
  show: boolean;
  title: string;
  message: string;
  confirm: Function | null;
}

export const dialog: Module<State, RootState> = {
  namespaced: true,
  state: {
    show: false,
    title: "",
    message: "",
    confirm: null,
  },
  getters: {
    show: (state) => state.show,
    title: (state) => state.title,
    message: (state) => state.message,
    isConfirm: (state) => !!state.confirm
  },
  mutations: {
    setShow(state, show: boolean) {
      state.show = show;
    },
    setTitle(state, title: string) {
      state.title = title;
    },
    setMessage(state, message: string) {
      state.message = message;
    },
    setConfirm(state, confirm: Function | null) {
      state.confirm = confirm;
    },
  },
  actions: {
    openDialog({ commit }, { title, message, confirm }) {
      commit("setTitle", title);
      commit("setMessage", message);
      commit("setConfirm", confirm);
      commit("setShow", true);
    },
    close({ commit }) {
      commit("setShow", false);
      commit("setTitle", "");
      commit("setMessage", "");
      commit("setConfirm", null);
    },
    confirm({ state, dispatch }) {
      if (typeof state.confirm === "function") {
        state.confirm();
      }
      dispatch("close");
    },
  },
};
