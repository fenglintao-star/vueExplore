import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let state = {}

let getters = {}

let mutations = {}

let actions = {}

export default new Vuex.Store({
	strict: true,
	state,
	getters,
	mutations,
	actions,
	modules: {}
})