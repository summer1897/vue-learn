import Vuex from 'vuex'
import Vue from 'vue'
import {constants} from '@/constant/constant'

Vue.use(Vuex)

const state = {
	user: {},
	token: null,
	title: ''
};

const getters = {

};

const actions = {

};

const mutations = {
	login (state,data) {
		localStorage.token = data;
		state.token = data;
	},
	logout (state,data) {
		localStorage.removeItem(constants.ACCESS_TOKEN);
		state.token = null;
	},
	title (state,data) {
		state.title = data;
	}
};

export default new Vuex.Store({
	state,getters,actions,mutations
});