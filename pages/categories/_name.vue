<template>
  <div>
    <CardComponent v-for="(item, idx) in $store.state.list" :key="idx" :drink="item"/>
  </div>
</template>

<script>
  export default {
    data () {
      return {
      }
    },
    async fetch () {
      const result = await this.$store.dispatch('getCategoryDrinks', this.$route.params.name)
      this.$store.commit('changeList', result)
    }
  }
</script>

<style scoped>

</style>