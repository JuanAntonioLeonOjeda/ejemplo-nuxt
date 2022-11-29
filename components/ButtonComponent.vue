<template>
  <div class="text-center">
    <v-btn
      rounded
      color="primary"
      dark
    >
      {{ text }}
    </v-btn>
  </div>
</template>

<script>
  export default {
    props: {
      text: String
    }
  }
</script>

<style scoped>

</style>