import { createStore } from 'vuex';
import GameService from '@/services/game.service';
import CommentsService from "@/services/reviews.service";
import UtilsService from '@/utils/utils.service';


export const store = createStore({
    state() {
        return {
            games: [],
            currentGame:null,
            news:[],
            giveaways:[],
            reviews:[],
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

        SET_REVIEWS(state,reviews) {
            state.reviews = reviews
        },

        ADD_REVIEW(state,review) {
                state.reviews.push(review)
        },

        DELETE_REVIEW(state,id) {
            state.reviews = state.reviews.filter(review => review.id !== id)
        }
    },

    getters: {
        getGames:state => {
            return state.games.filter((item,i) => i < 16)
        },

        findCurrent:state => title => {
            return  state.games.find((item) => item.title.includes(title))

        },

        getReviews:state => {
            return state.reviews;
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

        async fetchReviews({commit}) {
            commit('SET_STATUS', 'pending')
            const response = await CommentsService.fetchReviews()
            if (response) {
                commit('SET_REVIEWS', response)
                commit('SET_STATUS', 'fulfilled')
            } else {
                commit('SET_ERROR', "Error!")
                commit('SET_STATUS', 'rejected')
            }
        },

        async addReview({commit,state},payload) {
            const { review, name } = payload
            commit('SET_STATUS', 'pending')
            const response = await CommentsService.addReview(review,name)
            if (response) {
                if (state.reviews.length === 3) {
                    await CommentsService.deleteReview(state.reviews[0].id)
                    commit('DELETE_REVIEW',state.reviews[0].id)
                    commit('ADD_REVIEW', response[0])
                    commit('SET_STATUS', 'fulfilled')
                } else {
                    commit('ADD_REVIEW', response[0])
                    commit('SET_STATUS', 'fulfilled')
                }
            } else {
                commit('SET_ERROR', "Error!")
                commit('SET_STATUS', 'rejected')
            }
        },

        async deleteReview({commit},id) {
            commit('SET_STATUS', 'pending')
            await CommentsService.deleteReview(id).then(()=>{
                commit('DELETE_REVIEW', id)
                commit('SET_STATUS', 'fulfilled')
            })
        }
    }
})