<template>
  <v-row>
    <v-col class="text-center">
      <CardComponent :drink="$store.state.drink" />
    </v-col>
  </v-row>
</template>

<script>

export default {
  name: 'RandomPage',
  data () {
    return {
    }
  },
  async mounted () {
    const result = await this.$store.dispatch('getRandomCocktail')
    this.$store.commit('changeDrink', result)

  }
}
</script>
