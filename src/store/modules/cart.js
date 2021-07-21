import { list, add, update, remove } from '@/api/cart'
import {setStore, getStore, removeStore} from '@/utils/storage'

const cart = {
  state: {
    cartList: []
  },
  mutations: {
    SET_CART_ITEMS: (state, items) => {
      state.cartList = items

      updateCartStorage(state.cartList)
    },
    ADD_CART_ITEM: (state, item) => {
      if(state.cartList.findIndex(i => i.itemId == item.itemId) != -1){ // 如果已经包含该属性
        state.cartList.push(item)
      }else{  // 购物车已经存在的，更新已有数量
        state.cartList.map( i => {
          if(i.itemId == item.itemId){
            i.itemQuantity += item.itemQuantity
          }

          return i
        })        
      }

      // 重新建立索引
      state.cartList = array_values(state.cartList)

      updateCartStorage(state.cartList)
    },
    UPDATE_CART_ITEM: (state, item) => {
      state.cartList.map( i => {
        if(i.itemId == item.itemId){
          i.itemQuantity += item.itemQuantity
        }

        return i
      })

      updateCartStorage(state.cartList)
    },
    REMOVE_CART_ITEM: (state, item) => {
      state.cartList = state.cartList.filter( i => i.itemId != item.itemId)

      updateCartStorage(state.cartList)
    },
  },

  actions: {
    // 获取购物车列表
    GetCartList({ commit }) {
      return new Promise((resolve, reject) => {
        list().then(response => {
          if(response.status == 200000){
            commit('SET_CART_ITEMS', response.data)
          }

          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    },
	  // 加入购物车
    AddCartItem({ commit, state }, item) {
      return new Promise((resolve, reject) => {
        add(item).then(response => {
          if(response.status == 200000){
           commit('ADD_CART_ITEM', item)
          }

          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    },
  	// 更新购物车
    UpdateCartItem({ commit, state }, item) {
      return new Promise((resolve, reject) => {
        update(item).then(response => {
          if(response.status == 200000){
            commit('UPDATE_CART_ITEM', item)
          }

          resolve(response)
        }).catch(error => {
          reject(error)
        })
  	 })
    },
    // 移出购物车
    RemoveCartItem({ commit, state }, item) {
      return new Promise((resolve, reject) => {
        remove(item).then(response => {
          if(response.status == 200000){
            commit('REMOVE_CART_ITEM', item)
          }

          resolve(response)
        }).catch(error => {
          reject(error)
        })
     })
    },
  }
}

const updateCartStorage = ( items ) => {
  setStore('CART_ITEMS', items)
}

export default cart