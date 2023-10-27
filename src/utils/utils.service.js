

class UtilsService {

    cutText(str) {
        return str.slice(0,str.length - 3)
    }
}

export default new UtilsService()