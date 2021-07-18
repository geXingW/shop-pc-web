import {setStore, getStore, removeStore} from './storage'
import Config from '@/setting'


export function getToken() {
	let token = getStore(Config.TokenKey)
	if(token) {
		token = 'Bearer ' + token
	}

	return token
}

export function setToken(token) {
	return setStore(Config.TokenKey, token)
}

export function removeToken() {
	return removeStore(Config.TokenKey)
}