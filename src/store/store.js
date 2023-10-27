import { createStore } from 'vuex';
import GameService from '@/services/game.service';




export const store = createStore({
    state() {
        return {
            games: [],
            currentGame:null,
            news:[],
            giveaways:[],
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
        },

        SET_GIVEAWAYS(state,giveaways) {
            state.giveaways = giveaways
        },

        CLEAR_CURRENT(state) {
            state.currentGame = null
        }
    },

    getters: {
        getGames(state) {
            return state.games.filter((item,i) => i < 12)
        },

        findCurrent(state,title) {
            let current = state.games.find((item) => item.title === title )
            return current ? current: "Sorry we didn't find this game!"
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

        async fetchGiveaways({commit}) {
            commit('SET_STATUS', 'pending')
            try {
                const response = await GameService.fetchGiveaways()
                commit('SET_GIVEAWAYS', response?.data)
                commit('SET_STATUS', 'fulfilled')
            } catch (error) {
                commit('SET_ERROR', error.message)
                commit('SET_STATUS', 'rejected')
            }
        }
    }
})