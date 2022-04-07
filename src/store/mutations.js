import {
  ADD_COUNTER,
  ADD_TO_CART
} from './mutation-types'

export default {
  [ADD_COUNTER](state, payload) {
    payload.count++
  },
  [ADD_TO_CART](state, payload) {
    payload.checked = true
    state.cartList.push(payload)
  }
}

// {
//   // mutations唯一的目睹就是修改state中的状态
//   // mutations中的每个方法尽可能完成的事件比较单一一点
//   addCounter(state, payload) {
//   payload.count++
// },
//   addToCart(state, payload) {
//   state.cartList.push(payload)
// }
// }
