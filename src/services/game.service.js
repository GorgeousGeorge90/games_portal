import axios from 'axios';


class GameService {
    gamesUrl = 'https://mmo-games.p.rapidapi.com/games'
    gameUrl = 'https://mmo-games.p.rapidapi.com/game'
    newsUrl = 'https://mmo-games.p.rapidapi.com/latestnews'
    giveawaysURL = 'https://mmo-games.p.rapidapi.com/giveaways'

    constructor() {
        this.options = {
            method: 'GET',
            url:null,
            params:null,
            headers: {
                'X-RapidAPI-Key': 'b0f258d306mshadb36a50b059aa4p133a42jsn54641b42874c',
                'X-RapidAPI-Host': 'mmo-games.p.rapidapi.com'
            }
        };
    }

    async fetchGames() {
            this.options.url = this.gamesUrl
            return await axios.request(this.options);
    }

    async fetchSortedGames(platform,category,sort) {
        this.options.url = this.gamesUrl
        this.options.params = {
            platform:platform,
            category:category,
            'sort-by':sort,
        }
        return await axios.request(this.options);
    }

    async fetchCurrentGame(id) {
             this.options.url = this.gameUrl
             this.options.params = {id:id}
             return await axios.request(this.options);
    }

    async fetchNews() {
        this.options.url = this.newsUrl
        return await axios.request(this.options);
    }

    async fetchGiveaways() {
        this.options.url = this.giveawaysURL
        return await axios.request(this.options);
    }
}

export default new GameService()