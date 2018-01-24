import Vuex from 'vuex'
import Vue from 'vue'
import {constants} from '@/constant/constant'

Vue.use(Vuex)

const state = {
	user: {},
	token: null
};

const getters = {

};

const actions = {

};

const mutations = {
	login (state,data) {
		localStorage.access_token = data;
		state.token = data;
	},
	logout (state,data) {
		localStorage.removeItem(constants.ACCESS_TOKEN);
		state.token = null;
	}
};

export default new Vuex.Store({
	state,getters,actions,mutations
});