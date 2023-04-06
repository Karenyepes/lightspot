<template>
  <aside :class="`${is_expanded ? 'is-expanded' : ''}`">
    <div class="logo">
      <v-img
        width="175"
        height="40"
        src="@/assets/long_logo.png"
        v-if="is_expanded"
        contain
      ></v-img>
      <v-img height="40" src="@/assets/logo.png" v-else contain></v-img>
    </div>

    <h3>Menu</h3>
    <div class="menu">
      <template v-for="item in items">
        <router-link
          :key="item.title"
          v-if="hasScope(item.scope)"
          :to="item.to"
          class="button"
        >
          <v-icon class="material-icons">{{ item.icon }}</v-icon>
          <span class="text">{{ item.title }}</span>
        </router-link>
      </template>
    </div>
  </aside>
</template>

<script>
import Vue from "vue";
import { mapGetters, mapActions } from "vuex";

export default Vue.extend({
  computed: {
    ...mapGetters("auth", ["isAuthenticated"]),
    ...mapGetters("user", ["currentUser"]),
    is_expanded() {
      return !this.$vuetify.breakpoint.mobile;
    },
  },
  data() {
    return {
      items: [
        { title: "Dashboard", icon: "mdi-view-dashboard", to: "/" },
        { title: "Mapa", icon: "mdi-map-search", to: "/map" },
        { title: "Reportes", icon: "mdi-chart-bar-stacked", to: "/reports" },
        {
          title: "Cargar",
          icon: "mdi-cloud-upload-outline",
          to: "/upload",
          scope: "upload_flashes_data",
        },
        { title: "Usuarios", icon: "mdi-account-plus", to: "/user" },
        
      ],
    };
  },
  methods: {
    ...mapActions("auth", ["logout"]),
    hasScope(scope) {
      if (!scope) return true;
      const role = this.currentUser?.role;

      return role?.permissions.includes(scope);
    },
  },
});
</script>

<style lang="scss" scoped>
aside {
  display: flex;
  flex-direction: column;

  background-color: var(--light);
  color: var(--dark);

  width: calc(2rem + 32px);
  overflow: hidden;
  min-height: 100vh;
  padding: 1rem;

  transition: 0.2s ease-in-out;

  .flex {
    flex: 1 1 0%;
  }

  .logo {
    margin-bottom: 1rem;
  }

  .menu-toggle-wrap {
    display: flex;
    justify-content: flex-end;
    margin-bottom: 1rem;

    position: relative;
    top: 0;
    transition: 0.2s ease-in-out;

    .menu-toggle {
      transition: 0.2s ease-in-out;
      .material-icons {
        font-size: 2rem;
        color: var(--light);
        transition: 0.2s ease-out;
      }

      &:hover {
        .material-icons {
          color: var(--primary);
          transform: translateX(0.5rem);
        }
      }
    }
  }

  h3,
  .button .text {
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
  }

  h3 {
    color: var(--grey);
    font-size: 0.875rem;
    margin-bottom: 0.5rem;
    text-transform: uppercase;
  }

  .menu {
    margin: 0 -1rem;

    .button {
      display: flex;
      align-items: center;
      text-decoration: none;

      transition: 0.2s ease-in-out;
      padding: 0.5rem 1rem;

      .material-icons {
        font-size: 2rem;
        color: var(--dark-alt);
        transition: 0.2s ease-in-out;
      }
      .text {
        color: var(--dark-alt);
        transition: 0.2s ease-in-out;
      }

      &:hover {
        background-color: var(--dark-alt);

        .material-icons,
        .text {
          color: var(--light);
        }
      }

      &.router-link-exact-active {
        background-color: var(--dark-alt);
        border-right: 5px solid var(--secondary);

        .material-icons,
        .text {
          color: var(--light);
        }
      }
    }
  }

  .footer {
    opacity: 0;
    transition: opacity 0.3s ease-in-out;

    p {
      font-size: 0.875rem;
      color: var(--grey);
    }
  }

  &.is-expanded {
    width: var(--sidebar-width);

    .menu-toggle-wrap {
      top: -3rem;

      .menu-toggle {
        transform: rotate(-180deg);
      }
    }

    h3,
    .button .text {
      opacity: 1;
    }

    .button {
      .material-icons {
        margin-right: 1rem;
      }
    }

    .footer {
      opacity: 0;
    }
  }

  @media (max-width: 1024px) {
    position: fixed;
    z-index: 99;
  }
}
</style>
