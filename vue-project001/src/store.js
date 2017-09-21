const TODO_STORE_KEY = 'todk_items_key'
export default {
	save (items) {
		window.localStorage.setItem(TODO_STORE_KEY,JSON.stringify(items))
	},
	fetch () {
		return JSON.parse(window.localStorage.getItem(TODO_STORE_KEY)  || '[]')
	}
}