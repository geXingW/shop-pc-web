import {setStore, getStore, removeStore} from './storage'
import Config from '@/setting'

const CART_STORE_NAME = 'CART_ITEMS'

export function getCartItems() {
	let cartList = getStore(CART_STORE_NAME)
	return cartList ? JSON.parse(cartList): []
}

export function setCartItems(cartItems) {
	setStore(CART_STORE_NAME, JSON.stringify(cartItems))
}

export function removeCartItems() {
	return removeStore(CART_STORE_NAME)
}

export function clearCartItems(){
	return removeStore(CART_STORE_NAME)	
}