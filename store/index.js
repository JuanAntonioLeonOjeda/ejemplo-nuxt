export const state = () => ({
  drink: {},
  list: []
})

export const mutations = {
  changeDrink (state, input) {
    state.drink = input
  },
  changeList (state, input) {
    state.list = input
  }
}

export const actions = {
  async getRandomCocktail () {
    const result = await this.$axios.get('random.php')
    return result.data.drinks[0]
  },
  async getCategoryList () {
    const result = await this.$axios.get('list.php?c=list')
    return result.data.drinks
  },
  async getCategoryDrinks (state, value) {
    const result = await this.$axios.get(`filter.php?c=${value}`)
    return result.data.drinks
  },
  async getAllUsers () {
    const result = await this.$axios.get('/user')
    return result.data
  }
}

