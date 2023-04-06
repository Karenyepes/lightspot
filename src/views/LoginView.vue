<template>
  <v-main>
    <v-card class="card">
      <div class="row">
        <v-form class="form" @submit.prevent="handleSubmit">
          <v-img
            class="logo"
            width="250"
            height="60"
            src="@/assets/long_logo.png"
            contain
          ></v-img>
          <h2>Login</h2>
          <v-text-field
            label="Correo"
            outlined
            :dense="mobile"
            color="blue"
            autocomplete="false"
            prepend-inner-icon="mdi-account-circle"
            v-model="user.email"
          />
          <v-text-field
            label="Contraseña"
            outlined
            :dense="mobile"
            color="blue"
            autocomplete="false"
            type="password"
            prepend-inner-icon="mdi-lock"
            v-model="user.password"
          />
          <v-btn class="btn-primary" block type="submit">Acceder</v-btn>
          <div class="link">
            <router-link to="/reset-password"
              >¿Ha olvidado su contraseña?</router-link
            >
          </div>
        </v-form>
        <v-carousel
          cycle
          hide-delimiters
          show-arrows-on-hover
          class="carousel"
          height="520"
        >
          <v-carousel-item
            v-for="(slide, i) in slides"
            :key="i"
            :src="slide.src"
            cover
          >
          </v-carousel-item>
        </v-carousel>
      </div>
    </v-card>
  </v-main>
</template>

<script>
import { mapActions } from "vuex"

export default {
  computed: {
    mobile() {
      return this.$vuetify.breakpoint.mobile;
    },
    slides() {
      let images = [];
      for (let index = 1; index <= 10; index++) {
        images.push({ src: require(`../assets/img/carousel/img${index}.jpg`) });
      }

      return images;
    },
  },  
  methods: {
    ...mapActions("auth", ["login"]),
    async handleSubmit() {
      try {
        await this.login(this.user)

        this.$router.push("/")
      } catch (err) {
        console.error(err.message)
      }
    }
  },
  data: () => ({
    user: {
      email: '',
      password: ''
    }
  })
};
</script>

<style lang="scss" scoped>
main {
  display: flex;
  align-items: center;
  justify-content: center;

  .row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;

    @media (max-width: 960px) {
      grid-template-columns: 1fr;
    }
  }

  .logo {
    margin: 0 auto;
    margin-bottom: 1.25rem;
  }

  .card {
    margin: 0 auto;
    max-width: 900px;

    @media (max-width: 960px) {
      max-width: 500px;
    }

    @media (max-width: 600px) {
      max-width: 100%;
    }

    .form {
      text-align: center;
      padding: 4rem;

      @media (max-width: 600px) {
        padding: 2rem;
      }

      @media (max-width: 320px) {
        padding: 1rem;
      }

      h2 {
        text-align: left;
        margin-bottom: 1.5rem;
      }

      .link {
        margin-top: 1rem;
        text-align: left;
      }
    }

    .carousel {
      height: 600px;
      @media (max-width: 960px) {
        display: none;
      }
    }
  }
}
</style>
