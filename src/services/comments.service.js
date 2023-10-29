import supabase from '@/client';


class CommentsService {
    constructor() {}

    async fetchComments() {
        let { data:comments } = await supabase
            .from('games_com')
            .select('*')

        return comments
    }

    async addComment(name,comment) {
        const { data } = await supabase
            .from('games_com')
            .upsert({
                name:name,
                comment:comment,
            })
            .select()

        return data
    }

    async deleteComment(id) {
        const { error } = await supabase
            .from('games_com')
            .delete()
            .eq('id', id)

        return error
    }

}

export default new CommentsService()