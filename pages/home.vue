<template>
  <div>
    Welcome {{ $auth.$state.user.name }}
    <v-btn v-if="$auth.$state.user.role === 'admin'" @click="getUsers">
      Get All Users
    </v-btn>
    {{ users }}
    <v-btn @click="logout">
      Logout
    </v-btn>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        users: []
      }
    },
    methods: {
      async getUsers() {
        this.users = await this.$store.dispatch('getAllUsers')
      },
      async logout () {
        await this.$auth.logout()
      }
    }
  }
</script>

<style scoped>

</style>