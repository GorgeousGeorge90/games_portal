

class UtilsService {

    getDate(str) {
        return new Date(str).getTime()/1000
    }
}

export default new UtilsService()