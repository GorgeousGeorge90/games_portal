import { createStore } from 'vuex';
import GameService from '@/services/game.service';
import CommentsService from "@/services/comments.service";
import UtilsService from '@/utils/utils.service';


export const store = createStore({
    state() {
        return {
            games: [],
            currentGame:null,
            news:[],
            giveaways:[],
            comments:[],
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
        },

        SET_COMMENTS(state,comments) {
            state.comments = comments
        },

        ADD_COMMENT(state,comment) {
            state.comments.push(comment)
        },

        DELETE_COMMENT(state,id) {
            state.comments = state.comments.filter(comment => comment.id !== id)
        }
    },

    getters: {
        getGames:state => {
            return state.games.filter((item,i) => i < 16)
        },

        findCurrent:state => title => {
            return  state.games.find((item) => item.title.includes(title))

        },

        getComments:state => {
            return state.comments
        },

        sortByDate:state => {
            return state.games.sort((a,b) =>
               UtilsService.getDate(a.realease_date) -  UtilsService.getDate(b.realease_date))
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
        },

        async fetchComments({commit}) {
            commit('SET_STATUS', 'pending')
            const response = await CommentsService.fetchComments()
            if (response) {
                commit('SET_COMMENTS', response)
                commit('SET_STATUS', 'fulfilled')
            } else {
                commit('SET_ERROR', "Error!")
                commit('SET_STATUS', 'rejected')
            }
        },

        async addComment({commit},payload) {
            const { name, comment } = payload
            commit('SET_STATUS', 'pending')
            const response = await CommentsService.addComment(name,comment)
            if (response) {
                commit('ADD_COMMENT', response[0])
                commit('SET_STATUS', 'fulfilled')
            } else {
                commit('SET_ERROR', "Error!")
                commit('SET_STATUS', 'rejected')
            }
        },

        async deleteComment({commit},id) {
            commit('SET_STATUS', 'pending')
            await CommentsService.deleteComment(id).then(()=>{
                commit('DELETE_COMMENT', id)
                commit('SET_STATUS', 'fulfilled')
            })
        }
    }
})