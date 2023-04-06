<template>
  <div>
    <v-snackbar
      v-for="(notification, index) in notifications"
      :key="index"
      :value="true"
      :color="notification.type"
      :timeout="5000"
      :right="!isMobile"
      bottom
      @input="removeNotification(notification)"
    >
      {{ notification.message }}
      <template v-slot:action="{ attrs }">
        <v-btn
          text
          color="white"
          v-bind="attrs"
          @click="removeNotification(notification)"
        >
          Close
        </v-btn>
      </template>
    </v-snackbar>
    
  </div>
</template>

<script>
import Vue from "vue";
import { mapGetters, mapMutations } from "vuex";

export default Vue.extend({
  computed: {
    ...mapGetters("notifier", ["notifications"]),
    isMobile() {
      return this.$vuetify.breakpoint.mobile
    }
  },
  methods: {
    ...mapMutations("notifier", ["removeNotification"]),
  }
});
</script>
