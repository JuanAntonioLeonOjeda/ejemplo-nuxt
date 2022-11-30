<template>
  <v-form
    ref="form"
  >

    <v-text-field
      v-model="email"
      label="E-mail"
      required
    ></v-text-field>

    <v-text-field
      v-model="password"
      type="password"
      label="Password"
      required
    ></v-text-field>

    <v-btn
      @click="login"
    >
      Login
    </v-btn>
  </v-form>
</template>

<script>
  export default {
    data () {
      return {
        email: '',
        password: '',
      }
    },
    methods: {
      async login () {
        await this.$auth.loginWith('local', { data: { email: this.email, password: this.password } })
      }
    }
  }
</script>

<style scoped>

</style>