<template>
  <v-card
    class="mx-auto"
    max-width="400"
    tile
  >
    <v-list-item v-for="(drink, idx) in $store.state.list" :key="idx">
      <v-list-item-content>
        <v-btn @click="$router.push({ path: `/categories/${drink.strCategory}` })">
          <v-list-item-title>{{drink.strCategory}}</v-list-item-title>
        </v-btn>
      </v-list-item-content>
    </v-list-item>

  </v-card>
</template>

<script>
  export default {
    async mounted () {
      const result = await this.$store.dispatch('getCategoryList')
      this.$store.commit('changeList', result)
    }
  }
</script>

<style scoped>

</style>