export const state = () => ({
  items: [],
})

export const getters = {
  getItems(state) {
    return state.items
  },

  isProductInCart(state, id) {
    return state.items.some((item) => item.id === id)
  },
}

export const mutations = {
  add(state, product) {
    state.items.push(product)
  },

  remove(state, id) {
    state.items = state.items.filter((item) => item.id !== id)
  },

  clear(state) {
    state.items = []
  },

  incrementProduct(state, id) {
    state.items = state.items.map((item) =>
      item.id === id ? { ...item, count: item.count + 1 } : item
    )
  },

  decrementProduct(state, id) {
    state.items = state.items.map((item) =>
      item.id === id ? { ...item, count: item.count - 1 } : item
    )
  },
  changeChecked(state, id, checked) {
    state.items = state.items.map((item) =>
      item.id === id ? { ...item, checked } : item
    )
  },
}
