import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const state = {
	count: 0
};

const mutations = {
	m_increment (state) {
		state.count++;
	},
	m_reduce (state) {
		state.count--;
	}
};

const actions = {
	increment (context) {
		setTimeout(() => {
			context.commit('m_increment');
		},2000);
	},
	reduce (context) {
		setTimeout(() => {
			context.commit('m_reduce');
		},2000);
	}
};

export default new Vuex.Store({
	state,
	mutations,
	actions
});
