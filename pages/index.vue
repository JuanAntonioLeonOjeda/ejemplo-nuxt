<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <div id="container">
        Welcome to My Project
      </div>
      <NuxtLink to="/random">
        <ButtonComponent text="Get Random Cocktail" />
      </NuxtLink>
      <br>
      <NuxtLink to="/categories">
        <ButtonComponent text="Get Category List" />
      </NuxtLink>
      <br>
      <NuxtLink to="/login">
        <ButtonComponent text="Login" />
      </NuxtLink>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'IndexPage'
}
</script>

<style scoped>
#container {
  text-align: center;
}
</style>
