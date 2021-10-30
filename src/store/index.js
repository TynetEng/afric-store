import {createStore} from 'vuex'

const store = createStore({
  state: {
    count: 0,
    cart: []
  },
  mutations: {
    increment(state) {
      state.count++
    },
    addCartItem(state, item){
      item.quantity = 1;
      state.cart.push(item)
    },
    updateCartItem(state, updatedItem){
      state.cart = state.cart.map((cartItem)=>{
        if (cartItem.id == updatedItem.id){ 
          return updatedItem
        }

        return cartItem
      })
    },

    removeCartItem(state, item){
      state.cart = state.cart.filter((cartItem)=>{
        return cartItem.id != item.id
      })
    }
  },
  actions: {
  },
  modules: {
  }
})

export default store
