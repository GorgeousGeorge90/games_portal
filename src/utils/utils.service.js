

class UtilsService {

    getDate(str) {
        return new Date(str).getTime()/1000
    }

    async delay(time) {
        return new Promise(res => {
            setTimeout(()=> res(),time)
        } )
    }
}

export default new UtilsService()