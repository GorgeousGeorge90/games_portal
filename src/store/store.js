import { createStore } from 'vuex';
import GameService from '@/services/game.service';




export const store = createStore({
    state() {
        return {
            games: [],
            currentGame:null,
            news:[],
            status:'idle',
            error:null,
        }
    },

    mutations: {
        SET_STATUS(state,status) {
            state.status = status
        },

        SET_ERROR(state,error) {
            state.error = error
        },

        SET_GAMES(state,games) {
            state.games = games
        },

        SET_CURRENT(state,card) {
            state.currentGame = card
        },

        SET_NEWS(state,news) {
            state.news = news
        }
    },

    getters: {
        getGames(state) {
            return state.games.filter((item,i) => i < 12)
        }
    },

    actions: {
        async fetchGames({commit}) {
            commit('SET_STATUS', 'pending')
            try {
                const response = await GameService.fetchGames()
                commit('SET_GAMES', response?.data)
                commit('SET_STATUS', 'fulfilled')
            } catch (error) {
                commit('SET_ERROR', error.message)
                commit('SET_STATUS', 'rejected')
            }
        },

        async fetchCurrentGame({commit},id) {
            commit('SET_STATUS', 'pending')
            try {
                const response = await GameService.fetchCurrentGame(id)
                commit('SET_CURRENT', response?.data)
                commit('SET_STATUS', 'fulfilled')
            } catch (error) {
                commit('SET_ERROR', error.message)
                commit('SET_STATUS', 'rejected')
            }
        },

        async fetchNews({commit}) {
            commit('SET_STATUS', 'pending')
            try {
                const response = await GameService.fetchNews()
                commit('SET_NEWS', response?.data)
                commit('SET_STATUS', 'fulfilled')
            } catch (error) {
                commit('SET_ERROR', error.message)
                commit('SET_STATUS', 'rejected')
            }
        },
    }
})