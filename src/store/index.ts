import Vue from 'vue'
import Vuex from 'vuex'

import { notifier } from "@/store/notifier"
import { dialog } from "@/store/dialog"
import { auth } from "@/store/auth"
import { user } from "@/store/user"

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    notifier,
    dialog,
    auth,
    user
  }
})
